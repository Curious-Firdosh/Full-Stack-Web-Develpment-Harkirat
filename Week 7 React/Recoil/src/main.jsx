import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React, { Suspense } from "react";
import App from './App.jsx'
import { RecoilRoot } from 'recoil'
import NotificationApp from './NotificationApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RecoilRoot>
             <Suspense fallback={<p>Loading...</p>}>
                <NotificationApp />
            </Suspense>
        </RecoilRoot>
  </StrictMode>,
)
