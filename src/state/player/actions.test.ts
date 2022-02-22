import { addTwoPoints, addThreePoints, addPass } from "./actions"
import { PlayerActionTypes } from "./types"

describe("Player - Actions", () => {
    it("should create an action who add two points", () => {
        const expectedAction = {
            type: PlayerActionTypes.TWO_POINTS
        }
        expect(addTwoPoints()).toEqual(expectedAction)
    })

    it("should create an action who add three points", () => {
        const expectedAction = {
            type: PlayerActionTypes.THREE_POINTS
        }
        expect(addThreePoints()).toEqual(expectedAction)
    })

    it("should create an action who add a pass", () => {
        const expectedAction = {
            type: PlayerActionTypes.PASS
        }
        expect(addPass()).toEqual(expectedAction)
    })
})