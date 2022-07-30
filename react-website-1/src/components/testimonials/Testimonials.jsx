import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";


import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'


// import required modules



const data = [
  {
    avatar: AVTR1,
    name: 'Client 1',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis at quas hic ipsum sunt doloremque eveniet deleniti voluptatem nam minus!'
  },
  {
    avatar: AVTR2,
    name: 'Client 2',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis at quas hic ipsum sunt doloremque eveniet deleniti voluptatem nam minus!'
  },
  {
    avatar: AVTR3,
    name: 'Client 3',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis at quas hic ipsum sunt doloremque eveniet deleniti voluptatem nam minus!'
  },
  {
    avatar: AVTR4,
    name: 'Client 4',
    review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis at quas hic ipsum sunt doloremque eveniet deleniti voluptatem nam minus!'
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials_container' 
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({ avatar, name, review}, index) => {
            return (
                      <SwiperSlide key={index} className="testimonial">
                       <div className="client_avatar">
                         <img src={avatar} alt=''/>
                        </div>
                       <h5 className='client_name'>{name}</h5>
                         <small className='client_review'>{review}</small>
                     </SwiperSlide>)
          })

        }
      </Swiper>


    </section>
  )
}

export default Testimonials