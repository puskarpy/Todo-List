import { useEffect, useState } from 'react'

import {TodoProvider,useTodo} from './context'
import {TodoForm, TodoList} from './components'


function App() {
  const [todos,setTodos] = useState([])

  const addTodo = (todo)=>{
    setTodos((prev)=>[{id:Date.now(), ...todo}, ...prev])
  }

  const updateTodo = (id, todo) =>{
    setTodos((prev) => prev.map((prevTodo)=> prevTodo.id === id ? todo : prevTodo))
  }

  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((prevTodo) => prevTodo.id !== id))
  }

  const toggleComplete = (id)=> {
    setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id === id ? {...prevTodo,completed:!(prevTodo.completed)} : prevTodo))
  }

  useEffect(() => {    
    const todos = JSON.parse(localStorage.getItem("todos"))
    if(todos && todos.length > 0){

      setTodos(todos)
    }
  }, [])  
  
  useEffect(() => {    
    localStorage.setItem("todos", JSON.stringify(todos))
  
  }, [todos])

  

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, removeTodo, toggleComplete}} >
  <div className="bg-[#f1f5f9] min-h-screen py-10 px-4">
    <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-xl px-6 py-6 text-slate-800">
    <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
      📝 Manage Your Todos
    </h1>

    <div className="mb-6">
      <TodoForm />
    </div>

    <div className="space-y-3">
      {todos.length === 0 ? (
        <p className="text-center text-slate-400 italic">No todos yet. Add some!</p>
      ) : (
        todos.map((todo) => (
          <div
            key={todo.id}
            className="bg-[#f8fafc]"
          >
            <TodoList todo={todo} />
          </div>
        ))
      )}
        <p className="mt-6 text-center text-sm text-gray-400 select-none">
    Created by <a href="https://www.pushkarniraula.com.np/" target='__blank__'>Pushkar Niraula</a>
  </p>
    </div>
  </div>
</div>

    </TodoProvider>
  )
}

export default App
