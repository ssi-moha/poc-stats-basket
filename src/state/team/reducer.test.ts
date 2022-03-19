import { createPlayer } from "../../entities/Player/Player";
import { Team } from "../../entities/Team/Team";
import { generateRandomPlayerName } from "../../utils";
import { addPlayer, changeIsSubstituting, replacePlayer } from "./actions";
import { teamReducer } from "./reducer";

describe("Team - Reducer", () => {
  const team: Team = {
    name: "Los Angeles Lakers",
    players: [],
    subs: [],
    isSubstituting: false,
  };

  it("should return a team state with a new player", () => {
    const player = {
      name: "Lebron James",
      number: 0,
      offensiveRebounds: 0,
      assists: 0,
      points: 0,
      defensiveRebounds: 0,
      fouls: 0,
    };

    const expectedTeam = {
      ...team,
      players: [player],
    };

    expect(teamReducer(team, addPlayer(player.name))).toEqual(expectedTeam);
  });

  it("should return a team state with a new sub", () => {
    const player = createPlayer("Lebron James");

    const activePlayers = [player, player, player, player, player];

    const expectedTeam = {
      ...team,
      players: activePlayers,
      subs: [player],
    };

    expect(
      teamReducer(
        { ...team, players: activePlayers },
        addPlayer(player.name || "")
      )
    ).toEqual(expectedTeam);
  });

  it("should return a team state with a player replaced by another", () => {
    const sub = createPlayer("Dwyane Wade");

    const randomNames = Array.from(Array(5)).map(() =>
      generateRandomPlayerName()
    );

    const activePlayers = randomNames.map((name) => createPlayer(name));
    const expectedTeam = {
      ...team,
      players: [sub, ...activePlayers.slice(1)],
      subs: [activePlayers[0]],
    };

    expect(
      teamReducer(
        { ...team, players: activePlayers, subs: [sub] },
        replacePlayer(activePlayers[0], sub)
      )
    ).toEqual(expectedTeam);
  });

  it("should return a team state with isSubstituting changed", () => {
    const expectedTeam = {
      ...team,
      isSubstituting: true,
    };

    const isSubstitutingTeam = teamReducer(team, changeIsSubstituting());

    expect(isSubstitutingTeam).toEqual(expectedTeam);
    expect(teamReducer(isSubstitutingTeam, changeIsSubstituting())).toEqual({
      ...expectedTeam,
      isSubstituting: false,
    });
  });
});
