import { useRef, useEffect } from "react"
import { useSelector } from "react-redux"

import "../playerActions/playerActions.css"

const BetPanel = ({betAmt, setBetAmt, handleGameStart, playerBank}) => {
    const incrementBet = x => {
        setBetAmt(betAmt + x)
        console.log("Bet: " + betAmt)
    }

    const resetBet = ()=>{
        setBetAmt(0)
        console.log("Bet: " + betAmt)
    }

  return (
        <div style={{display: "flex", flexDirection:"column"}}>
            <div style={{display: "flex", flexDirection:"row"}}>
                <>Bet Size: {betAmt}</>
                <>Bank: ${playerBank}</>
            </div>
            <div style={{display: "flex", flexDirection:"row"}}>
                <button className="player-action-buttons" style={{margin: "5px"}} onClick={()=>incrementBet(5)}>+$5</button>
                <button className="player-action-buttons" style={{margin: "5px"}} onClick={()=>incrementBet(10)}>+$10</button>
                <button className="player-action-buttons" style={{margin: "5px"}} onClick={()=>incrementBet(25)}>+$25</button>
                <button className="player-action-buttons" style={{margin: "5px"}} onClick={()=>incrementBet(50)}>+$50</button>
                <button className="player-action-buttons" style={{margin: "5px"}} onClick={()=>incrementBet(100)}>+$100</button>
            </div>
            <div style={{display: "flex", flexDirection:"row", justifyContent:"center"}}>
                <button className="player-action-buttons" onClick={resetBet}>Reset Bet</button>
                <button className="player-action-buttons" onClick={handleGameStart}>Deal</button>
            </div>
        </div>
  )
}

export default BetPanel
