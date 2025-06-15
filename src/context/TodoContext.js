import { createContext, useContext } from "react";

export const TodoContext = createContext({

    todos: [
        {
            id: 1,
            todo: "Todo here.",
            completed: false,
        }
    ],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    removeTodo: (id) => { },
    toggleComplete: (id) => { },

});

export const useTodo = () => {
    return useContext(TodoContext)
}
export const TodoProvider = TodoContext.Provider