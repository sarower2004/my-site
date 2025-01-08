
import './App.css'
import { LayoutOne } from './Layout/LayoutOne'
import Home from './Pages/Home'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import About from './Pages/About'

function App() {

  const myRout = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element = {<LayoutOne/>} >
          <Route index element= {<Home/>}/>
          
        </Route>
       
      </Route>
    )
  )

  

  return (
    <>
     <RouterProvider router={myRout}/>
     
    </>
  )
}

export default App
