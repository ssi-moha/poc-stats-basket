import {
  ThunkAction,
  Action,
  createStore,
  combineReducers,
  compose,
} from "@reduxjs/toolkit";
import { gameReducer } from "../state/game/reducer";
import { teamReducer } from "../state/team/reducer";

const composeEnhancers =
  // @ts-ignore
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? // @ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers();

const rootReducer = combineReducers({
  game: gameReducer,
  team: teamReducer,
});

export const store = createStore(rootReducer, enhancer);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
