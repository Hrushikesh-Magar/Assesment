import React from 'react'
import Navbar from './Navbar'
import './Style.css'
import Container from './Container'
import Section from './Section'
import FAQ from './FAQ'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <Container/>
        <Section/>
        <FAQ/>
        <Footer/>
    </div>
  )
}

export default Home