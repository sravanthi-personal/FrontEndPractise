import React, { Component } from 'react'

class ConditionalRendering extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLogged : false
      }
    }


  render() {

     // if/else conditional rendering
    //  if(this.state.isLogged){
    //      return <div>Welcome Sravanthi</div>
    //  }else{
    //      return  <div>Welcome Guest</div>
    //  }


    //element variables 
    // let message;
    // if(this.state.isLogged){
    //     message = <div>Welcome Sravanthi</div>
    // }else{
    //     message = <div>Welcome Guest</div>
    // }

    // return <div>{message}</div>


    //ternary conditional operator

    // return this.state.isLogged ? (<div>Welcome Sravanthi</div>) : (<div>Welcome Guest</div>)


    //short circuit operator

    return this.state.isLogged && <div>Welcome Sravanthi</div>
    
  }
}

export default ConditionalRendering