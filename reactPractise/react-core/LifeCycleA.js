import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Sravanthi'
      }

      console.log("LifeCycleA constructor is executed")

    }

    static getDerivedStateFromProps(props,state){
        console.log("LifeCycleA getDerivedStateFromProps is executed")
        return null
    }

    componentDidMount(){
        console.log("LifeCycleA componentDidMount is executed");
    }

    shouldComponentUpdate(){
        console.log("LifeCycleA shouldComponentUpdate is executed");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("LifeCycleA getSnapshotBeforeUpdate is executed");
        return null;
    }

    componentDidUpdate(){
        console.log("LifeCycleA componentDidUpdate is executed");
    }

    buttonHandler = () => {
        this.setState({
            name: 'react learner'
        })
    }

  render() {
      console.log("LifeCycleA render is executed")
    return (
        <div>
            <div>LifeCycleA</div>
            <button onClick={this.buttonHandler}></button>
            <LifeCycleB />
        </div>
    )
  }
}

export default LifeCycleA