import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import Parent from './Parent.jsx'
import ChildOne from './ChildOne.jsx'
import ChildTwo from './ChildTwo.jsx'
const router = createBrowserRouter([
  {
    path:'/',
    element:<Parent/>
  },
  {
    path:'/childone',
    element:<ChildOne/>
  },
  {
    path:'/childtwo',
    element:<ChildTwo/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}/>
)
