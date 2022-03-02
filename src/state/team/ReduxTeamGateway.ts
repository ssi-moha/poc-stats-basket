import type { AppDispatch } from "../../app/store";
import { Player } from "../../entities/Player/Player";
import type { TeamGateway } from "../../useCases/Team/TeamGateway";
import { addPlayer, replacePlayer } from "./actions";

export function createReduxTeamGateway(dispatch: AppDispatch): TeamGateway {
  return {
    addPlayer(name: string) {
      dispatch(addPlayer(name));
    },
    
    replacePlayer(outcomingPlayer: Player, incomingPlayer: Player) {
      dispatch(replacePlayer(outcomingPlayer, incomingPlayer));
    }
  };
}
