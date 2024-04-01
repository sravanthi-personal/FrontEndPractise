import React from 'react';

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count: 0
        }
    }

    incrementCount(){
        this.setState(prevState => ({
            count:prevState.count + 1
        }))
    }

    incrementCountFive(){
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
        this.incrementCount();
    }


    render(){
        return(
            <div>
                <h1>Count - {this.state.count}</h1>
                <button onClick={()=> this.incrementCountFive()}>Subscribe</button>
            </div>
        )
    }
}

export default Counter;