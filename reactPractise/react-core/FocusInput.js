import React, { Component } from 'react'
import Input from './Input'

class FocusInput extends Component {

    // passing input focus from parent to child components 
    constructor(props) {
      super(props)
       this.componentRef = React.createRef()
    }

    clickHandler = () => {
        this.componentRef.current.focusInput()
    }

  render() {
    return (
      <div>
          <Input ref={this.componentRef}/>
          <button onClick={this.clickHandler}>FocusInput</button>
      </div>
    )
  }
}

export default FocusInput