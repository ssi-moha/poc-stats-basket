import { Player } from "../Player/Player";

export type Team = {
  name: string;
  players: Player[];
};

export function createTeam(name: string): Team {
  return {
    name,
    players: [],
  };
}

export function addPlayer(team: Team, player: Player): Team {
  return {
    ...team,
    players: [...team.players, player],
  };
}