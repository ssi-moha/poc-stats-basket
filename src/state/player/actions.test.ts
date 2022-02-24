import { addTwoPoints, addThreePoints, addPass, addFoul, addOffensiveRebound, addDefensiveRebound } from "./actions"
import { PlayerActionTypes } from "./types"

describe("Player - Actions", () => {
    it("should return an action who add two points", () => {
        const expectedAction = {
            type: PlayerActionTypes.TWO_POINTS
        }
        expect(addTwoPoints()).toEqual(expectedAction)
    })

    it("should return an action who add three points", () => {
        const expectedAction = {
            type: PlayerActionTypes.THREE_POINTS
        }
        expect(addThreePoints()).toEqual(expectedAction)
    })

    it("should return an action who add a pass", () => {
        const expectedAction = {
            type: PlayerActionTypes.PASS
        }
        expect(addPass()).toEqual(expectedAction)
    })

    it("should return an action who add a foul", () => {
        const expectedAction = {
            type: PlayerActionTypes.FOUL
        }
        expect(addFoul()).toEqual(expectedAction)
    })

    it("should return an action who add an offensive rebound", () => {
        const expectedAction = {
            type: PlayerActionTypes.OFFENSIVE_REBOUND
        }
        expect(addOffensiveRebound()).toEqual(expectedAction)
    })

    it("should return an action who add a defensive rebound", () => {
        const expectedAction = {
            type: PlayerActionTypes.DEFENSIVE_REBOUND
        }
        expect(addDefensiveRebound()).toEqual(expectedAction)
    })
})