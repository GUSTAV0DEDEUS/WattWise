import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/routes'
import Navbar from './components/navbar'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='bg-background w-dvw h-dvh flex flex-col'>
      <Navbar/>
      <RouterProvider router={router}/>
    </div>
  </React.StrictMode>,
)
