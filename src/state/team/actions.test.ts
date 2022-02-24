import { addPlayer } from "./actions";
import { TeamActionTypes } from "./types";

describe("Team - Actions", () => {
  it("should return an action that add a player to a Team", () => {
    const expectedAction = {
      type: TeamActionTypes.ADD_PLAYER,
      payload: { name: "Lebron James" },
    };

    expect(addPlayer("Lebron James")).toEqual(expectedAction);
  });
});
