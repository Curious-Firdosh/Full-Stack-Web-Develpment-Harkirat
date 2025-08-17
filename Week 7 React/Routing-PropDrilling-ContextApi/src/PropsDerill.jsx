import React, { useState } from 'react'

const GrandParent = () => {

    const [count , setCount] = useState(0)
  return (
    <div>
     
     {/* 
        In the parent component, we shouldn't have to pass down setCount,
        but if we don’t, the child component won’t be able to update the count.
        This is the problem with prop drilling – the child can't access what it needs directly.
     */}
     
      <Parent count={count}/>
    
    </div>
  )
}

//  That is count component
const Parent = ({count}) => {
    return (
        <>
            <h1>{count}</h1>
            <Children count = {count} setCount = {setCount}/>
        </>
    )
}

// THat is Button Component 
const Children = ({count , setCount}) => {
    return (
        <>
        <button onClick={() => {
            setCount(count + 1)
        }}>
            Increase
        </button>

        <button onClick={() => {
              setCount(count - 1)
        }}>
            Decrease
        </button>
        </>
    )
}

export default GrandParent
