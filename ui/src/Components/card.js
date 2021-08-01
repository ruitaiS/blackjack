import { Component } from "react"

class Card extends Component {
  // constructor(props) {
  //   super(props)
  //   //rank
  //   //suit
  //   //shown
  // }

  /*
    function(){
        console.log(this.api.account(this.callback))
        //this.callback("yo")
    }

    callback(response){
        this.setState({text: response})
    }
    */

  render() {
    const { shown, rank, suit } = this.props

    return (
      <div>
        {shown ? (
          <img
            src={`${process.env.PUBLIC_URL}/img/${rank}${suit}.png`}
            style={{ width: "200px", height: "300px" }}
            alt="card"
          />
        ) : (

          <img src={`${process.env.PUBLIC_URL}/img/gray_back.png`}
          style={{ width: "200px", height: "300px" }}
          alt="cardback" />
        )}
      </div>
    )
  }
}

export default Card
