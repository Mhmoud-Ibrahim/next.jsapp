"use client"
import React, { useEffect, useState } from 'react'

function Todo() {

    
    useEffect ( async()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const result = await response.json()
        setTodo(result)
    },[])
    const [todo,setTodo] = useState({})
  return (
    <div>
      <h1>{todo.title}</h1>
    </div>
  )
}

export default Todo
