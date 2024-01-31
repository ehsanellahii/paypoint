import React from 'react';
import Wrapper from '../shared/Wrapper';
import { Heading } from './Pricing';
import Image from 'next/image';
import { StaticData } from '@/constants/Static';

const InfoCard = ({ info, value }: { info: string; value: string }) => {
  return (
    <div className='w-full h-full flex flex-col items-center'>
      <h5 className='font-semibold text-base'>bis zu</h5>
      <h3 className='font-bold text-[3rem] leading-[2.4rem] text-main-brand'>{value}</h3>
      <p className='font-semibold text-base'>{info}</p>
    </div>
  );
};

const WhyUseSides = () => {
  return (
    <Wrapper style='bg-white-main py-8 md:py-16'>
      <Heading text='Warum über 4.500 Kund:innen SIDES nutzen' />
      <article className='w-full h-full max-w-[85%] mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-10'>
        {StaticData.Pricing.WhyCustomerUseUs.map((itm, idx) => (
          <InfoCard info={itm.info} value={itm.value} key={idx} />
        ))}
      </article>
      <div className='w-full h-full flex gap-2 justify-center items-center py-12 flex-wrap md:flex-nowrap'>
        {StaticData.Pricing.PaymentIconImages.map((itm, idx) => (
          <div key={idx} className='w-[3rem] h-[2.5rem] relative'>
            <Image
              src={itm}
              alt='Paypoint Payment Mehod'
              fill
              className='object-contain w-full h-full'
            />
          </div>
        ))}
      </div>
      <article className='w-full h-full max-w-[90%] mx-auto bg-white-lightOrange py-16'>
        <div className='w-full h-full max-w-[80%] mx-auto flex flex-col gap-4 justify-center items-center'>
          <h1 className='w-full h-full text-[2.5rem] text-center font-bold'>
            Machen Sie mehr als 100.000 € Umsatz pro Jahr?
          </h1>
          <p className='text-center font-medium'>
            Unser Sales-Team stellt Ihnen gerne eine passende Lösung Für Ihr Geschäft
            bereit.
          </p>
          <button
            type='button'
            className='bg-black-main text-white-main font-semibold px-6 py-3 rounded-2xl text-center'>
            Kontaktieren Sie uns
          </button>
        </div>
      </article>
    </Wrapper>
  );
};

export default WhyUseSides;
