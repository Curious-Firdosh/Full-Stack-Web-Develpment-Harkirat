import React from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { countAtom } from './Store/Atom/count'

const App = () => {
  return (
    <div>
        <Count/>
    </div>
  )
}

const Count = () => {
    return (
      <div>
        <CountRender/>
        <Button/>
      </div>
    )
}

const CountRender = () => {
  const count = useRecoilValue(countAtom)

  return(
    <h1>{count}</h1>
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
