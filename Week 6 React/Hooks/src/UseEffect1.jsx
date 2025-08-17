import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App2 = () => {

  const [setId , setClickerId] = useState(1)
  const [color , setColor] = useState('black')

 return  (
    <div style={{backgroundColor : color , height : "100vh"}}>

      <button onClick={() => {
        setClickerId(1)
        setColor('black')
      }}>
        1
      </button>

      <button onClick={() => {
        setClickerId(2)
        setColor('pink')
      }} >
        2
      </button>

      <button onClick={() => {
        setClickerId(3)
        setColor('red')
      }}>3</button>

      <button onClick={() => {
        setClickerId(4)
        setColor('yellow')
      }}>4</button>

      <button onClick={() => {
        setClickerId(5)
        setColor('blue')
      }}>5</button>



      <TodoComponent  id= {setId}/>

    </div>
  )
}

const TodoComponent = ({id}) => {
    
    const [todoName , setTodo] = useState([])


    useEffect(() => {
        axios.get(`https://dummyjson.com/todos/${id}`)
        .then((response) => {
            setTodo(response.data)
        })
        .catch((err) => {
            window.alert("Data eRROR nOT fEATCHED " + err)
        })
    },[id])
    
    return (
        <>
            <div>
                <h1>{todoName.todo}</h1>
                <h3 style={{color : "red"}}>{todoName.userId}</h3>
            </div>
        </>
    )
}

export default App2
