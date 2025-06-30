import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'
import { ThemeProvider } from './context/theme'

function App() {
  const [themeMode, setThemeMode] = useState("light");

  useEffect(() => {
    document.querySelector('html').classList.remove("dark", "light");
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  const switchTheme = (theme) => {
    setThemeMode(theme);
  }
 
  return (
    <>
      <ThemeProvider value={{themeMode, switchTheme}}>
        <h2 className='text-2xl mb-4'>Dark Theme using Context API</h2>
        <ThemeBtn />
        <Card />
      </ThemeProvider>
    </>
  )
}

export default App
