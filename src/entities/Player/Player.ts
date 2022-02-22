export type Player = {
  name?: string;
  number: number;
  points: number;
  passes: number;
  fouls: number;
  offensiveRebounds: number;
  defensiveRebounds: number;
};

export type Statistics = Omit<Player, "name">;

const defaultPlayerStats: Statistics = {
  number: 0,
  points: 0,
  passes: 0,
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
  return { ...player, passes: player.passes + 1 };
}
