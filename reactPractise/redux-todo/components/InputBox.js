import React, {useState} from 'react'

import {useDispatch} from 'react-redux';
import {saveTodo} from '../features/todoSlice'


export const InputBox = () => {

  const [input,setInput] = useState('');

  const dispatch = useDispatch();

  const addToDo = () => {
    dispatch(saveTodo({
      item : input,
      done: false,
      id: Date.now()
    }))
  }
  
  return (
    <div>
      <input type="text" value={input} onChange={(e)=> setInput(e.target.value)}></input>
      <button onClick={addToDo}>Add</button>
    </div>
  )
}
