import { useAppDispatch } from "../../../app/hooks";
import { createReduxPlayerGateway } from "../../../state/player/ReduxPlayerGateway";
import { createChangePlayerInteractor } from "../../../useCases/Player/ChangePlayerInteractor";
import { PlayerItemContainer } from "./style";
import type { PlayerItemProps } from "./types";

const PlayerItem = ({
  name,
  points,
  passes,
  fouls,
  defensiveRebounds,
  offensiveRebounds,
  index,
}: PlayerItemProps) => {
  const dispatch = useAppDispatch();
  const playerGateway = createReduxPlayerGateway(dispatch);

  const {
    addDefensiveRebound,
    addFoul,
    addOffensiveRebound,
    addPass,
    addThreePoints,
    addTwoPoints,
  } = createChangePlayerInteractor(playerGateway, index);

  return (
    <PlayerItemContainer>
      <div>{name}</div>

      <div>{points}</div>

      <div>{passes}</div>

      <div>{fouls}</div>

      <div>
        {defensiveRebounds} / {offensiveRebounds}
      </div>

      <div>
        <button onClick={addTwoPoints}>2 points</button>
      </div>

      <div>
        <button onClick={addThreePoints}>3 points</button>
      </div>

      <div>
        <button onClick={addPass}>Pass</button>
      </div>

      <div>
        <button onClick={addFoul}>Fouls</button>
      </div>

      <div>
        <button onClick={addDefensiveRebound}>Def. Rebound</button>
      </div>

      <div>
        <button onClick={addOffensiveRebound}>Off. Rebound</button>
      </div>
    </PlayerItemContainer>
  );
};

export default PlayerItem;
