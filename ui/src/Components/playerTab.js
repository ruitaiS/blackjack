import {Component} from "react";

class playerTab extends Component{
    constructor(props){
        super(props);
        //Name
        //ID#
        //Bet
        //Balance
        //Hand
        //Active


        //Functions that need to get bound to this instance
        this.function = this.function.bind(this);
        this.callback = this.callback.bind(this);
        this.state = {
            //Default state initialization
        }
    }

    function(){
        console.log(this.api.account(this.callback))
        //this.callback("yo")
    }

    callback(response){
        this.setState({text: response})
    }

    render(){
        return(
            <div>
                Player
            </div>
        )
        
    }
}

export default PlayerTab