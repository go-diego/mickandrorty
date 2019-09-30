import { EpisodeState, EpisodeActionTypes } from "./types";
import * as types from "./constants";

const initialState: EpisodeState = {
  info: null,
  episodes: null,
  loading: true,
  error: false,
  error_message: null
};

export function episodeReducer(
  state = initialState,
  action: EpisodeActionTypes
): EpisodeState {
  switch (action.type) {
    case types.FETCH_FILTERED_EPISODE_LIST_REQUEST:
      return {
        ...state,
        ...{ loading: true, error: false }
      };
    case types.FETCH_FILTERED_EPISODE_LIST_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}

/**
 * case types.FETCH_FILTERED_EPISODE_LIST_REQUEST:
      return {
        ...state,
        ...{ loading: true, error: false }
      };
    case types.FETCH_FILTERED_EPISODE_LIST_SUCCESS:
      return {
        ...state,
        ...action.payload
      };

    case types.CHARACTER_REQUEST_ERROR:
      return {
        ...state,
        ...action.payload
      };
    case types.RESET_EPISODE_STATE:
      return {
        ...state,
        ...{
          list: null,
          details: null,
          loading: true,
          error: false
        }
      };
 */
