import {
  addDefensiveRebound,
  addFoul,
  addOffensiveRebound,
  addPass,
  addThreePoints,
  addTwoPoints,
  createPlayer,
} from "./Player";
import type { Player } from "./Player";

describe("Player", () => {
  const expectedPlayer: Player = {
    name: "Test",
    points: 0,
    defensiveRebounds: 0,
    fouls: 0,
    number: 0,
    offensiveRebounds: 0,
    passes: 0,
  };

  it("it should return a player", () => {
    expect(createPlayer("Test")).toEqual(expectedPlayer);
  });

  it("should add two points to a player", () => {
    expect(addTwoPoints(expectedPlayer)).toEqual({
      ...expectedPlayer,
      points: expectedPlayer.points + 2,
    });
  });

  it("should add three points to a player", () => {
    expect(addThreePoints(expectedPlayer)).toEqual({
      ...expectedPlayer,
      points: expectedPlayer.points + 3,
    });
  });

  it("should add a pass to a player", () => {
    expect(addPass(expectedPlayer)).toEqual({
      ...expectedPlayer,
      passes: expectedPlayer.passes + 1,
    });
  });

  it("should add a foul to a player", () => {
    expect(addFoul(expectedPlayer)).toEqual({
      ...expectedPlayer,
      fouls: expectedPlayer.fouls + 1,
    });
  });

  it("should add an offensive rebound to a player", () => {
    expect(addOffensiveRebound(expectedPlayer)).toEqual({
      ...expectedPlayer,
      offensiveRebounds: expectedPlayer.offensiveRebounds + 1,
    });
  });

  it("should add a defensive rebound to a player", () => {
    expect(addDefensiveRebound(expectedPlayer)).toEqual({
      ...expectedPlayer,
      defensiveRebounds: expectedPlayer.defensiveRebounds + 1,
    });
  });
});
