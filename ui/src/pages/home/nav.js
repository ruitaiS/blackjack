import "./home.css"

const Nav = ({ user, logout }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container nav-container">
        <a className="navbar-brand" href="/">
          Blackjack
        </a>

        <div className="navbar-nav">
          <a className="nav-item nav-link active" href="/main">
            Play
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Nav
