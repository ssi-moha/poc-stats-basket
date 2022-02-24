import type { AppDispatch } from "../../app/store";
import type { PlayerGateway } from "../../useCases/PlayerGateway";
import { addDefensiveRebound, addFoul, addOffensiveRebound, addPass, addThreePoints, addTwoPoints } from "./actions";

export function createReduxPlayerGateway(dispatch: AppDispatch): PlayerGateway {
  return {
    addTwoPoints(index: number) {
      dispatch(addTwoPoints(index));
    },

    addThreePoints(index: number) {
      dispatch(addThreePoints(index));
    },

    addPass(index: number) {
      dispatch(addPass(index));
    },

    addFoul(index: number) {
      dispatch(addFoul(index));
    },

    addOffensiveRebound(index: number) {
      dispatch(addOffensiveRebound(index));
    },
    
    addDefensiveRebound(index: number) {
      dispatch(addDefensiveRebound(index));
    }
  };
}
