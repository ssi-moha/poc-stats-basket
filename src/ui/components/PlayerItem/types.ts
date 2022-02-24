import type { Player } from "../../../entities/Player/Player";

export type PlayerItemProps = Player & {
  addTwoPoints(): void;
  addThreePoints(): void;
  addPass(): void;
};
