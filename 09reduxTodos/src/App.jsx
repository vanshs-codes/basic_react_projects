import './App.css'
import Form from "./components/Form"
import Items from './components/Items'

function App() {
  
  return (
    <>
      <h2 className='text-2xl'>To-do app using redux toolkit</h2>
      <Form />
      <br /><br />
      <Items />
    </>
  )
}

export default App
