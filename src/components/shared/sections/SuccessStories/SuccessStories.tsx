'use client';
import React from 'react';
import Wrapper from '../../Wrapper';
import Image from 'next/image';
import './SuccessStories.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { StaticData } from '@/constants/Static';

type IStory = {
  story: string;
  name: string;
  designation: string;
  image: string;
};

interface ISuccessStoriesProps {
  stories: IStory[];
  className?: string;
  style?: string;
}

const SuccessStories: React.FC<ISuccessStoriesProps> = ({ stories }) => {
  return (
    <Wrapper style='w-full h-full bg-white py-8'>
      <div className='w-full h-full md:max-w-[85%] mx-auto lg:max-w-[80%]'>
        <Swiper
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          // install Swiper modules
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: false }}
          className='max-w-full max-h-full'>
          {stories.map((itm, idx) => (
            <SwiperSlide key={idx}>
              <div className='w-full py-4'>
                <p className='text-black-text text-[1.6rem] font-bold my-4 text-left'>
                  „{itm.story}“
                </p>
                <div className='w-full h-full flex justify-start gap-2 md:py-7 text-xl font-medium'>
                  <h3 className='font-bold'>-{itm.name},</h3>
                  <p>{itm.designation}</p>
                </div>
                <div className='w-full h-full md:max-w-[25rem] mr-auto flex gap-6'>
                  <div className='relative w-[150px] h-[150px]'>
                    <Image
                      src={itm.image}
                      alt={itm.name}
                      fill
                      className='object-contain'
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Wrapper>
  );
};

export default SuccessStories;
