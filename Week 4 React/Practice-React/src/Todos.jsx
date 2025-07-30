import React, { useState } from 'react'

const Todos = () => {

    const [todo , setTodo] = useState([
        {
            title : "GO to Gym",
            Description : "Go TO GYM 9 To 10",
            Compleated :false
        },
        {
            title : "Study Dsa",
            Description : "Study Dsa 8 to 7 ",
            Compleated :true
        }
    ])

  const addNew = () => {
    setTodo([...todo, {
      title :"New Todo Added",
      Description :"Hello Ji FIr Se New Todo "
    }])
  }
  


  return (
    <div>
      {/* <Todo title= "Firdosh Khan" Description= "Hellllo Ji Kya Haaal Chaaaal"></Todo> */}
       {/* Another Way */}
       {/* <Todo title={todo[0].title} Description={todo[0].Description}/>  */}
      
      {/* Another Way */}
      <br></br>
        <button onClick={addNew}>Addd New Todo</button>
        {
          todo.map((newTodo,index) => {
            return <Todo key={index} title={newTodo.title} Description={newTodo.Description}></Todo>
          })
        }
    </div>
  )
}

function Todo ({title , Description}) {
  return (
    <>
      <h1>{title}</h1>
      <h2>{Description}</h2>
    </>
  )
}

export default Todos
