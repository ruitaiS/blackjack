import {Component} from "react";
import Card from "./card"

class ScoreBoard extends Component{
    constructor(props){
        super(props);
        //players: list of players with name, id, balance, bet, hand, and active

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
        const miniHandStyle = {
            backgroundColor: 'yellow',
            display: 'flex',
            flexDirection:'row',
            justifyContent: 'center',
            zoom: 0.25,
          };

        return(
            <div>
                {this.props.players.map(player => 
                <div style={{display:'flex', flexDirection: 'row', justifyContent:'center'}}>
                    {player.name}
                    {player.id}
                    {player.balance}
                    {player.bet}
                    <div style={miniHandStyle}>
                        {player.hand.map((card,index) => <Card rank={card.rank} suit={card.suit} shown={(player.id!== "0000" || this.props.phase === "dealer" || index === 0)} />)}
                    </div>
                </div>  
                )}
            </div>
        )
        
    }
}

export default ScoreBoard;