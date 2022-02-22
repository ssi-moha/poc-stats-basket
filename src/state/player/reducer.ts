import {
  addThreePoints,
  addTwoPoints,
  createPlayer,
  Player,
} from "../../entities/Player/Player";
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
    default:
      return state;
  }
}
