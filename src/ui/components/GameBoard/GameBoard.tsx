import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../app/hooks";
import { createReduxGameGateway } from "../../../state/game/ReduxGameGateway";
import { createChangeGameInteractor } from "../../../useCases/Game/ChangeGameInteractor";
import PlayerList from "../PlayerList/PlayerList";
import { GameBoardProps } from "./types";

const GameBoard = ({}: GameBoardProps) => {
  const dispatch = useDispatch();
  const gameGateway = createReduxGameGateway(dispatch);
  const { start: startGame, finish: finishGame } = createChangeGameInteractor(gameGateway);
  const { isStarted, isFinished } = useAppSelector((state) => state.game);

  if (isStarted) {
    return <PlayerList finishGame={finishGame} />;
  }

  if (isFinished) {
    return <div>Game is finished</div>;
  }

  return (
    <div>
      <h1>Game is not started yet</h1>
      <button onClick={startGame}>Start game</button>
    </div>
  );
};

export default GameBoard;
