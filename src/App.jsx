
import './App.css'
import { LayoutOne } from './Layout/LayoutOne'
import Home from './Pages/Home'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import About from './Pages/About'
import Resume from './Pages/Resume'
import Portfolio from './Pages/Portfolio'
import Services from './Pages/Service'
import Contact from './Pages/Contact'

function App() {
  const myRout = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element = {<LayoutOne/>} >
        <Route index element ={<Home/>}/>
        <Route  path='/about' element ={<About/>}/>
        <Route path='/resume' element ={<Resume/>}/>
        <Route path='/portfolio' element ={<Portfolio/>}/>
        <Route path='/services' element ={<Services/>}/>
        <Route path='/contact' element ={<Contact/>}/>
          
          
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
