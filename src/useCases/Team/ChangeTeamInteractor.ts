import { Player } from "../../entities/Player/Player";
import type { TeamGateway } from "./TeamGateway";

export interface ChangeTeamInteractor {
  addPlayer(name: string): void;
  replacePlayer(outcomingPlayer: Player, incomingPlayer: Player): void;
}

export function createChangeTeamInteractor(
  teamGateway: TeamGateway
): ChangeTeamInteractor {
  return {
    addPlayer(name: string) {
      teamGateway.addPlayer(name);
    },

    replacePlayer(outcomingPlayer: Player, incomingPlayer: Player) {
      teamGateway.replacePlayer(outcomingPlayer, incomingPlayer);
    },
  };
}
