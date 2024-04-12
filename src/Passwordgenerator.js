import React, { useState, useCallback, useEffect, useRef } from 'react'
import './Passwordgenreator.css'

export default function Passwordgenerator() {
    let [length, setLength] = useState(4)
    let [numberAllowed, setNumberAllowed] = useState(false)
    let [characterAllowed, setCharacterAllowed] = useState(false)
    let [password, setPassword] = useState('')

    const  passwordRef = useRef(null)

    const Passwordgenerator = useCallback( ()=>{
        let pass = ""
        let str = "ABCDEFGHIGJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if(numberAllowed)  str += "1234567890"
        if(characterAllowed) str += "!@#$%^&*()_-+={}[];:,.<>?/|~`"

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)            
        }
        setPassword(pass)

    },[length, numberAllowed, characterAllowed, setPassword])

    const copyPasswordToClipboard = useCallback(()=>{
      passwordRef.current?.select()
      passwordRef.current?.setSelectionRange(0, 6)
      window.navigator.clipboard.writeText(password)
      alert("Copy to clipboard")
    }, 
    [password])

    useEffect(()=>{Passwordgenerator()},
    [length, numberAllowed,characterAllowed,Passwordgenerator])
  return (
    <div>
      <h1>Password Generator</h1>

      <div class="main">
        
            <input type="text"
            value={password}
            id='showPass'
            placeholder='Password'
            readOnly
            ref={passwordRef}
            />
             <button className='button' onClick={copyPasswordToClipboard}>Copy</button>
        <div class="secondmain">
                <input type="range" 
                className='ranges'
                value={length} 
                id="range"
                min={6}
                max={16}
                onChange={(e) =>{setLength(e.target.value)}}
                />
                
                <label for="">length: {length}</label>
        
        <div className="checkbox">
                <input type="checkbox"
                    defaultChecked={numberAllowed}
                    id='numberInput'    
                    onChange={() =>{
                        setNumberAllowed((prev) => !prev);
                    }}
                />
                <label htmlFor='numberInput'> Numbers</label>
                <input type="checkbox"
                    defaultChecked={numberAllowed}
                    id='numberInputt'    
                    onChange={() =>{
                    setCharacterAllowed((prev) => !prev);
                    }}
                />
                <label htmlFor='numberInputt'>Characters</label>
        </div>
      </div>
      </div>
    </div>
  )
}
