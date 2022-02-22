import { PlayerActionTypes } from "./types";

type TwoPointsAction = {
  type: PlayerActionTypes.TWO_POINTS;
};

type ThreePointsAction = {
  type: PlayerActionTypes.THREE_POINTS;
};

export type PlayerActions = TwoPointsAction | ThreePointsAction;

export function addTwoPoints(): TwoPointsAction {
    return {
        type: PlayerActionTypes.TWO_POINTS
    }
}

export function addThreePoints(): ThreePointsAction {
    return {
        type: PlayerActionTypes.THREE_POINTS
    }
}