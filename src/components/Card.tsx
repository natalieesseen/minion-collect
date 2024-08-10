import { Minion } from '../lib/hooks';

interface CardProps {
    minion: Minion;
}

function Card({minion} : CardProps) {
  return (
    <li>
        <img src={minion.image} alt="" />
        <span><p>ID {minion.id}</p></span>
        <h2>{minion.name}</h2>
        <p>{minion.description}</p>
        <button>Add</button>
    </li>
  )
}

export default Card