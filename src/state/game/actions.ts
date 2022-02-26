import { GameActionTypes } from "./types";

type StartAction = {
    type: GameActionTypes.START;
}

type FinishAction = {
    type: GameActionTypes.FINISH;
}

export type GameActions = StartAction | FinishAction;

export function start(): StartAction {
    return {
        type: GameActionTypes.START,
    };
}

export function finish(): FinishAction {
    return {
        type: GameActionTypes.FINISH,
    };
}