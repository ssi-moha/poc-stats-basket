import { TeamActionTypes } from "./types";

type AddPlayerAction = {
    type: TeamActionTypes.ADD_PLAYER;
    payload: { name: string };
}

type CorePlayerAction = {
    type: `player/${string}`
    index: number,
}

export type TeamActions = AddPlayerAction | CorePlayerAction;

export function addPlayer(name: string): AddPlayerAction {
    return {
        type: TeamActionTypes.ADD_PLAYER,
        payload: { name }
    };
}