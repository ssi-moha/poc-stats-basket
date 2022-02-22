import { PlayerItemContainer } from "./style";
import type { PlayerItemProps } from "./types";

const PlayerItem = ({
  name,
  points,
  passes,
  addTwoPoints,
  addThreePoints,
  addPass
}: PlayerItemProps) => {
  return (
    <PlayerItemContainer>
      <div>{name}</div>

      <div>{points}</div>

      <div>{passes}</div>

      <div>
        <button onClick={addTwoPoints}>2 points</button>
      </div>

      <div>
        <button onClick={addThreePoints}>3 points</button>
      </div>

      <div>
        <button onClick={addPass}>Pass</button>
      </div>
    </PlayerItemContainer>
  );
};

export default PlayerItem;
