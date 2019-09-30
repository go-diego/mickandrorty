import * as types from "./constants";

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}

export interface CharacterFilters {
  name?: string;
  page: string | null;
}

export interface CharacterState {
  info: Info | null;
  characters: Character[] | null;
  loading: boolean;
  error: boolean;
  error_message?: string | null;
}

interface CharacterRequestAction {
  type:
    | typeof types.FETCH_CHARACTER_LIST_REQUEST
    | typeof types.FETCH_FILTERED_CHARACTER_LIST_REQUEST
    | typeof types.FETCH_CHARACTER_DETAILS_REQUEST
    | typeof types.IS_LOADING_CHARACTERS;
  payload?: CharacterFilters | null | string;
}

interface CharacterResponseAction {
  type:
    | typeof types.FETCH_CHARACTER_LIST_SUCCESS
    | typeof types.FETCH_CHARACTER_DETAILS_SUCCESS
    | typeof types.FETCH_CHARACTER_ERROR;
  payload: CharacterState;
}

interface CharacterResetAction {
  type: typeof types.RESET_CHARACTER_STATE;
  payload?: null;
}

export type CharacterActionTypes =
  | CharacterRequestAction
  | CharacterResponseAction
  | CharacterResetAction;
