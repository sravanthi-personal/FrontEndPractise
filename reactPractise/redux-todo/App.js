import React from 'react';

import './App.css';
import { InputBox } from './components/InputBox';

import { useSelector } from 'react-redux';
import { selectedTodoList } from './features/todoSlice'
import TodoItem from './components/TodoItem';

function App() {
  const todoList = useSelector(selectedTodoList);
  console.log("here" , todoList);
  return (
    <div className="App">
      <div>
        {
          todoList.map(item => {
            <TodoItem name={item.item} done={item.done} id={item.id}/>
          })
        }
         <InputBox />
      </div>
    </div>
  );
}

export default App;
