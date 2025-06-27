import { useState } from 'react'
import './App.css'
import {InputBox} from './components'
import useCurrInfo from './hooks/useCurrInfo';

function App() {
  const [amt, setAmt] = useState(0);
  const [convAmt, setConvAmt] = useState(0);
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");

  const currInfo = useCurrInfo(from);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmt(convAmt);
    setConvAmt(amt);
  }

  const currOptions = Object.keys(currInfo);

  const convert = () => {
    setConvAmt(amt * currInfo[to]);
  }

  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault();
      }}>
        <InputBox label="From" 
        amount={amt} 
        onAmtChange={setAmt}
        currOptions={currOptions} 
        curr={from} 
        onCurrChange={setFrom}/>

        <div className='relative w-full h-1'>
          <button type="button" 
          onClick={swap}
          className='absolute left-1/2 -translate-1/2'>
            swap
          </button>
        </div>

        <InputBox label="To" 
        amount={convAmt} 
        onAmtChange={setConvAmt}
        amtDisabled
        currOptions={currOptions} 
        curr={to} 
        onCurrChange={setTo}/>

        <button type="submit" onClick={convert}>
          convert {from.toUpperCase()} to {to.toUpperCase()} 
        </button>
      </form>
    </>
  )
}

export default App
