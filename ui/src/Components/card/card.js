import "./card.css"

const Card = ({ shown, rank, suit }) => {
  return (
    <div>
      {shown ? (
        <div className="card-img-container">
        <img
          src={`${process.env.PUBLIC_URL}/img/${rank}${suit}.png`}
          className="card-img"
          alt="card"
        />
        </div>
      ) : (
        <div className="card-img-container">
        <img
          src={`${process.env.PUBLIC_URL}/img/gray_back.png`}
          className="card-img"
          alt="cardback"
        />
        </div>
      )}
    </div>
  )
}

export default Card
