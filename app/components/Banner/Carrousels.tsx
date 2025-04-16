'use client';
import Image from 'next/image';

// Import Swiper Core and required modules
import {Pagination, Navigation, Autoplay} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper Styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Carrousels = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination = {{ clickable: true }}
    >
      <SwiperSlide>
        <Image src="/assets/banner/banner1.jpeg" alt="nothing" className='rounded-lg object-cover' fill />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/assets/banner/banner2.jpeg" alt="nothing" className='rounded-lg object-cover' fill />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/assets/banner/banner3.jpeg" alt="nothing" className='rounded-lg object-cover' fill />
      </SwiperSlide>
      ...
    </Swiper>
  )
}

export default Carrousels