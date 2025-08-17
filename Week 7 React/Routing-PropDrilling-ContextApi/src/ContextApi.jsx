import React, { useContext, useState } from 'react'
import { countContext } from './Context'


const ContextApi = () => {
  
    const [count , setCount] = useState(0)
  
    return (
    <div>
        <countContext.Provider value={count}> 
            <Count setCount={setCount} />
        </countContext.Provider>
    </div>
  )
}

const Count = ({setCount}) => {

    return (
        <div>
            <CountRender/>
            <Buttons setCount = {setCount}/>
        </div>
    )
}

const CountRender = () => {
    const count = useContext(countContext)
    return (
        <div>
            {count}
        </div>
    )
}

const Buttons = ({setCount}) => {
    const count = useContext(countContext)
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1) }>Decrease</button>
        </div>
    )
}

export default ContextApi
