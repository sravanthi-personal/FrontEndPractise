import React from 'react';

class Welcome extends React.Component{
    // render(){
    //     return <h1> Class component </h1>
    // }

    // render(){
    //     return(
    //         React.createElement('div',
    //         {id: 1, className:'dummy'},
    //         React.createElement('h1',null,"Class Component"))
    //     )
    // }


    // //props
    // render(){
    //     return(
    //         <div>
    //             <h1>welcome {this.props.name} a.k.a {this.props.heroName}</h1>
    //             {this.props.children}
    //         </div>
    //     )
    // }


    //state
    constructor(props){
        super(props);
        this.state={
            message: 'Welcome visitor'
        }
    }

    handleClick(){
        this.setState({
            message:'Thank you'
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=> this.handleClick()}>Subscribe</button>
            </div>
        )
    }
}

export default Welcome;