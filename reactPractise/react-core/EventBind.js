import React, { Component } from 'react'

class EventBind extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       message:'Hello'
    }

    //third approach
   // this.clickHandler = this.clickHandler.bind(this);

  }

  // clickHandler(){
  //   this.setState({
  //     'message' : 'Thank you'
  //   })
  // }

  //fourth approach
  clickHandler = () => {
    this.setState({
      'message' : 'Thank you'
    })
  }

  render() {
    return (
      <div>
        <div>{this.state.message}</div>

        {/* first approach  */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button>  */}

        {/* second approach  */}
        {/* <button onClick={()=> this.clickHandler()}>Click</button>  */}

        {/* third approach  */}
        <button onClick={this.clickHandler}>Click</button> 

      </div>
    )
  }
}

export default EventBind