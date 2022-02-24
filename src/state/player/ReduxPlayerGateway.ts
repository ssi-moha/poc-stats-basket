import type { AppDispatch } from "../../app/store";
import type { PlayerGateway } from "../../useCases/PlayerGateway";
import { addFoul, addPass, addThreePoints, addTwoPoints } from "./actions";

export function createReduxPlayerGateway(dispatch: AppDispatch): PlayerGateway {
  return {
    addTwoPoints() {
      dispatch(addTwoPoints());
    },

    addThreePoints() {
      dispatch(addThreePoints());
    },

    addPass() {
      dispatch(addPass());
    },

    addFoul() {
      dispatch(addFoul());
    },
  };
}
