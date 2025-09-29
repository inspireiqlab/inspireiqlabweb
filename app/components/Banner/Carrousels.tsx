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
      {/* <SwiperSlide>
        <Image src="/assets/banner/banner1.jpeg" alt="nothing" className='rounded-lg object-cover' fill />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/assets/banner/banner2.jpeg" alt="nothing" className='rounded-lg object-cover' fill />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/assets/about-us/pexels-vanessa-loring-7868892.jpg" alt="nothing" className='rounded-lg object-cover' fill />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/assets/banner/banner4.webp" alt="Image by freepik" className='rounded-lg object-cover' fill />
      </SwiperSlide> */}
      <SwiperSlide>
        <Image src='/assets/gallery/Robotics_Age-7 to 11/img4.webp' alt="Kids are building toy robots" className='rounded-lg object-cover' fill />
      </SwiperSlide>
      <SwiperSlide>
        <Image src='/assets/gallery/group/IMG_20250831_171627.jpg' alt="Kids are building toy robots" className='rounded-lg object-cover' fill />
      </SwiperSlide>
      <SwiperSlide>
        <Image src='/assets/gallery/3D-Pen-fun/img2.jpg' alt="Kids are building toy robots" className='rounded-lg object-cover' fill />
      </SwiperSlide>
      <SwiperSlide>
        <Image src='/assets/gallery/STEM_Age-8 to11/img3.jpg' alt="Kids are building toy robots" className='rounded-lg object-cover' fill />
      </SwiperSlide>
      <SwiperSlide>
        <Image src='/assets/gallery/Coding-computer/img3.jpg' alt="Kids are building toy robots" className='rounded-lg object-cover' fill />
      </SwiperSlide>
      ...
    </Swiper>
  )
}

export default Carrousels