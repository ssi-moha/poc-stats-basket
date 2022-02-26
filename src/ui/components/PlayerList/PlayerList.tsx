import { useAppDispatch, useAppSelector } from "../../../app/hooks";

import { createReduxTeamGateway } from "../../../state/team/ReduxTeamGateway";

import { createChangeTeamInteractor } from "../../../useCases/Team/ChangeTeamInteractor";
import { generateRandomPlayerName } from "../../../utils";
import PlayerItem from "../PlayerItem/PlayerItem";
import { PlayerListProps } from "./types";

const PlayerList = ({ finishGame }: PlayerListProps) => {
  const dispatch = useAppDispatch();
  const { players } = useAppSelector((state) => state.team);
  const teamGateway = createReduxTeamGateway(dispatch);
  const { addPlayer } = createChangeTeamInteractor(teamGateway);

  const addPlayerWithRandomName = () => addPlayer(generateRandomPlayerName());

  return (
    <div>
      {players.map((player, index) => (
        <PlayerItem key={`player-item-${index}`} index={index} {...player} />
      ))}
      <button onClick={addPlayerWithRandomName}>Add a player</button>
      <button onClick={finishGame}>Finish</button>
    </div>
  );
};

export default PlayerList;
