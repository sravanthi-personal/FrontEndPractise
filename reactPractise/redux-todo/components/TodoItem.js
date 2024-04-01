import React from 'react'

const TodoItem= ({name,done,id}) => {
    console.log("name : " + name)
  return (
    <div>
        <p>{name} - isDone ? {done}</p>
    </div>
  )
}

export default TodoItem