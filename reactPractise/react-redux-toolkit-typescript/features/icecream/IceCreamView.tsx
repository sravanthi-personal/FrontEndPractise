import React from 'react'
// import { useSelector, useDispatch } from 'react-redux'
import { userAppSelector, useAppDispatch } from '../../app/hooks';
import { ordered, restocked } from './icecreamSlice'

export const IceCreamView = () => {
    const [value,setValue] = React.useState(1);
    const numOfIceCreams = userAppSelector((state) => state.icecream.numOfIceCreams)
    const dispatch = useAppDispatch();
  return (
    <div>
        <h2>Number of icecreams - {numOfIceCreams}</h2>
        <button onClick={()=> dispatch(ordered())}>Order icecream</button>
        <input type="number" value={value} onChange={(e)=> setValue(parseInt(e.target.value))} />
        <button onClick={()=> dispatch(restocked(value))}>Restock icecreams</button>
    </div>
  )
}
