import React, { useState } from 'react'
import { Button } from './components/ui/button'

function App() {
  const [color, setColor] = useState("black")

  function changeColor(newColor) {
    setColor(newColor)
  }

  return (
    <div className='flex h-screen w-screen duration-200' style={{ backgroundColor: color }}>
      <div className='absolute bottom-10 left-1/4 h-14 w-1/2 bg-white rounded-xl'>
        <div className="flex justify-evenly items-center w-full h-full px-4 py-4 bg-white rounded-xl">
          <Button className="bg-blue-500 w-1/5" onClick={() => changeColor("blue")}>Blue</Button>
          <Button className="bg-green-500 w-1/5" onClick={() => changeColor("green")}>Green</Button>
          <Button className="bg-yellow-500 w-1/5" onClick={() => changeColor("yellow")}>Yellow</Button>
          <Button className="bg-red-500 w-1/5" onClick={() => changeColor("red")}>Red</Button>
        </div>
      </div>
    </div>
  )
}

export default App
