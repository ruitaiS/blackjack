import "./card.css"

const Card = ({ shown, rank, suit }) => {
  return (
    <div>
      {shown ? (
        <div className="card-img-container">
          <img
            src={`${process.env.PUBLIC_URL}/img/${rank}${suit}.png`}
            className="card-img fade-in"
            alt="card"
          />
        </div>
      ) : (
        <div className="card-img-container">
          <img
            src={`${process.env.PUBLIC_URL}/img/gray_back.png`}
            className="card-img fade-in"
            alt="cardback"
          />
        </div>
      )}
    </div>
  )
}

export default Card
