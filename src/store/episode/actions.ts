import { EpisodeFilters, EpisodeActionTypes } from "./types";
import * as types from "./constants";

export function getFilteredEpisodesAction(
  payload: EpisodeFilters
): EpisodeActionTypes {
  return { type: types.FETCH_FILTERED_EPISODE_LIST_REQUEST, payload };
}

export function resetEpisodeAction(): EpisodeActionTypes {
  return { type: types.RESET_EPISODE_STATE };
}
