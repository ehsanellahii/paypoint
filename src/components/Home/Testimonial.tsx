import React from 'react';
import Wrapper from '../shared/Wrapper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image';
import { StaticData } from '@/constants/Static';
import { useTranslations } from 'next-intl';
const Testimonial = () => {
  const t = useTranslations('Landing');
  return (
    <Wrapper style='w-full h-full'>
      <section className='w-full h-full'>
        <h4 className='w-full h-full text-center font-black text-2xl md:text-3xl py-10'>
          {t('Kundenstimmen')}
        </h4>
        <div className='w-full h-full'>
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
            {StaticData.Landing.Testimonials.map((itm, idx) => (
              <SwiperSlide key={idx}>
                <div>
                  <p className='text-black-text md:px-20 italic my-4'>
                    {`"${t(itm.testimonial)}"`}
                  </p>
                  <div className='w-full h-full md:max-w-[25rem] mx-auto flex gap-6'>
                    <div className='relative w-[140px] h-[100px]'>
                      <Image
                        src={itm.image}
                        alt={itm.name}
                        fill
                        className='object-cover rounded-full'
                      />
                    </div>

                    <div className='w-full h-full flex flex-col items-start justify-center md:py-7'>
                      <h3 className='font-bold text-xl'>{itm.name}</h3>
                      <p>{itm.designation}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </Wrapper>
  );
};

export default Testimonial;
