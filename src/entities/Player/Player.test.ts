import { addThreePoints, addTwoPoints, createPlayer, Player } from "./Player";

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
});