import { useState } from "react";
import { useTodo } from "../context";

export default function TodoItem({ todo }) {
    
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)

    const { updateTodo, removeTodo, toggleComplete } = useTodo()

    const editTodo = () => {

        if(!todo) return 

        updateTodo(todo.id,{...todo, todo:todoMsg})
        setIsTodoEditable(false)
    }

    const toggleCompleted = ()=>{
        toggleComplete(todo.id)
    }

    return (
        <div
  className={`flex items-center border border-slate-300 rounded-lg px-4 py-2 gap-x-3 shadow-sm hover:shadow-md transition-all duration-500 ${
    todo.completed ? "bg-blue-100 shadow-[0_0_8px_#3b82f6]" : "bg-slate-100"
  }`}
>
  <input
    type="checkbox"
    className="cursor-pointer accent-blue-600"
    checked={todo.completed}
    onChange={toggleCompleted}
  />

  <input
    type="text"
    className={`outline-none w-full bg-transparent rounded-md text-slate-800 placeholder-slate-400 transition-all duration-200 ${
      isTodoEditable ? "border border-slate-300 px-2 py-1" : "border border-transparent"
    } ${todo.completed ? "text-slate-400 opacity-40" : ""}`}
    value={todoMsg}
    onChange={(e) => setTodoMsg(e.target.value)}
    readOnly={!isTodoEditable}
  />

  <button
    className="inline-flex w-9 h-9 rounded-md border border-slate-300 text-lg justify-center items-center bg-white hover:bg-blue-100 transition duration-200 disabled:opacity-50"
    onClick={() => {
      if (todo.completed) return;
      isTodoEditable ? editTodo() : setIsTodoEditable((prev) => !prev);
    }}
    disabled={todo.completed}
  >
    {isTodoEditable ? "💾" : "✍️"}
  </button>


  <button
    className="inline-flex w-9 h-9 rounded-md border border-slate-300 text-lg justify-center items-center bg-white hover:bg-red-100 transition duration-200"
    onClick={() => removeTodo(todo.id)}
  >
    🗑️
  </button>
</div>

    );
}
