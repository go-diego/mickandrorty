import * as types from "./constants";

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

// TODO common type. different file?
export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

// TODO: do we have common filter properies that can be abstracted?
export interface EpisodeFilters {}

// TODO: can I define a base state interface and extend it? It would go in common
export interface EpisodeState {
  info: Info | null;
  episodes: Episode[] | null;
  loading: boolean;
  error: boolean;
  error_message?: string | null;
}

interface EpisodeRequestAction {
  type:
    | typeof types.FETCH_FILTERED_EPISODE_LIST_REQUEST
    | typeof types.RESET_EPISODE_STATE;
  payload?: string | EpisodeFilters;
}

interface EpisodeResponseAction {
  type:
    | typeof types.FETCH_FILTERED_EPISODE_LIST_SUCCESS
    | typeof types.FETCH_EPISODE_ERROR;
  payload: EpisodeState;
}

interface EpisoderResetAction {
  type: typeof types.RESET_EPISODE_STATE;
  payload?: null;
}

export type EpisodeActionTypes =
  | EpisodeRequestAction
  | EpisodeResponseAction
  | EpisoderResetAction;
