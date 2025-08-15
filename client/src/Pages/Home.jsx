import React from 'react'
import Hero from '../Components/Hero'
import FeaturedSection from '../Components/FeaturedSection'
import Banner from '../Components/Banner'
import Testimonials from '../Components/Testimonials'
import Newsletter from '../Components/Newsletter'

const Home = () => {
  return (
    <div>
      <>
      <Hero/>
      <FeaturedSection/>
      <Banner/>
      <Testimonials/>
      <Newsletter/>
      {/* <Footer/> */}
      </>
    </div>
  )
}

export default Home