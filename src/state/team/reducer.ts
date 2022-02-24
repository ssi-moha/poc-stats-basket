import { createPlayer } from "../../entities/Player/Player";

import get from "lodash/get";
import type { Team } from "../../entities/Team/Team";
import { playerReducer } from "../player/reducer";
import type { TeamActions } from "./actions";
import { TeamActionTypes } from "./types";
import applyReducerToPlayer from "./utils/applyReducerToPlayer";
import { PlayerActions } from "../player/actions";

export type TeamState = Team;

const initialState: TeamState = { name: "Los Angeles Lakers", players: [] };

export function teamReducer(
  state: TeamState = initialState,
  action: TeamActions
) {
  if (action.type.startsWith("player/")) {
    return {
      ...state,
      players: applyReducerToPlayer(playerReducer, state.players, action as PlayerActions),
    };
  }

  switch (action.type) {
    case TeamActionTypes.ADD_PLAYER:
      return {
        ...state,
        players: [
          ...state.players,
          createPlayer(get(action, "payload.name", "TEST")),
        ],
      };
    default:
      return state;
  }
}
