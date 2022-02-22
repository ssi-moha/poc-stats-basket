import { Player } from "../../entities/Player/Player";
import { playerReducer } from "./reducer";
import { PlayerActionTypes } from "./types";

describe("Player - Reducer", () => {
  const expectedPlayer: Player = {
    name: "Lebron James",
    points: 0,
    defensiveRebounds: 0,
    fouls: 0,
    number: 0,
    offensiveRebounds: 0,
    passes: 0,
  };

  it("should return add two points to a player", () => {
    expect(
      playerReducer(expectedPlayer, { type: PlayerActionTypes.TWO_POINTS })
    ).toEqual({ ...expectedPlayer, points: expectedPlayer.points + 2 });
  });

  it("should return add three points to a player", () => {
    expect(
      playerReducer(expectedPlayer, { type: PlayerActionTypes.THREE_POINTS })
    ).toEqual({ ...expectedPlayer, points: expectedPlayer.points + 3 });
  });
});
