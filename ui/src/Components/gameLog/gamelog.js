import { useRef, useEffect } from "react"
import { useSelector } from "react-redux"

import "./gamelog.css"

const Gamelog = () => {
  const { gameLog } = useSelector(state => state.singlePlayer)
  const ref = useRef()

  useEffect(() => {
    ref.current.scrollIntoView({ behavior: "smooth" })
  }, [gameLog])

  return (
    <div className="game-log-container">
      <h3 className="text-center pt-4">Game Log</h3>
      <ul className="game-log">
        {gameLog.map((log, index) => (
          <li className="game-log-item" key={`${log.status}${index}`}>
            {log.status === "blackjack"
              ? `${log.status}!!!!!!`
              : `dealer: ${log.dealerScore}, player: ${log.playerScore}, ${log.status}`}
          </li>
        ))}
        <li ref={ref}></li>
      </ul>
    </div>
  )
}

export default Gamelog
