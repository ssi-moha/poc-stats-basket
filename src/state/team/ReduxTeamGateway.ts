import type { AppDispatch } from "../../app/store";
import type { TeamGateway } from "../../useCases/Team/TeamGateway";
import { addPlayer } from "./actions";

export function createReduxTeamGateway(dispatch: AppDispatch): TeamGateway {
  return {
    addPlayer(name: string) {
      dispatch(addPlayer(name));
    },
  };
}
