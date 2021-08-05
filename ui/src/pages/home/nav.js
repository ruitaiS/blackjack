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
            Home
          </a>
          {user ? (
            <button onClick={logout} className="nav-item nav-link nav-btn-link">
              Logout
            </button>
          ) : (
            <a className="nav-item nav-link" href="/login">
              Login
            </a>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Nav
