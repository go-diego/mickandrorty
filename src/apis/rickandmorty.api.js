import ky from "ky/umd";

export default function RickAndMortyAPI() {
  /**
   * Inspiration from https://github.com/afuh/rick-and-morty-api-node/blob/master/src/index.js
   */
  function getQuery(query) {
    if (Array.isArray(query)) {
      return `/[${query.join(",")}]`;
    }

    if (typeof query === "number") {
      return `/${query}`;
    }

    if (typeof query === "object") {
      return `/?${Object.keys(query)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}`
        )
        .join("&")}`;
    }

    if (typeof query === "undefined") {
      return "";
    }

    if (typeof query === "string") {
      try {
        return `/${parseInt(query, 10)}`;
      } catch (error) {
        throw new Error(
          `As argument use an object, an array, an integer or leave it blank`
        );
      }
    }

    throw new Error(
      `As argument use an object, an array, an integer or leave it blank`
    );
  }

  function makeApiInstance() {
    const parserUrl = "https://rickandmortyapi.com/api/";
    const api = ky.create({ prefixUrl: parserUrl, timeout: 50000 });
    return url => api.get(url).json();
  }

  const api = makeApiInstance();

  function getCharacters(query) {
    const url = `character${getQuery(query)}`;
    return api(url);
  }

  function getEpisodes(query) {
    const url = `episode${getQuery(query)}`;
    return api(url);
  }

  return Object.freeze({
    getCharacters,
    getEpisodes
  });
}
