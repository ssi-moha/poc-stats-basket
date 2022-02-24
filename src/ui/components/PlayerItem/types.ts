import type { Player } from "../../../entities/Player/Player";

export type PlayerItemProps = Player & {
  index: number;
};
