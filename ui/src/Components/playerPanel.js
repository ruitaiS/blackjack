//player control panel
import { Component } from "react"
import Card from "./card"
import PlayerAction from "../Components/playerActions/playerActions"

class PlayerPanel extends Component {
  constructor(props) {
    super(props)
    //phase: bet / play / wait
    //balance
    //hand: [{value: 1, suit: "C"}, {value:2, suit: "D"}]

class PlayerPanel extends Component{
    constructor(props){
        super(props);
        //phase: bet / player / dealer
        //balance
        //hand: [{value: 1, suit: "C"}, {value:2, suit: "D"}]
    //Functions that need to get bound to this instance
    this.hit = this.hit.bind(this)
    this.stay = this.stay.bind(this)
    this.double = this.double.bind(this)
    this.bet = this.bet.bind(this)

    this.state = {
      //Default state initialization
    }
  }

  componentDidMount() {}

  //Placeholder Functions for now

    bet() {
        let amt = prompt("You have "+this.props.balance+".\nHow much would you like to bet?", 100);
        if (amt == null || amt === "") {
            console.log("User cancelled the prompt.")
        } else {
            console.log("Bet "+amt)
        }
        
      }
  
    hit() {
      console.log("Hit")
    }
    stay() {
      console.log("Stay")
    }
    double() {
      console.log("Double")
    }

  bet() {
    let amt = prompt("You have " + this.props.balance + ".\nHow much would you like to bet?", 100)
    if (amt === null || amt === "") {
      console.log("User cancelled the prompt.")
    } else {
      console.log("Bet " + amt)
    }
  }

  render() {
    const { player, start, loading, setLoading } = this.props

    const handStyle = {
      backgroundColor: "blue",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center"
    }

    return (
      <div>
        <div style={handStyle}>
          {/* {player.hands.map(hand => (
            <Card rank={hand.rank} suit={hand.suit} shown={true} />
          ))} */}
        </div>

        {!loading ? <PlayerAction /> : <button onClick={() => setLoading(false)}>Start</button>}

        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={this.hit}>Hit</button>
          <button onClick={this.stay}>Stay</button>
          <button onClick={this.double}>Double</button>
          <button onClick={this.bet}>Bet</button>
        </div>
      </div>
    )
  }
}

export default PlayerPanel
