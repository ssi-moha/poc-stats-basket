import { Player } from "../../../entities/Player/Player";

export type PlayerListProps = {
  players: Player[];
  addPlayer(): void;
};
