import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Whyus from '../components/Whyus'
import Partners from '../components/Partners'
import Recomendation from '../components/Recomendation'
import BestSeller from '../components/BestSeller'
import LimitedDeals from '../components/LimitedDeals'
import Footer from '../components/Footer'

function Furniture() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Whyus/>
        <Partners/>
        <Recomendation/>
        <BestSeller/>
        <LimitedDeals/>
        <Footer/>
    </div>
  )
}

export default Furniture