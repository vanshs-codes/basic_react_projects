import { useEffect, useState } from 'react'
import './App.css'
import { TodoContextProvider } from './contexts/ToDoContext';
import Form from './components/Form';
import Items from './components/Items';

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos((prev) => [...prev, {id: Date.now(), ...newTodo}]);
  }

  const updateTodo = (id, newTodo) => {
    setTodos((prev) => prev.map(
      (todo) => todo.id === id ? newTodo : todo
    ))
  }

  const toggleTodo = (id) => {
    setTodos((prev) => prev.map(
      (todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo
    ))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter(
      (todo) => todo.id !== id
    ))
  }

  useEffect(() => {
    const fromStorage = JSON.parse(localStorage.getItem("todos"));

    console.log(fromStorage);

    if(fromStorage && fromStorage.length)
      setTodos(fromStorage);
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <>
      <TodoContextProvider value={{todos, addTodo, updateTodo, toggleTodo, deleteTodo}}>
        <h2 className='text-2xl'>todo using context api and local storage</h2>
        <Form />
        <br /><br />
        {
          todos.map((todo) => {
            return (
              <Items key={todo.id} todo={todo}/>
            )
          })
        }
      </TodoContextProvider>
    </>
  )
}

export default App
