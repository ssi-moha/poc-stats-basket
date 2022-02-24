import type { PlayerGateway } from "./PlayerGateway";

export interface ChangePlayerInteractor {
  addTwoPoints(): void;
  addThreePoints(): void;
  addPass(): void;
  addFoul(): void;
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

    addPass() {
      playerGateway.addPass();
    },

    addFoul() {
      playerGateway.addFoul();
    },
  };
}
