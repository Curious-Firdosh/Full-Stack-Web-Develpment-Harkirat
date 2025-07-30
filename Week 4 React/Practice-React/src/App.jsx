import { useState } from "react"
import Todos from "./Todos"
import Hooks from "./Hooks"

const App = () => {

  const [count , setCount] = useState(0)
  return(
    <div>
      <CustomButton count ={count} setCount = {setCount} ></CustomButton>
      <Todos></Todos>
      <Hooks/>
    </div>
  )
}

function CustomButton (props) {

  function onclickHandler () {
    props.setCount(props.count + 1)
  }
  return (
    <button onClick = { onclickHandler}>
      Counter {props.count}
    </button>

  )
}

export default App