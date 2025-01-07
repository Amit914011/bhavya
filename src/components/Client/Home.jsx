import React from 'react'
import Banner from './Banner'
import Banner2 from './Banner2'

import Productpack1 from './Productpack1'
import Testimonial from './Testimonial'
import Collage from './Collage'
import OurDoctors from './OurDoctors'
import Article from './Article'
import Status from './Status'
import BestSeller from './BestSeller'


export default function Home() {
  return (
    <div>
      <Banner/>
      <Banner2/>
      <BestSeller/>
      <Productpack1/>
      <Status/>
      <Testimonial/>
      <Collage/>
      <OurDoctors/>
      <Article/>
    </div>
  )
}
