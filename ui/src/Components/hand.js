import {Component} from "react";

class Hand extends Component{
    constructor(props){
        super(props);
        //
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
        let rank = 3
        return(
            <div>
                This is a hand of Cards
                <img src={process.env.PUBLIC_URL + '/img/3C.png'} alt="card"/>
            </div>
        )
    }
}

export default Hand;