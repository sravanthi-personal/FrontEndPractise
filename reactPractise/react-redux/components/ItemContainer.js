import React from 'react'
import { connect } from 'react-redux'
import { buyCake,buyIceCream } from '../redux'

function ItemContainer(props) {
  return (
    <div>
        <h2>Number of Items -  {props.item}</h2>
        <button onClick={props.buyItem}>Buy items</button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
    return {
        item : ownProps.cake ? state.cake.numberOfCakes : state.iceCream.numberOfIceCreams
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        buyItem : ownProps.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(ItemContainer)