//player control panel

import {Component} from "react";
import Card from "./card";

class DealerPanel extends Component{
    constructor(props){
        super(props);
        //phase: bet / play / wait
        //hand: [{value: 1, suit: "C"}, {value:2, suit: "D"}]

        this.state = {
            //Default state initialization
        }
    }

    render(){

        console.log(this.props.hand.map(card=> 
            <Card rank={card.rank} suit={card.suit} shown={true} />
            )
        )
        const handStyle = {
            backgroundColor: 'green',
            display: 'flex',
            flexDirection:'row',
            justifyContent: 'center'
          };

        return(
            <div>
                <div style={handStyle}>
                    {this.props.hand.map((card, index) => <Card rank={card.rank} suit={card.suit} shown={(this.props.phase === "dealer" || index === 0)}/>)}
                </div>

            </div>
        )
        
    }
}

export default DealerPanel;