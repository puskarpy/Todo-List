import React, { useState } from 'react'
import { useTodo } from '../context'

export default function TodoForm() {

    const [todo, setTodo] = useState("")
    const { addTodo } = useTodo()

    const add = (e) => {
        e.preventDefault()

        addTodo({todo:todo, completed: false})
        setTodo("")
    }

  return (
    <form onSubmit={add} className="flex shadow-sm">
  <input
    type="text"
    placeholder="Write Todo..."
    className="w-full border border-slate-300 rounded-l-lg px-4 py-2 outline-none focus:ring-1 focus:ring-blue-400 bg-white text-slate-800 placeholder-slate-400 transition duration-200"
    value={todo}
    onChange={(e) => setTodo(e.target.value)}
  />
  <button
    type="submit"
    className="rounded-r-lg px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium transition duration-200"
  >
    Add
  </button>
</form>

)
}
