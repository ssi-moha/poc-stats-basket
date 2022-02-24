import { PlayerItemContainer } from "./style";
import type { PlayerItemProps } from "./types";

const PlayerItem = ({
  name,
  points,
  passes,
  fouls,
  defensiveRebounds,
  offensiveRebounds,
  addTwoPoints,
  addThreePoints,
  addPass,
  addFoul,
  addDefensiveRebound,
  addOffensiveRebound
}: PlayerItemProps) => {
  return (
    <PlayerItemContainer>
      <div>{name}</div>

      <div>{points}</div>

      <div>{passes}</div>
      
      <div>{fouls}</div>
      
      <div>{defensiveRebounds} / {offensiveRebounds}</div>

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
