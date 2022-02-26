import type { Game } from "./Game";
import { finish, createGame, start } from "./Game";

describe("Game", () => {
  const game: Game = {
    isStarted: false,
    isFinished: false,
  };

  it("should return a game", () => {
    expect(createGame()).toEqual(game);
  });

  it("should start a game", () => {
    expect(start(game)).toEqual({
      isStarted: true,
      isFinished: false,
    });
  });

  it("should finish a game", () => {
    expect(finish(game)).toEqual({
      isStarted: false,
      isFinished: true,
    });
  });
});
