// Basic Of Recoil 

import React from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { countAtom } from './Store/Atom/count'

const App = () => {
  return (
    <div>
        <Count/>
    </div>
  )
}

const Count = () => {

  const count = useRecoilValue(countAtom)
    return (
      <div>
        <CountRender/>
        <Button/>
        <h4 style={{color : "red"}}>{ (count % 2 == 0 )? "It is Even" : ""}</h4>

      </div>
    )
}

const CountRender = () => {
  const count = useRecoilValue(countAtom)

  return(
     <>
        <h1>{count}</h1>
       
     
     </>
    
  )
}

const Button = () => {
   const [count , setCount] = useRecoilState(countAtom)

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </>
  )
}

export default App
