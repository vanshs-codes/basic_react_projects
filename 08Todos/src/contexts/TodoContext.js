/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            title: "this is a to-do",
            completed: false
        }
    ],
    addTodo: (title) => {},
    updateTodo: (id, title) => {},
    toggleTodo: (id) => {},
    deleteTodo: (id) => {}
});

export const TodoContextProvider = TodoContext.Provider;

export default function useTodoContext () {
    return useContext(TodoContext);
}