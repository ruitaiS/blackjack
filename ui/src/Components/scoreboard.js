import { Component } from "react"
import Card from "./card"

// const ScoreBoard = () => {}
class ScoreBoard extends Component {
  constructor(props) {
    super(props)
    //players: list of players with name, id, balance, bet, hand, and active

    //Functions that need to get bound to this instance
    this.playerEntry = this.playerEntry.bind(this)
    this.callback = this.callback.bind(this)
    this.state = {
      //Default state initialization
    }
  }

  function() {
    console.log(this.api.account(this.callback))
    //this.callback("yo")
  }

  callback(response) {
    this.setState({ text: response })
  }

  playerEntry(player) {
    const miniHandStyle = {
      backgroundColor: "yellow",
      display: "flex",
      flexDirection: "row",
      justifyContent: "absolute",
      zoom: 0.4
    }
    return (
      <div
        style={{
          backgroundColor: player.active ? "red" : "grey",
          display: "flex",
          flexDirection: "column",
          justifyContent: "left",
          border: "2px solid grey",
          borderRadius: "15px"
        }}
      >
        {player.id !== "0000" ? player.name + " - $" + player.balance : player.name}
        <div style={miniHandStyle}>
          {player.hand.map((card, index) => (
            <Card
              rank={card.rank}
              suit={card.suit}
              shown={player.id !== "0000" || this.props.phase === "dealer" || index === 0}
            />
          ))}
        </div>
        {player.bet !== null ? "Bet: $" + player.bet : <br />}
      </div>
    )
  }

  render() {
    const { players } = this.props
    return (
      <div style={{ justifyContent: "left", position: "absolute" }}>
        {players.map(this.playerEntry)}
      </div>
    )
  }
}

export default ScoreBoard
