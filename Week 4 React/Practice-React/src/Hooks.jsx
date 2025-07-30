import React ,{Fragment, useState} from 'react'

const Hooks = () => {
    const [name , setName] = useState("Firdosh")

    const clickHandler = () => {
       setName(Math.random())
       
    }
  return (
   <Fragment>
        <button onClick={clickHandler}>Change The Title </button>
        <br></br>
    {/* Why We Cant Do THat Without The Parent Divs   */}
         <Header title = {name}/>
       
         <Header title= "Firoz Khan" /> 
   </Fragment>
  )
}
// Also We Have A Another that 
// With The Helop Of Usememo Hooks We Could Prevent THe App From Unnecessary Re-rendering 
const Header = React.memo(function Header ({title}) {
    return (
        <>
            {title}
            <br></br>
        </>
    )
})

export default Hooks
