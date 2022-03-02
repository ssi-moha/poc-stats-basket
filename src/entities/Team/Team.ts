import { Player } from "../Player/Player";

export type Team = {
  name: string;
  players: Player[];
  subs: Player[];
};

export function createTeam(name: string): Team {
  return {
    name,
    players: [],
    subs: [],
  };
}

export function addPlayer(team: Team, player: Player): Team {
  if (team.players.length === 5) {
    return {
      ...team,
      subs: [...team.subs, player],
    };
  }

  return {
    ...team,
    players: [...team.players, player],
  };
}

export function replacePlayer(
  team: Team,
  outcomingPlayer: Player,
  incomingPlayer: Player
): Team {
  const subs = team.subs.filter((sub) => sub !== incomingPlayer);
  const indexOfOutcomingPlayer = team.players.indexOf(outcomingPlayer);
  const players = [
    ...team.players.slice(0, indexOfOutcomingPlayer),
    incomingPlayer,
    ...team.players.slice(indexOfOutcomingPlayer + 1),
  ];

  return { ...team, subs: [...subs, outcomingPlayer], players };
}
