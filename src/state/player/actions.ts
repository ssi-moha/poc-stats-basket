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

type FoulAction = {
  type: PlayerActionTypes.FOUL;
};

export type PlayerActions = TwoPointsAction | ThreePointsAction | PassAction | FoulAction;

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

export function addFoul(): FoulAction {
  return {
      type: PlayerActionTypes.FOUL
  }
}