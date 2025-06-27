// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-gray-600 text-black p-4 rounded-3xl mb-4'>tailwind test</h1>
      <Card title="space"/>
      <Card /> 
    </>
  );
}

export default App
