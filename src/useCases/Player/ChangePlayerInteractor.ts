import type { PlayerGateway } from "./PlayerGateway";

export interface ChangePlayerInteractor {
  addTwoPoints(): void;
  addThreePoints(): void;
  addPass(): void;
  addFoul(): void;
  addOffensiveRebound(): void;
  addDefensiveRebound(): void;
}

export function createChangePlayerInteractor(
  playerGateway: PlayerGateway,
  index: number
): ChangePlayerInteractor {
  const playerIndex = index;

  return {
    addTwoPoints() {
      playerGateway.addTwoPoints(playerIndex);
    },

    addThreePoints() {
      playerGateway.addThreePoints(playerIndex);
    },

    addPass() {
      playerGateway.addPass(playerIndex);
    },

    addFoul() {
      playerGateway.addFoul(playerIndex);
    },

    addOffensiveRebound() {
      playerGateway.addOffensiveRebound(playerIndex);
    },

    addDefensiveRebound() {
      playerGateway.addDefensiveRebound(playerIndex);
    },
  };
}
