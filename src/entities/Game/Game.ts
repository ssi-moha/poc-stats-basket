export type Game = {
  isStarted: boolean;
  isFinished: boolean;
};

export function createGame(): Game {
  return {
    isStarted: false,
    isFinished: false,
  };
}

export function start(game: Game): Game {
  return {
    ...game,
    isStarted: true,
    isFinished: false,
  };
}

export function finish(game: Game): Game {
  return {
    ...game,
    isStarted: false,
    isFinished: true,
  };
}
