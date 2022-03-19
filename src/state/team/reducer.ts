import { createPlayer } from "../../entities/Player/Player";

import { addPlayer, changeIsSubstituting, replacePlayer, Team } from "../../entities/Team/Team";
import { playerReducer } from "../player/reducer";
import type { TeamActions } from "./actions";
import { TeamActionTypes } from "./types";
import applyReducerToPlayer from "./utils/applyReducerToPlayer";
import { PlayerActions } from "../player/actions";

export type TeamState = Team;

const initialState: TeamState = {
  name: "Los Angeles Lakers",
  players: [],
  subs: [],
  isSubstituting: false,
};

export function teamReducer(
  state: TeamState = initialState,
  action: TeamActions
) {
  if (action.type.startsWith("player/")) {
    return {
      ...state,
      players: applyReducerToPlayer(
        playerReducer,
        state.players,
        action as PlayerActions
      ),
    };
  }

  switch (action.type) {
    case TeamActionTypes.ADD_PLAYER:
      return addPlayer(state, createPlayer(action.payload.name));
    case TeamActionTypes.REPLACE_PLAYER:
      return replacePlayer(
        state,
        action.payload.outcomingPlayer,
        action.payload.incomingPlayer
      );
    case TeamActionTypes.CHANGE_IS_SUBSTITUTING:
      return changeIsSubstituting(state);
    default:
      return state;
  }
}
