import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  //To run useEffect only once on the first render pass any empty array in the dependecy
  useEffect(() => {
  alert("clicked")
  }, [])
  
  //To run useEffect on change of a particular value. Pass the state and props in the dependency array
  useEffect(() => {
    alert("clicked")
  }, [count1, count2])
  //only click1 is oressed then only alert box is seen
  useEffect(() => {
    alert("clicked")
  },[count1])

  const handleClick1 = () => {
  setCount1(count1 +1)
}
const handleClick2 = () => {
  setCount2(count2 +1)
}
  return (
    <>
      <div>
        <button type="button" onClick={handleClick1}>First Button { count1}</button>
        <button type="button" onClick={handleClick2}>Second Button { count2}</button>
  </div>
    </>
  )
}

export default App
