const Card = ({ shown, rank, suit }) => {
  return (
    <div>
      {shown ? (
        <img
          src={`${process.env.PUBLIC_URL}/img/${rank}${suit}.png`}
          style={{ width: "140px", height: "190px" }}
          alt="card"
        />
      ) : (
        <img
          src={`${process.env.PUBLIC_URL}/img/gray_back.png`}
          style={{ width: "140px", height: "190px" }}
          alt="cardback"
        />
      )}
    </div>
  )
}

export default Card
