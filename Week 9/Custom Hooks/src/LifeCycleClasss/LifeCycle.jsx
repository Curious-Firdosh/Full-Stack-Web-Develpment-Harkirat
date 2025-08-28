import React, { useEffect, useState, } from 'react'
import './App.css'

const App = () => {

  const [render , setRender] = useState(false)

  useEffect(() => {
    setInterval(() => {
        setRender(true)
    },10000)
  },[]);

  if(!render){
    return (
      <div>
         HEllo Ji AAAj Kuch Nayaaa Ho Gayaaa
      </div>
    )
  }


  return (
    <div>
        <MyComponent/>
        <MyComponent2/>
    </div>
  )
}

//! Function Based Handling of Lifcycle Methods With Hooks
const MyComponent = () => {

  useEffect(() => {
    
    console.log("Component Mounted");
    
    return () => {
      console.log("Component UnMounted");
      
    }
  },[])

  return (
    <div>
       From Inside Component
    </div>
  )
}

// Class BasedHandleing Of LifeCycle Methods Without Hoooks
class MyComponent2 extends React.Component{
   
  componentDidMount(){
    console.log("Component Mounted");
   }
  componentWillUnmount() {
    console.log("Component Unmounted");
   }

  render () {
    return (
      <div>
        Inside MyComponent2 
      </div>
    )
  }
}




export default App
