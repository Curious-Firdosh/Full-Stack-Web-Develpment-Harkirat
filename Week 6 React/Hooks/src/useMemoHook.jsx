import React, { useMemo, useState } from 'react'

const useMemoHook = () => {

  const [counter , setCOunter] = useState(0);
  const [inputValue , setInputValue] = useState(1)

  // FOr Not Calling THe LoOP Again And Again like when you click on the counter that all the loop wiil also runn so 
  // from to save that we use useEffect That when that input value get changed we compute the loop or  for better 
  // approch we use Usememo 
  
  const Count = useMemo(() => {
      let finalValue= 0
      for(let i = 1 ; i <= inputValue ; i++) {
          finalValue = finalValue + i 
      }
      return finalValue
  },[inputValue])
  

  return (
    <div>
      
      <input onChange={(e) => {
        setInputValue(e.target.value)
      }}
      placeholder={`Find Sum From 1 To n `}
      ></input>

      <br></br>

      Sum from  1 to {inputValue} is {Count}

      <br/>

      <button onClick={() => {
        setCOunter(counter + 1 )
      }}> Counter {counter}</button>
    </div>
  )
}

export default useMemoHook
