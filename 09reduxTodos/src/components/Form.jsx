import { useState } from "react";
import { addTodo } from "../features/todos/todoSlice";
import { useDispatch } from "react-redux"

function Form () {
    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();

    const add = (e) => {
        e.preventDefault();

        dispatch(addTodo(todo))

        setTodo("");
    }

    return (
        <>
            <form onSubmit={(e) => add(e)}>
                <div className="flex rounded-lg p-4 bg-green-700 mt-4">
                    <input 
                        type="text" 
                        id="todo" 
                        placeholder="Enter new to-do"
                        className="w-full text-black p-2 outline-none"
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                    />
                    <button type="submit">
                        Add
                    </button>
                </div>
            </form>
        </>
    )
}

export default Form;