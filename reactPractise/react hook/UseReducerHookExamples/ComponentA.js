import React,{ useContext } from 'react'
import { UserCounter } from '../../App'

function ComponentA() {
    const counter = useContext(UserCounter);
  return (
    <div>
         <div> count : {counter.countState}</div>
        <button onClick={() => counter.countDispatch('increment')}>Increment</button>
        <button onClick={() => counter.countDispatch('decrement')}>Decrement</button>
        <button onClick={() => counter.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default ComponentA