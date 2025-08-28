import React from "react"
import { useState } from "react"

//! {Functional Component}
function MyComponent () {

  const [count, setCount] = useState(0)

  return (
    <>
       <button
          onClick={() => {
            setCount(count + 1)
          }}
       >
        {count}
       </button>
    </>
  )
};

// ! {ClassBased Component}
class MyComponent2 extends React.Component{

  constructor(props){
    super(props)
    this.state = {count :0};
  }

  incrementCount = () => {
    this.setState({count : this.state.count + 1})
  }

  render() {
    return (
      <div>
          <button onClick={this.incrementCount}>{this.state.count}</button>
      </div>
    )
      
  }
}


export default MyComponent