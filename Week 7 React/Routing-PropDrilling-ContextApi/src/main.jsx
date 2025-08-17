import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import GrandParent from './PropsDerill.jsx'
import ContextApi from './ContextApi.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      {/* <GrandParent/> */}
      <ContextApi/>
    </BrowserRouter>
  </StrictMode>,
)
