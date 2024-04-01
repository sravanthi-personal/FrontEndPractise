import React, { Component } from 'react'

class LifeCycleB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Sravanthi'
      }

      console.log("LifeCycleB constructor is executed")

    }

    static getDerivedStateFromProps(props,state){
        console.log("LifeCycleB getDerivedStateFromProps is executed")
        return null
    }

    componentDidMount(){
        console.log("LifeCycleB componentDidMount is executed");
    }

    shouldComponentUpdate(){
        console.log("LifeCycleB shouldComponentUpdate is executed");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("LifeCycleB getSnapshotBeforeUpdate is executed");
        return null;
    }

    componentDidUpdate(){
        console.log("LifeCycleB componentDidUpdate is executed");
    }


  render() {
      console.log("LifeCycleB render is executed")
    return (
      <div>LifeCycleB</div>
    )
  }
}

export default LifeCycleB