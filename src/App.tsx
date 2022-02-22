import { useAppSelector } from "./app/hooks";
import PlayerItem from "./ui/components/PlayerItem/PlayerItem";
import { ChangePlayerInteractor } from "./useCases/ChangePlayerInteractor";

function App({
  changePlayerCounterInteractor,
}: {
  changePlayerCounterInteractor: ChangePlayerInteractor;
}) {
  const player = useAppSelector((state) => state.player);

  return (
    <div>
      <PlayerItem
        {...player}
        addTwoPoints={changePlayerCounterInteractor.addTwoPoints}
        addThreePoints={changePlayerCounterInteractor.addThreePoints}
        addPass={changePlayerCounterInteractor.addPass}
      />
    </div>
  );
}

export default App;
