import { PlayerItemContainer } from "./style";
import type { PlayerItemProps } from "./types";

const PlayerItem = ({
  name,
  points,
  passes,
  fouls,
  addTwoPoints,
  addThreePoints,
  addPass,
  addFoul,
}: PlayerItemProps) => {
  return (
    <PlayerItemContainer>
      <div>{name}</div>

      <div>{points}</div>

      <div>{passes}</div>
      
      <div>{fouls}</div>

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
    </PlayerItemContainer>
  );
};

export default PlayerItem;
