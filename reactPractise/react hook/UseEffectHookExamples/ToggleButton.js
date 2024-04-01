import React, {useState} from 'react'
import RunEffectOnlyOnce from './RunEffectOnlyOnce';

function ToggleButton() {
    const [display, setDisplay] = useState(true);
  return (
    <div>

        <button onClick={() => setDisplay(!display)}>Toggle</button>
        {
            display && <RunEffectOnlyOnce />
        }

    </div>
  )
}

export default ToggleButton