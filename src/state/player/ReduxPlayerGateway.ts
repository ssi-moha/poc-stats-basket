import { AppDispatch } from "../../app/store";
import { PlayerGateway } from "../../useCases/PlayerGateway";
import { addPass, addThreePoints, addTwoPoints } from "./actions";

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
  };
}
