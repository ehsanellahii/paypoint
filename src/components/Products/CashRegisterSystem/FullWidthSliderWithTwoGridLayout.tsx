'use client';
import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import Wrapper from '@/components/shared/Wrapper';
import ProductsHero from '@/components/shared/sections/ProductsHero';
import RightImageProductHero from './RightImageHero';

interface IFullWidthSliderWithTwoGridLayoutProps {
  slides: {
    header: string;
    title: string;
    about: string;
    image: string;
    video?: string;
  }[];
}

const FullWidthSliderWithTwoGridLayout: React.FC<
  IFullWidthSliderWithTwoGridLayoutProps
> = ({ slides }) => {
  return (
    <Wrapper style='w-full h-full bg-white py-8'>
      <div
        className='w-full h-full'
        style={{
          backgroundImage: `url('/Assets/CashRegisterSystem/sliderBgImage.png')`,
          backgroundPosition: 'center right',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}>
        <Swiper
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          // install Swiper modules
          modules={[Autoplay, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: false }}
          className='max-w-full max-h-full'>
          {slides.map((itm, idx) => (
            <SwiperSlide key={idx}>
              <RightImageProductHero
                header={itm.header}
                title={itm.title}
                about={itm.about}
                image={itm.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Wrapper>
  );
};

export default FullWidthSliderWithTwoGridLayout;
