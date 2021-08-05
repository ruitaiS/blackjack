const Home = () => {
  return (
    <div className="container">
      <div className="text-center mt-4 mb-4">
        <h5>
          You will play against dealer and try to get better hand than the dealer.
          <br /> You can start with 1, 4 or 8 decks, and start with however much chips you would
          like to start with.
          <br />
          After getting your first two cards, you have option to hit and try to make your hand
          better than the dealer, or stay and hope the dealer busts!
          <br />
          Best of luck!
        </h5>
      </div>
      <div className="img-container"></div>

      <h3 className="mt-4 text-center">Devs</h3>
      <div className="m-4 flex-row">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Seung Lee</h5>
            <a
              href="https://github.com/thorai219"
              className="card-link"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/seungterrylee/"
              className="card-link"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </div>
        </div>

        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title">Ruitai Shao</h5>
            <a
              href="https://github.com/ruitaiS"
              className="card-link"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
            <a
              href="https://www.linkedin.com/in/ruitai-shao/"
              className="card-link"
              target="_blank"
              rel="noreferrer"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
