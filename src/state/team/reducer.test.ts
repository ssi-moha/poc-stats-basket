import { addPlayer } from "./actions";
import { teamReducer } from "./reducer";

describe("Team - Reducer", () => {
  const team = {
    name: "Los Angeles Lakers",
    players: [],
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
    
    expect(
      teamReducer(team, addPlayer(player.name))
    ).toEqual(expectedTeam);
  });
});
