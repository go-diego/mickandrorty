import { CharacterState, CharacterActionTypes } from "./types";
import * as types from "./constants";

const initialState: CharacterState = {
  info: null,
  characters: null,
  loading: true,
  error: false,
  error_message: null
};

export function characterReducer(
  state = initialState,
  action: CharacterActionTypes
): CharacterState {
  switch (action.type) {
    case types.FETCH_CHARACTER_LIST_REQUEST:
      return {
        ...state,
        ...{ loading: true, error: false }
      };
    case types.FETCH_CHARACTER_LIST_SUCCESS:
      const { characters, ...rest } = action.payload;
      return {
        ...state,
        ...rest,
        ...{ characters: [...(state.characters || []), ...(characters || [])] }
      };
    case types.FETCH_CHARACTER_DETAILS_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    case types.FETCH_CHARACTER_ERROR:
      return {
        ...state,
        ...action.payload
      };
    case types.IS_LOADING_CHARACTERS:
      return {
        ...state,
        ...{ loading: true }
      };
    case types.RESET_CHARACTER_STATE:
      return {
        ...state,
        ...{
          info: null,
          characters: null,
          loading: true,
          error: false,
          error_message: null
        }
      };
    default:
      return state;
  }
}
