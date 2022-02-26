import { GameGateway } from "./GameGateway";

export interface ChangeGameInteractor {
  start(): void;
  finish(): void;
}

export function createChangeGameInteractor(
  gameGateway: GameGateway
): ChangeGameInteractor {
  return {
    finish() {
      gameGateway.finish();
    },

    start() {
      gameGateway.start();
    },
  };
}
