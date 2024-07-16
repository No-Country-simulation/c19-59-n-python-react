import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { VetTechApp } from './VetTechApp'
import { NextUIProvider } from '@nextui-org/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <VetTechApp />
    </NextUIProvider>
  </React.StrictMode>,
)
