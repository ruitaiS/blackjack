import { Component } from "react"

class Test extends Component {
  constructor(props) {
    super(props)
    //Values that get passed to the component

    //Functions that need to get bound to this instance
    this.function = this.function.bind(this)
    this.callback = this.callback.bind(this)
    this.state = {
      //Default state initialization
    }
  }

  function() {
    console.log(this.api.account(this.callback))
    //this.callback("yo")
  }

  callback(response) {
    this.setState({ text: response })
  }

  render() {
    return (
      <div>
        {this.state.text}
        <button onClick={this.function}> Clicky</button>
      </div>
    )
  }
}

export default Test
