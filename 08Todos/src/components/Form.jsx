import { useState } from "react";
import useTodoContext from "../contexts/ToDoContext";

function Form () {
    const [todo, setTodo] = useState("");
    const {addTodo} = useTodoContext();

    const add = (e) => {
        e.preventDefault();

        if(!todo) return;

        addTodo({
            title: todo,
            completed: false
        });

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