import { useState } from "react"
import { Link } from "react-router-dom"

import "./mainPage.css"

const MainPage = () => {
  return (
    <div className="main-page-container">
      <div className="main-page-header">
        <h2 className="main-page-heading">Welcome to Blackjack Tournament!</h2>
        <ul className="main-page-img-ul">
          <li className="main-page-img-container">
            <img
              className="main-page-img"
              src={`${process.env.PUBLIC_URL}/img/1D.png`}
              alt="ace of diamons"
            />
          </li>
          <li className="main-page-img-container">
            <img
              className="main-page-img"
              src={`${process.env.PUBLIC_URL}/img/13D.png`}
              alt="ace of hearts"
            />
          </li>
        </ul>

        <ul className="main-page-rules">
          <h3>Blackjac Rules</h3>
          <li>hit</li>
          <li>stay</li>
          <li>double</li>
          <li>split</li>
          <li>bust</li>
        </ul>
      </div>

      <div className="main-page-button-container">
        <Link to="/single/set-up" className="main-page-buttons">
          single player
        </Link>
        <Link to="/multi/player" className="main-page-buttons">
          multiplayer
        </Link>
      </div>
    </div>
  )
}

export default MainPage
