import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todos/todoSlice";

function Items () {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);

    const deleteTodo = (id) => {
        dispatch(removeTodo(id));
    }    

    return (
        <>
            <ul className="m-2">
                {
                    todos.map(
                        todo => (
                            <li 
                                key={todo.id}
                                className="m-2"
                            >
                                <div className="flex items-center justify-between p-2 w-full bg-green-900 rounded-lg">
                                    <div className="flex text-2xl gap-x-2">
                                        <input 
                                            type="text" 
                                            value={todo.text}
                                            readOnly
                                            className=""
                                        />
                                    </div>
                                    <div className="flex gap-x-1">
                                        <button onClick={() => deleteTodo(todo.id)}>
                                            delete
                                        </button>
                                    </div>
                                </div>
                            </li>
                        )
                    )
                }
            </ul>
        </>
    )
}

export default Items;