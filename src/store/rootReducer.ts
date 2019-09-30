import { combineReducers } from "redux";
import { characterReducer } from "./character/reducers";
import { episodeReducer } from "./episode/reducers";
import { CharacterState } from "./character/types";
import { EpisodeState } from "./episode/types";

export interface State {
  character: CharacterState;
  episode: EpisodeState;
}

const rootReducer = combineReducers({
  character: characterReducer,
  episode: episodeReducer
});

export default rootReducer;
