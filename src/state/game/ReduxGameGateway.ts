import type { AppDispatch } from "../../app/store";
import type { GameGateway } from "../../useCases/Game/GameGateway";
import { finish, start } from "./actions";

export function createReduxGameGateway(dispatch: AppDispatch): GameGateway {
  return {
    start() {
      dispatch(start());
    },

    finish() {
      dispatch(finish());
    },
  };
}
