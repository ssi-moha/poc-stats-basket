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
      playerReducer(expectedPlayer, {
        type: PlayerActionTypes.TWO_POINTS,
        index: 0,
      })
    ).toEqual({ ...expectedPlayer, points: expectedPlayer.points + 2 });
  });

  it("should return a player state with three more points", () => {
    expect(
      playerReducer(expectedPlayer, {
        type: PlayerActionTypes.THREE_POINTS,
        index: 0,
      })
    ).toEqual({ ...expectedPlayer, points: expectedPlayer.points + 3 });
  });

  it("should return a player state with one more passes", () => {
    expect(
      playerReducer(expectedPlayer, { type: PlayerActionTypes.PASS, index: 0 })
    ).toEqual({ ...expectedPlayer, passes: expectedPlayer.passes + 1 });
  });

  it("should return a player state with one more foul", () => {
    expect(
      playerReducer(expectedPlayer, { type: PlayerActionTypes.FOUL, index: 0 })
    ).toEqual({ ...expectedPlayer, fouls: expectedPlayer.fouls + 1 });
  });

  it("should return a player state with one more offensive rebound", () => {
    expect(
      playerReducer(expectedPlayer, {
        type: PlayerActionTypes.OFFENSIVE_REBOUND,
        index: 0,
      })
    ).toEqual({
      ...expectedPlayer,
      offensiveRebounds: expectedPlayer.offensiveRebounds + 1,
    });
  });

  it("should return a player state with one more defensive rebound", () => {
    expect(
      playerReducer(expectedPlayer, {
        type: PlayerActionTypes.DEFENSIVE_REBOUND,
        index: 0,
      })
    ).toEqual({
      ...expectedPlayer,
      defensiveRebounds: expectedPlayer.defensiveRebounds + 1,
    });
  });
});
