import { PlayerGateway } from "./PlayerGateway";

export interface ChangePlayerInteractor {
  addTwoPoints(): void;
  addThreePoints(): void;
}

export function createChangePlayerInteractor(
  playerGateway: PlayerGateway
): ChangePlayerInteractor {
  return {
    addTwoPoints() {
      playerGateway.addTwoPoints();
    },
    
    addThreePoints() {
      playerGateway.addThreePoints();
    },
  };
}
