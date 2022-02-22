import { PlayerActionTypes } from "./types";

type TwoPointsAction = {
  type: PlayerActionTypes.TWO_POINTS;
};

type ThreePointsAction = {
  type: PlayerActionTypes.THREE_POINTS;
};

type PassAction = {
  type: PlayerActionTypes.PASS;
};

export type PlayerActions = TwoPointsAction | ThreePointsAction | PassAction;

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

export function addPass(): PassAction {
  return {
      type: PlayerActionTypes.PASS
  }
}