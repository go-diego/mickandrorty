import React from "react";
import qs from "qs";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Layout from "../components/Layout";
import Content from "../components/Content";
import CharacterCard from "../components/CharacterCard";
import Puff from "../components/Puff";
import Loading from "../components/Loading";
import Error from "../components/Error";
import { State as IState } from "../store/rootReducer";
import {
  getCharactersAction,
  getFilteredCharactersAction,
  isLoadingCharacterAction
} from "../store/character/actions";

const LoadingMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Characters() {
  const dispatch = useDispatch();
  const store = useSelector((state: IState) => state.character);
  const [activePage, setActivePage] = React.useState(1);
  const [isLastPage, setIsLastPage] = React.useState(false);
  const [queryName, setQueryName] = React.useState("");

  const handleScroll = React.useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;

    if (isLastPage) {
      return;
    }

    dispatch(isLoadingCharacterAction());
  }, [dispatch, isLastPage]);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("touchmove", handleScroll, {
      passive: false
    });
    return () => {
      window.removeEventListener("touchmove", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  React.useEffect(() => {
    dispatch(getCharactersAction({ page: `${activePage}`, name: queryName }));
  }, [dispatch, activePage]);

  React.useEffect(() => {
    if (store.loading && store.info) {
      const splitArray = store.info.next.split("/");
      const query = splitArray[splitArray.length - 1];
      const parsedQuery = qs.parse(query, { ignoreQueryPrefix: true });
      setActivePage(parsedQuery.page);
      if (parseInt(parsedQuery.page, 10) === store.info.pages) {
        setIsLastPage(true);
      }
    }
  }, [store.info, store.loading]);

  function handleNameQuery(event: React.FormEvent<HTMLInputElement>) {
    const name = event.currentTarget.value;
    setIsLastPage(false);
    setQueryName(name);
    dispatch(getFilteredCharactersAction({ page: "1", name }));
  }

  // TODO: add label "Displaying x out of total"
  return (
    <Layout>
      {!store.error && (
        <Content>
          <div className="columns">
            <div className="column">
              <h1 className="title">Characters</h1>
            </div>
            <div className="column">
              <div className={`control ${store.loading ? "is-loading" : ""}`}>
                <input
                  disabled={store.loading ? true : false}
                  value={queryName}
                  onChange={handleNameQuery}
                  className="input is-rounded"
                  type="text"
                  placeholder="Search for a character by name"
                />
              </div>
            </div>
          </div>
          {store.loading && !store.characters && <Loading />}
          {store.characters && (
            <div className="columns is-multiline">
              {store.characters.map(item => {
                return (
                  <div
                    key={item.id}
                    className="column is-one-third-tablet is-one-third-desktop is-one-quarter-widescreen is-one-quarter-fullhd"
                  >
                    <CharacterCard
                      isLoading={store.loading}
                      id={item.id}
                      image={item.image}
                      name={item.name}
                      species={item.species}
                      status={item.status}
                    />
                  </div>
                );
              })}
            </div>
          )}
          {store.loading && store.characters && (
            <LoadingMore>
              <p className="has-text-centered">Loading more characters...</p>
              <Puff color="#00d1b2" />
            </LoadingMore>
          )}
        </Content>
      )}
      {store.error && <Error>{store.error_message}</Error>}
    </Layout>
  );
}
