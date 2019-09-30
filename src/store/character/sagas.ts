import { put, call, takeLatest, fork, delay } from "redux-saga/effects";
import * as types from "./constants";
import { CharacterActionTypes } from "./types";
import RickAndMortyAPI from "../../apis/rickandmorty.api";

const rickAndMortyApi = RickAndMortyAPI();

export function* getFilteredCharacters({ payload: arg }: CharacterActionTypes) {
  yield delay(500);
  yield put({ type: types.RESET_CHARACTER_STATE });
  try {
    const response = yield call(rickAndMortyApi.getCharacters, arg);
    yield put({
      type: types.FETCH_CHARACTER_LIST_SUCCESS,
      payload: {
        info: response.info,
        characters: response.results,
        loading: false,
        error: false
      }
    });
  } catch (error) {
    yield put({
      type: types.FETCH_CHARACTER_ERROR,
      payload: {
        info: null,
        characters: null,
        loading: false,
        error: true,
        error_message: error.message
      }
    });
  }
}

export function* getCharacters({ payload: arg }: CharacterActionTypes) {
  yield delay(500);
  try {
    const response = yield call(rickAndMortyApi.getCharacters, arg);
    yield put({
      type: types.FETCH_CHARACTER_LIST_SUCCESS,
      payload: {
        info: response.info,
        characters: response.results,
        loading: false,
        error: false
      }
    });
  } catch (error) {
    yield put({
      type: types.FETCH_CHARACTER_ERROR,
      payload: {
        info: null,
        characters: null,
        loading: false,
        error: true,
        error_message: error.message
      }
    });
  }
}

export function* getCharacterById({ payload: arg }: CharacterActionTypes) {
  yield put({ type: types.RESET_CHARACTER_STATE });
  try {
    const response = yield call(rickAndMortyApi.getCharacters, arg);
    yield put({
      type: types.FETCH_CHARACTER_DETAILS_SUCCESS,
      payload: {
        info: null,
        characters: [response],
        loading: false,
        error: false
      }
    });
  } catch (error) {
    yield put({
      type: types.FETCH_CHARACTER_ERROR,
      payload: {
        characters: null,
        loading: false,
        error: true,
        error_message: error.message
      }
    });
  }
}

export function* watchGetCharacters() {
  yield takeLatest(types.FETCH_CHARACTER_LIST_REQUEST, getCharacters);
}

export function* watchGetFilteredCharacters() {
  yield takeLatest(
    types.FETCH_FILTERED_CHARACTER_LIST_REQUEST,
    getFilteredCharacters
  );
}

export function* watchGetCharacterById() {
  yield takeLatest(types.FETCH_CHARACTER_DETAILS_REQUEST, getCharacterById);
}

export const characterSagas = [
  fork(watchGetCharacters),
  fork(watchGetFilteredCharacters),
  fork(watchGetCharacterById)
];
