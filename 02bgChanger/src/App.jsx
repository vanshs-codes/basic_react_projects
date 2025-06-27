import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("gray")

  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-4 inset-x-40 h-auto rounded-full gap-10 p-4'>
          {
            ['black', 'red', 'green', 'blue', 'lavender', 'pink'].map((c) => 
            (<button key={c} onClick={() => setColor(c)} className='px-4 py-3 text-white rounded-full w-30 shadow-lg' style={{backgroundColor: c}}>{c}</button>))
          }
        </div>
      </div>
    </>
  )
}

export default App
