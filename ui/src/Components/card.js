import {Component} from "react";

class Card extends Component{
    constructor(props){
        super(props);
        //rank
        //suit
        //shown
    }

    /*
    function(){
        console.log(this.api.account(this.callback))
        //this.callback("yo")
    }

    callback(response){
        this.setState({text: response})
    }
    */

    render(){
        //let rank = 6
        //let suit = 'C'
        //let shown = true

        return(
            <div>
                {this.props.shown?
                    <img src={process.env.PUBLIC_URL + '/img/'+this.props.rank.toString()+this.props.suit+'.png'} alt="card"/>
                    :
                    <img src={process.env.PUBLIC_URL + '/img/gray_back.png'} alt="cardback"/>
                }
            </div>
        )
    }
}

export default Card;