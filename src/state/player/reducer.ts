import {
  addDefensiveRebound,
  addFoul,
  addOffensiveRebound,
  addPass,
  addThreePoints,
  addTwoPoints,
  createPlayer,
} from "../../entities/Player/Player";
import type { Player } from "../../entities/Player/Player";
import { PlayerActions } from "./actions";
import { PlayerActionTypes } from "./types";

export type PlayerState = Player;

const initialState: PlayerState = createPlayer("Lebron James");

export function playerReducer(
  state: PlayerState = initialState,
  action: PlayerActions
) {
  switch (action.type) {
    case PlayerActionTypes.TWO_POINTS:
      return addTwoPoints(state);
    case PlayerActionTypes.THREE_POINTS:
      return addThreePoints(state);
    case PlayerActionTypes.PASS:
      return addPass(state);
    case PlayerActionTypes.FOUL:
      return addFoul(state);
    case PlayerActionTypes.OFFENSIVE_REBOUND:
      return addOffensiveRebound(state);
    case PlayerActionTypes.DEFENSIVE_REBOUND:
      return addDefensiveRebound(state);
    default:
      return state;
  }
}
