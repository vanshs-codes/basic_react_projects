import { useState, useCallback, useEffect, useRef } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(6);
  const [takeNum, setTakeNum] = useState(false);
  const [takeChar, setTakeChar] = useState(false);

  const passRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let temp = ""

    if(takeNum) str += "1234567890"
    if(takeChar) str += "!@#$%^&*"

    for(let i=0; i < length; i++) {
      const ind = Math.floor(Math.random() * str.length)
      temp += str.charAt(ind)
    }

    setPassword(temp);
  }, [length, takeNum, takeChar, setPassword]);

  const copyPassToClip = useCallback(() => {
    passRef.current?.select()
    window.navigator.clipboard.writeText(password);
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, takeNum, takeChar, passwordGenerator])

  return (
    <>
      <div className='bg-gray-700 text-orange-500 rounded-2xl px-6 py-5'>
        <h1>Password Generator</h1>
        <div className='flex w-full bg-white overflow-hidden rounded-lg my-4'>
          <input
          type="text"
          value={password}
          ref={passRef}
          placeholder='Password'
          readOnly
          className='flex-1 text-black px-2'/>
          <input type="button" 
          value="copy" 
          onClick={copyPassToClip}
          className='bg-blue-700 text-white shrink-0 px-2 py-2 cursor-pointer'/>
        </div>
        <div className='flex gap-x-4 my-2'>
          <div className='flex gap-x-1'>
            <input 
            type="range"
            id='length-range'
            min={5}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}} />
            <label htmlFor="length-range">Length: {length}</label>
          </div>
          <div className='flex gap-x-1'>
            <input
            type="checkbox" 
            id="number"
            defaultChecked={takeNum}
            onChange={() => setTakeNum((prev) => !prev)} />
            <label htmlFor="number">Number</label>
          </div>
          <div className='flex gap-x-1'>
            <input
            type="checkbox" 
            id="char"
            defaultChecked={takeChar}
            onChange={() => setTakeChar((prev) => !prev)} />
            <label htmlFor="char">Character</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
