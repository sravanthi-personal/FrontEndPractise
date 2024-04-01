import React, {useState, useEffect} from 'react'

function RunEffectOnlyOnce() {

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = e => {
        console.log('mouse event')
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(()=> {
        console.log(" useEffect called")
        window.addEventListener('mousemove', logMousePosition);

        return () => {
            console.log(" component unmounted "); // anything that needs to be clean up like removing event listeners, should be called from return 
            window.removeEventListener('mousemove', logMousePosition);
        }

    },[])

  return (
    <div>
        X - {x} Y - {y}
    </div>
  )
}

export default RunEffectOnlyOnce