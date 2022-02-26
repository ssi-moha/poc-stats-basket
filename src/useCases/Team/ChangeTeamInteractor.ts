import type { TeamGateway } from "./TeamGateway";

export interface ChangeTeamInteractor {
  addPlayer(name: string): void;
}

export function createChangeTeamInteractor(
  teamGateway: TeamGateway
): ChangeTeamInteractor {
  return {
    addPlayer(name: string) {
      teamGateway.addPlayer(name);
    },
  };
}
