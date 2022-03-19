import { Player } from "../../entities/Player/Player";
import { PlayerActions } from "../player/actions";
import { TeamActionTypes } from "./types";

type AddPlayerAction = {
  type: TeamActionTypes.ADD_PLAYER;
  payload: { name: string };
};

type ReplacePlayerAction = {
  type: TeamActionTypes.REPLACE_PLAYER;
  payload: { incomingPlayer: Player; outcomingPlayer: Player };
};

type ChangeIsSubstitutingAction = {
  type: TeamActionTypes.CHANGE_IS_SUBSTITUTING;
};

export type TeamActions =
  | AddPlayerAction
  | ReplacePlayerAction
  | ChangeIsSubstitutingAction
  | PlayerActions;

export function addPlayer(name: string): AddPlayerAction {
  return {
    type: TeamActionTypes.ADD_PLAYER,
    payload: { name },
  };
}

export function replacePlayer(
  outcomingPlayer: Player,
  incomingPlayer: Player
): ReplacePlayerAction {
  return {
    type: TeamActionTypes.REPLACE_PLAYER,
    payload: { incomingPlayer, outcomingPlayer },
  };
}

export function changeIsSubstituting(): ChangeIsSubstitutingAction {
  return {
    type: TeamActionTypes.CHANGE_IS_SUBSTITUTING,
  };
}
