import React from 'react'
import { Outlet } from 'react-router-dom'
import Navber from '../Component/Navber/Navber'
import Banner from '../Component/Banner/Banner'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Skill from '../Component/Skill/Skill'
import Resume from '../Component/Resume/Resume'
import Filter from '../Component/Portfolio/Filter'
import Services from '../Component/Service/Services'
import Testimonials from '../Component/Testimonial/Testimonials'
import Contact from '../Component/Contacts/Contact'


export const LayoutOne = () => {
  return (
    <>
        <Navber/>
        <Banner/>
        <About/>
        <Skill/>
        <Resume/>
        <Filter/>
        <Services/>
       <Testimonials/>
        <Contact/>
        <Outlet/> 
    </>
  )
}
