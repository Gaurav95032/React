import { useState } from "react";


function App() {
  const [count, setCount] = useState(0);
  const counterAdd = () => {
    setCount(prevCounter => prevCounter + 1);
  }
  const counterRemove = () => {
    setCount(prevCounter => prevCounter - 1);
  }
  return (
    <>
      <h1>Count : {count}</h1>
      <button  onClick={counterAdd} >Update Counter</button>
      <button onClick={counterRemove} >Remove Counter</button>
    </>
  )
}

export default App
