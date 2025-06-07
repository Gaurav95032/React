import { useState } from "react";


function App() {
  const [count, setCount] = useState(0);
  const counter = () => {
    setCount(prevCounter => prevCounter + 1);
  }

  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={counter} >Update Counter</button>
    </>
  )
}

export default App
