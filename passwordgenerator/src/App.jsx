import React, { useCallback, useEffect, useState } from 'react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from './components/ui/input'
import { Button } from './components/ui/button';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharactersAllowed] = useState(false);
  const [Password, setPassword] = useState("");
  const [Copied, setCopied] = useState(false);


  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (characterAllowed) str += "!@#$%&*";
    for (let index = 0; index < length; index++) {
      const characters = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(characters);
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed])


  const copyPasswordToClipBoard = () => {
    window.navigator.clipboard.writeText(Password);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    },2000)   
  }


  useEffect(() => {
    generatePassword()
  },[length,numberAllowed,characterAllowed])

  return (
    <div className='flex justify-center items-center mt-52'>
      <Card className="w-1/2">
        <CardHeader>
          <CardTitle className="text-3xl font-extrabold">Password Generator</CardTitle>
        </CardHeader>
        <CardContent>
          <div className='flex flex-row'>
            <Input
              value={Password}
              type="text"
              placeholder="Password"
              readOnly
            />
            <Button className="ml-3" onClick={() => { copyPasswordToClipBoard() }}>{Copied ? "Copied✔" : "Copy"}</Button>
          </div>

          <div className='flex flex-row items-center gap-4 mt-7'>
            <input
              type="range"
              className="w-32"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label>Length: {length}</label>

            <div className="flex items-center gap-1">
              <Input
                type="checkbox"
                className="size-4"
                defaultChecked={numberAllowed}
                onChange={() => {
                  setNumberAllowed((prev) => !prev)
                }}
              />
              <label>Include Numbers</label>
            </div>

            <div className="flex items-center gap-1">
              <Input
                type="checkbox"
                className="size-4"
                defaultChecked={characterAllowed}
                onChange={() => {
                  setCharactersAllowed((prev)=>!prev)
                }}
              />
              <label>Include Special Characters</label>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default App
