import { put, call, takeLatest, fork } from "redux-saga/effects";
import * as types from "./constants";
import { EpisodeActionTypes } from "./types";
import RickAndMortyAPI from "../../apis/rickandmorty.api";

const rickAndMortyApi = RickAndMortyAPI();

export function* getFilteredEpisodes({ payload: arg }: EpisodeActionTypes) {
  yield put({ type: types.RESET_EPISODE_STATE });
  try {
    const response = yield call(rickAndMortyApi.getEpisodes, arg);
    yield put({
      type: types.FETCH_FILTERED_EPISODE_LIST_SUCCESS,
      payload: {
        episodes: response,
        loading: false,
        error: false
      }
    });
  } catch (error) {
    yield put({
      type: types.FETCH_EPISODE_ERROR,
      payload: {
        episodes: null,
        loading: false,
        error: true,
        error_message: error.message
      }
    });
  }
}

export function* watchGetFilteredEpisodes() {
  yield takeLatest(
    types.FETCH_FILTERED_EPISODE_LIST_REQUEST,
    getFilteredEpisodes
  );
}

export const episodeSagas = [fork(watchGetFilteredEpisodes)];
