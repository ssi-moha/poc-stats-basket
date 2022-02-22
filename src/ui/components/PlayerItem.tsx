import styled from "styled-components";
import { Player } from "../../entities/Player/Player";

const PlayerItemContainer = styled.div`
  display: flex;
  border: solid 1px black;
  align-items: center;
  justify-content: space-between;
  max-width: 400px;
  margin: 4px;
`;

const PlayerItem = ({ name, points, addTwoPoints, addThreePoints }: Player & { addTwoPoints(): void, addThreePoints(): void }) => {
  return (
    <PlayerItemContainer>
      <div>{name}</div>

      <div>{points}</div>

      <div>
        <button onClick={addTwoPoints} >2 points</button>
      </div>

      <div>
        <button onClick={addThreePoints}>3 points</button>
      </div>
    </PlayerItemContainer>
  );
};

export default PlayerItem;
