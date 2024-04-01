import React, { Component } from 'react'

class RefsDemo extends Component {

    constructor(props) {
      super(props)
      this.inputRefs = React.createRef();
      this.cbRef = null;
      this.setCbRef = element => {
        this.cbRef = element
      }
    }

    componentDidMount(){
        //this.inputRefs.current.focus() 
        if(this.cbRef){
            this.cbRef.focus()     
        }
    }

    clickHandler = () => {
        alert(this.inputRefs.current.value);
    }

  render() {
    return (
      <div>
          <input type="text" ref={this.inputRefs}/>
          <input type="text" ref={this.setCbRef}/>
          <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default RefsDemo