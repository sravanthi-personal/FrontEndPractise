import React, { Component } from 'react'
import Memo from './Memo'
import PureComp from './PureComp'
import RegComp from './RegComp'

class ParentComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name:'Sravanthi'
      }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name:'Sravanthi'
            })
        },2000)
    }

  render() {
      console.log("parent component");
    return (
      <div>ParentComponent
          {/* <RegComp name={this.state.name}/>
          <PureComp name={this.state.name}/> */}

          <Memo name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp