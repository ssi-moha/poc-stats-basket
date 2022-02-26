export type Player = {
  name?: string;
  number: number;
  points: number;
  assists: number;
  fouls: number;
  offensiveRebounds: number;
  defensiveRebounds: number;
  
};

export type Statistics = Omit<Player, "name">;

const defaultPlayerStats: Statistics = {
  number: 0,
  points: 0,
  assists: 0,
  fouls: 0,
  defensiveRebounds: 0,
  offensiveRebounds: 0,
};

export function createPlayer(
  name: string,
  stats: Statistics = defaultPlayerStats
): Player {
  return {
    name,
    ...stats,
  };
}

export function addTwoPoints(player: Player): Player {
  return { ...player, points: player.points + 2 };
}

export function addThreePoints(player: Player): Player {
  return { ...player, points: player.points + 3 };
}

export function addPass(player: Player): Player {
  return { ...player, assists: player.assists + 1 };
}

export function addFoul(player: Player): Player {
  return { ...player, fouls: player.fouls + 1 };
}

export function addOffensiveRebound(player: Player): Player {
  return { ...player, offensiveRebounds: player.offensiveRebounds + 1 };
}

export function addDefensiveRebound(player: Player): Player {
  return { ...player, defensiveRebounds: player.defensiveRebounds + 1 };
}
