import { finish, start } from "./actions";
import { GameActionTypes } from "./types";

describe("Game - Actions", () => {
    it("should return an action who start the game", () => {
        const expectedAction = {
        type: GameActionTypes.START,
        };
        expect(start()).toEqual(expectedAction);
    });
    
    it("should return an action who finish the game", () => {
        const expectedAction = {
        type: GameActionTypes.FINISH,
        };
        expect(finish()).toEqual(expectedAction);
    });
})