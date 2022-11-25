import React from 'react'
import './testmonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'

const Testmonials = () => {
  return (
    <section id='testmonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR1} alt="Avatar One" />
          </div>
          <h5 className='client__name'>Priyanka</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, at voluptatum. Dolore facere animi provident natus deleniti officia pariatur dolorem porro suscipit fugit, vitae odio dicta aut dolor voluptate culpa!
          </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR2} alt="Avatar Two" />
          </div>
          <h5 className='client__name'>Pranavi</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, at voluptatum. Dolore facere animi provident natus deleniti officia pariatur dolorem porro suscipit fugit, vitae odio dicta aut dolor voluptate culpa!
          </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR3} alt="Avatar Three" />
          </div>
          <h5 className='client__name'>Dhanraj</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, at voluptatum. Dolore facere animi provident natus deleniti officia pariatur dolorem porro suscipit fugit, vitae odio dicta aut dolor voluptate culpa!
          </small>
        </SwiperSlide>
        <SwiperSlide className='testimonial'>
          <div className="client__avatar">
            <img src={AVTR4} alt="Avatar Four" />
          </div>
          <h5 className='client__name'>Deepika</h5>
          <small className='client__review'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, at voluptatum. Dolore facere animi provident natus deleniti officia pariatur dolorem porro suscipit fugit, vitae odio dicta aut dolor voluptate culpa!
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testmonials