import { PlayerActions } from "../../player/actions";

const applyReducerToPlayer = <T>(
  reducer: (state: T | undefined, action: PlayerActions) => T,
  state: T[],
  action: PlayerActions
): T[] => {
  if (state.length === 1) {
    return [reducer(state[0], action)];
  }

  return [
    ...state.slice(0, action.index),
    reducer(state[action.index], action),
    ...state.slice(action.index + 1),
  ];
};

export default applyReducerToPlayer;
