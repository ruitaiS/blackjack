import { useSelector } from "react-redux"
import Card from "./card"

const Player = ({ rank, suit, username }) => {
  const tournament = useSelector(state => state.tournament)

  return <Card rank={rank} suit={suit} shown={true} />
}

export default Player
