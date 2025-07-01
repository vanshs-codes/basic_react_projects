import { useState } from "react";
import useTodoContext from "../contexts/ToDoContext";

function Items ({todo}) {
    const [title, setTitle] = useState(todo.title);
    const [isEditable, setIsEditable] = useState(false);
    const {toggleTodo, deleteTodo, updateTodo} = useTodoContext();

    const update = () => {
        if(isEditable) {
            setIsEditable(false);
            updateTodo(todo.id, {...todo, title})
        }
        else {
            setIsEditable(true);
        }
    }

    return (
        <>
            <ul className="m-2">
                            <li 
                                className="m-2"
                            >
                                <div className="flex items-center justify-between p-2 w-full bg-green-900 rounded-lg">
                                    <div className="flex text-2xl gap-x-2">
                                        <input 
                                            type="checkbox"
                                            checked={todo.completed}
                                            onChange={() => toggleTodo(todo.id)}
                                        />
                                        <input 
                                            type="text" 
                                            value={title}
                                            readOnly={!isEditable}
                                            onChange={(e) => setTitle(e.target.value)}
                                            className={`${isEditable ? "border-2" : "outline-none"} ${todo.completed ? "line-through" : ""}`}
                                        />
                                    </div>
                                    <div className="flex gap-x-1">
                                        <button 
                                            onClick={update}
                                            disabled={todo.completed}
                                        >
                                            update
                                        </button>
                                        <button onClick={() => deleteTodo(todo.id)}>
                                            delete
                                        </button>
                                    </div>
                                </div>
                            </li>
            </ul>
        </>
    )
}

export default Items;