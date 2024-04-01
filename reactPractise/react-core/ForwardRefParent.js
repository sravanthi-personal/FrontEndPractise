import React, { Component } from 'react'
import ForwardRefChild from './ForwardRefChild';

class ForwardRefParent extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef();
    }

    clickHandler = () => {
        this.inputRef.current.focus();
    }

  render() {
    return (
      <div>
          <ForwardRefChild ref={this.inputRef}/>
          <button onClick={this.clickHandler}>Parent</button>
      </div>
    )
  }
}

export default ForwardRefParent