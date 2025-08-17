import axios from "axios"
import React, { useEffect, useState } from "react"


const App = () => {
     

    const [Todos , setTodo] = useState([])

    
    useEffect(() => {
        axios.get('https://dummyjson.com/todos')
        .then((response) => {
            setTodo(response.data.todos)
        })
    },[])



    return(
        <>
            {
                Todos.map((todo ,id ) => {
                    return <TodoComponent key = {id} userId = {todo.userId} todo = {todo.todo}/>
                })
            }
        </> 
    )
}

const TodoComponent = ({userId ,todo }) => {
    return (
        <>
            <div>
                <h1>{todo}</h1>
                <h3 style={{color : "red"}}>{userId}</h3>
            </div>
        </>
    )
}



export default App