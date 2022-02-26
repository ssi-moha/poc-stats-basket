import { createGame, finish, start } from "../../entities/Game/Game";
import type { Game } from "../../entities/Game/Game";
import { GameActions } from "./actions";
import { GameActionTypes } from "./types";

export type GameState = Game;

const initialState: GameState = createGame();

export function gameReducer(
  state: GameState = initialState,
  action: GameActions
): GameState {
  switch (action.type) {
    case GameActionTypes.START:
      return start(state);
    case GameActionTypes.FINISH:
      return finish(state);
    default:
      return state;
  }
}
