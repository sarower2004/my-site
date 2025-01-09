import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from '../Component/Navber/Navber'




export const LayoutOne = () => {
  return (
    <>
       <Navber/>
        <Outlet/> 
    </>
  )
}
