import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  useEffect(() => {
  alert("clicked")
})

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
