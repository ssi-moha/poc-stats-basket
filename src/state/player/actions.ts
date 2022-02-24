import { PlayerActionTypes } from "./types";

type ActionWithIndex<Action> = Action & { index: number };

type TwoPointsAction = ActionWithIndex<{
  type: PlayerActionTypes.TWO_POINTS;
}>;

type ThreePointsAction = ActionWithIndex<{
  type: PlayerActionTypes.THREE_POINTS;
}>;

type PassAction = ActionWithIndex<{
  type: PlayerActionTypes.PASS;
}>;

type FoulAction = ActionWithIndex<{
  type: PlayerActionTypes.FOUL;
}>;

type OffensiveReboundAction = ActionWithIndex<{
  type: PlayerActionTypes.OFFENSIVE_REBOUND;
}>;

type DefensiveReboundAction = ActionWithIndex<{
  type: PlayerActionTypes.DEFENSIVE_REBOUND;
}>;

export type PlayerActions =
  | TwoPointsAction
  | ThreePointsAction
  | PassAction
  | FoulAction
  | OffensiveReboundAction
  | DefensiveReboundAction;

export function addTwoPoints(index: number): TwoPointsAction {
  return {
    type: PlayerActionTypes.TWO_POINTS,
    index,
  };
}

export function addThreePoints(index: number): ThreePointsAction {
  return {
    type: PlayerActionTypes.THREE_POINTS,
    index,
  };
}

export function addPass(index: number): PassAction {
  return {
    type: PlayerActionTypes.PASS,
    index,
  };
}

export function addFoul(index: number): FoulAction {
  return {
    type: PlayerActionTypes.FOUL,
    index,
  };
}

export function addOffensiveRebound(index: number): OffensiveReboundAction {
  return {
    type: PlayerActionTypes.OFFENSIVE_REBOUND,
    index,
  };
}

export function addDefensiveRebound(index: number): DefensiveReboundAction {
  return {
    type: PlayerActionTypes.DEFENSIVE_REBOUND,
    index,
  };
}
