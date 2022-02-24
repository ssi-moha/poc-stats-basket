import {
  addTwoPoints,
  addThreePoints,
  addPass,
  addFoul,
  addOffensiveRebound,
  addDefensiveRebound,
} from "./actions";
import { PlayerActionTypes } from "./types";

describe("Player - Actions", () => {
  it("should return an action who add two points", () => {
    const expectedAction = {
      type: PlayerActionTypes.TWO_POINTS,
      index: 0,
    };
    expect(addTwoPoints(0)).toEqual(expectedAction);
  });

  it("should return an action who add three points", () => {
    const expectedAction = {
      type: PlayerActionTypes.THREE_POINTS,
      index: 0,
    };
    expect(addThreePoints(0)).toEqual(expectedAction);
  });

  it("should return an action who add a pass", () => {
    const expectedAction = {
      type: PlayerActionTypes.PASS,
      index: 0,
    };
    expect(addPass(0)).toEqual(expectedAction);
  });

  it("should return an action who add a foul", () => {
    const expectedAction = {
      type: PlayerActionTypes.FOUL,
      index: 0,
    };
    expect(addFoul(0)).toEqual(expectedAction);
  });

  it("should return an action who add an offensive rebound", () => {
    const expectedAction = {
      type: PlayerActionTypes.OFFENSIVE_REBOUND,
      index: 0,
    };
    expect(addOffensiveRebound(0)).toEqual(expectedAction);
  });

  it("should return an action who add a defensive rebound", () => {
    const expectedAction = {
      type: PlayerActionTypes.DEFENSIVE_REBOUND,
      index: 0,
    };
    expect(addDefensiveRebound(0)).toEqual(expectedAction);
  });
});
