import type { Game } from "../../entities/Game/Game";
import { gameReducer } from "./reducer";
import { GameActionTypes } from "./types";

describe("Game - Reducer", () => {
  const game: Game = {
    isFinished: false,
    isStarted: false,
  };

  it("should return a game state with isStarted true", () => {
    expect(
      gameReducer(game, {
        type: GameActionTypes.START,
      })
    ).toEqual({ ...game, isStarted: true });
  });
  
  it("should return a game state with isFinished true", () => {
    expect(
      gameReducer(game, {
        type: GameActionTypes.FINISH,
      })
    ).toEqual({ ...game, isFinished: true });
  });
});
