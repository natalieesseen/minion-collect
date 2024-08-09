import { useMinions } from "../lib/hooks";
import { LOAD_LIMIT } from "../lib/constants";

function Minions() {
  const { minions } = useMinions();

  return (
    <>
      <ul>
        {minions.slice(0, LOAD_LIMIT).map(minion => (
          <li key={minion.id}>
            {minion.name}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Minions