import { createPlayer } from "../Player/Player";
import { addPlayer, changeIsSubstituting, replacePlayer, Team } from "../Team/Team";
import type { Player } from "../Player/Player";
import { createTeam } from "./Team";
import { generateRandomPlayerName } from "../../utils";

describe("Team", () => {
  const expectedTeam: Team = {
    name: "Miami Heat",
    players: [],
    subs: [],
    isSubstituting: false,
  };

  it("it should return a team", () => {
    expect(createTeam("Miami Heat")).toEqual(expectedTeam);
  });

  it("should add a player to a team", () => {
    const newPlayer: Player = createPlayer("Lebron James");
    expect(addPlayer(expectedTeam, newPlayer)).toEqual({
      ...expectedTeam,
      players: [...expectedTeam.players, newPlayer],
    });
  });

  it("should add a player as sub to a team", () => {
    const newPlayer: Player = createPlayer("Lebron James");

    const players = Array.from(Array(5)).map(() =>
      createPlayer("Lebron James")
    );

    expect(
      addPlayer({ ...expectedTeam, players }, createPlayer("Lebron James"))
    ).toEqual({
      ...expectedTeam,
      players: [newPlayer, newPlayer, newPlayer, newPlayer, newPlayer],
      subs: [newPlayer],
    });
  });

  it("should replace a player by a sub in the team", () => {
    const newSub: Player = createPlayer("Dwyane Wade");
    const randomNames = Array.from(Array(5)).map(() =>
      generateRandomPlayerName()
    );

    const players = randomNames.map((name) => createPlayer(name));

    expect(
      replacePlayer(
        { ...expectedTeam, players, subs: [newSub] },
        players[0],
        newSub
      )
    ).toEqual({
      ...expectedTeam,
      players: [newSub, ...players.slice(1)],
      subs: [players[0]],
    });
  });

  it("should set isSubstituting to true", () => {
    const team = createTeam("Miami Heat");

    expect(changeIsSubstituting(team).isSubstituting).toBe(true);
  });
});
