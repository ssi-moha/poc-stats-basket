import { createPlayer } from "../../entities/Player/Player";
import { addPlayer, replacePlayer } from "./actions";
import { TeamActionTypes } from "./types";

describe("Team - Actions", () => {
  it("should return an action that add a player to a Team", () => {
    const expectedAction = {
      type: TeamActionTypes.ADD_PLAYER,
      payload: { name: "Lebron James" },
    };

    expect(addPlayer("Lebron James")).toEqual(expectedAction);
  });

  it("should return an action that replace a player by a sub", () => {
    const expectedAction = {
      type: TeamActionTypes.REPLACE_PLAYER,
      payload: {
        outcomingPlayer: createPlayer("Lebron James"),
        incomingPlayer: createPlayer("Dwyane Wade"),
      },
    }

    expect(replacePlayer(createPlayer("Lebron James"), createPlayer("Dwyane Wade"))).toEqual(expectedAction);
  })
});
