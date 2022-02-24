import type { Player } from "../../entities/Player/Player";
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

  it("should return a player state with two more points", () => {
    expect(
      playerReducer(expectedPlayer, { type: PlayerActionTypes.TWO_POINTS })
    ).toEqual({ ...expectedPlayer, points: expectedPlayer.points + 2 });
  });

  it("should return a player state with three more points", () => {
    expect(
      playerReducer(expectedPlayer, { type: PlayerActionTypes.THREE_POINTS })
    ).toEqual({ ...expectedPlayer, points: expectedPlayer.points + 3 });
  });

  it("should return a player state with one more passes", () => {
    expect(
      playerReducer(expectedPlayer, { type: PlayerActionTypes.PASS })
    ).toEqual({ ...expectedPlayer, passes: expectedPlayer.passes + 1 });
  });

  it("should return a player state with one more foul", () => {
    expect(
      playerReducer(expectedPlayer, { type: PlayerActionTypes.FOUL })
    ).toEqual({ ...expectedPlayer, fouls: expectedPlayer.fouls + 1 });
  });
});
