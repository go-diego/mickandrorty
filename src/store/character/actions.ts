import { CharacterFilters, CharacterActionTypes } from "./types";
import * as types from "./constants";

export function getCharactersAction(
  payload: CharacterFilters
): CharacterActionTypes {
  return {
    type: types.FETCH_CHARACTER_LIST_REQUEST,
    payload
  };
}

export function isLoadingCharacterAction(): CharacterActionTypes {
  return {
    type: types.IS_LOADING_CHARACTERS
  };
}

export function getFilteredCharactersAction(
  payload: CharacterFilters
): CharacterActionTypes {
  return { type: types.FETCH_FILTERED_CHARACTER_LIST_REQUEST, payload };
}

export function getCharacterDetailsAction(
  payload: CharacterFilters | string
): CharacterActionTypes {
  return { type: types.FETCH_CHARACTER_DETAILS_REQUEST, payload };
}

export function resetCharacterAction(): CharacterActionTypes {
  return {
    type: types.RESET_CHARACTER_STATE
  };
}

// export const getFilteredEpisodesAction = payload => ({
//   type: types.FETCH_FILTERED_EPISODE_LIST,
//   payload
// });
