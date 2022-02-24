import { useAppDispatch, useAppSelector } from "../../../app/hooks";

import { createReduxTeamGateway } from "../../../state/team/ReduxTeamGateway";

import { createChangeTeamInteractor } from "../../../useCases/ChangeTeamInteractor";
import { generateRandomPlayerName } from "../../../utils";
import PlayerItem from "../PlayerItem/PlayerItem";

const PlayerList = () => {
  const dispatch = useAppDispatch();
  const { players } = useAppSelector((state) => state.team);
  const teamGateway = createReduxTeamGateway(dispatch);
  const { addPlayer } = createChangeTeamInteractor(teamGateway);

  return (
    <div>
      {players.map((player, index) => (
        <PlayerItem key={`player-item-${index}`} index={index} {...player} />
      ))}
      <button onClick={() => addPlayer(generateRandomPlayerName())}>
        Add a player
      </button>
    </div>
  );
};

export default PlayerList;
