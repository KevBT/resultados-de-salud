import { useState } from 'react'
import './App.css'
import Results from './components/results/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Results />
    </>
  )
}

export default App
