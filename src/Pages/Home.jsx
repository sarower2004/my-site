import React from 'react'
import Banner from '../Component/Banner/Banner'
import About from './About'
import Resume from './Resume'
import Services from './Service'
import Portfolio from './Portfolio'
import Contact from './Contact'

const Home = () => {
  return (
    <>
        <div id='home'>

          
            <Banner/>
            <About/>
            <Resume/>
            <Portfolio/>
            <Services/>
            <Contact/>
        </div>

     </>
  )
}

export default Home