import { useMinions } from "../lib/hooks";
import { LOAD_LIMIT } from "../lib/constants";
import Card from "./Card";

function Minions() {
  const { minions } = useMinions();

  return (
    <>
      <ul>
        {minions.slice(0, LOAD_LIMIT).map(minion => (
          <Card minion={minion} key={minion.id} />
        ))}
      </ul>
    </>
  )
}

export default Minions