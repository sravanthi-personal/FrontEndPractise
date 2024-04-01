import React, { Component } from 'react'


class PropsRenderCounter extends Component {  
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }

    incrementCount = () => {
        this.setState(prevState => {
            return { count: prevState.count + 1}
        })
    }

    render() {
        return (
           this.props.children(this.state.count,this.incrementCount) 
        )
    }
}

export default PropsRenderCounter;