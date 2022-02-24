import { createPlayer } from "../Player/Player";
import { addPlayer, Team } from "../Team/Team";
import type { Player } from "../Player/Player";
import { createTeam } from "./Team";

describe("Team", () => {
  const expectedTeam: Team = {
    name: "Miami Heat",
    players: [],
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
});
