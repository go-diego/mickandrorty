import { all } from "redux-saga/effects";
import { characterSagas } from "./character/sagas";
import { episodeSagas } from "./episode/sagas";

export default function* sagas() {
  yield all([...characterSagas, ...episodeSagas]);
}
