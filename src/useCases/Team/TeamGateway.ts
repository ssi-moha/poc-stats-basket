import { Player } from "../../entities/Player/Player";

export interface TeamGateway {
  addPlayer(name: string): void;
  replacePlayer(outcomingPlayer: Player, incomingPlayer: Player): void;
}
