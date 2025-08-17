import React, { Suspense } from 'react'
import { lazy } from 'react'
import { Route , Routes, useNavigate} from 'react-router-dom'
import ContextApi from './ContextApi'

const Dashboard = lazy(() => import('./Pages/Dashboard'))
const Landing  =  lazy(() => import('./Pages/Landing'))

const App = () => {

  const navigate = useNavigate()

  return (
    <div>
      <h1>Hii That is NavBar</h1>

      <button onClick={() => {
        //  window.location.href = '/' // When You Use That wiil relode the html file again and again
        navigate('/')
      }}>Landing Page </button> 

      <button onClick={() => {
        //  window.location.href = '/dashboard'
        navigate('/dashboard')
      }}>Dashboard Page </button>

        <Routes>
          <Route path='/dashboard' element = {<Suspense fallback = {"Loading...."}><Dashboard/></Suspense>} />
          <Route path='/' element = {<Landing/> }/>
        </Routes>

        
    </div>
  )
}

export default App
