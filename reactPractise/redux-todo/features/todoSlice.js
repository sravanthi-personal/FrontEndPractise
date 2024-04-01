import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todoList: []
}

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
      saveTodo : (state,action) => {
        state.todoList.push(action.payload)
      }
  }
});

export const { saveTodo } = todoSlice.actions

export const selectedTodoList = state => state.todos.todoList

export default todoSlice.reducer