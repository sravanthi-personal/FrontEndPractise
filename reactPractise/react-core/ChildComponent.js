import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        {/* invoke parent method */}
        {/* <button onClick={props.greetHandler}>Greet Parent</button> */}

        {/* for sending method arguments back to parent */}
        <button onClick={()=> props.greetHandler('child')}>Greet Parent</button> 
       
    </div>
  )
}

export default ChildComponent