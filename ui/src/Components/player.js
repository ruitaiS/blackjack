import Card from "./card"

const Player = ({ rank, suit, username }) => {
  return <Card rank={rank} suit={suit} shown={true} />
}

export default Player
