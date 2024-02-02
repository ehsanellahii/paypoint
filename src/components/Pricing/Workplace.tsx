'use client';
import React from 'react';
import Image from 'next/image';
import { FaCheck, FaChevronRight } from 'react-icons/fa';
import Wrapper from '../shared/Wrapper';
import { Heading } from './Pricing';
import { StaticData } from '@/constants/Static';
import { useRouter } from '@/navigation';
import { getCookie, setSessionCookie } from '@/utils/cookieFunctions';
import { FaArrowRight } from 'react-icons/fa';

const ServicesCard = ({
  item,
}: {
  item: {
    image: string;
    title: string;
    about: string;
    bullets: any[];
    price: number;
  };
}) => {
  const { image, title, about, bullets, price } = item;
  const router = useRouter();
  const handleClick = () => {
    setSessionCookie('selectedOfferDetails', JSON.stringify(item));
    router.push('/pricing/information');
  };
  return (
    <article
      onClick={handleClick}
      className='w-full h-full text-grey-pText flex flex-col gap-4 bg-white-main py-6 hover:scale-[1.1] hover:shadow-md'>
      <h1 className='font-bold text-2xl text-black-text text-center'>{title}</h1>
      <p className='text-center'>{about}</p>
      <div className='w-full h-full flex flex-col md:grid md:grid-cols-[.7fr,1fr,3rem] '>
        <div className='w-[10rem] h-[10rem] md:w-full md:h-full mx-auto'>
          <div className='w-full h-full relative '>
            <Image src={image} alt='' fill className='object-contain' />
          </div>
        </div>
        <div>
          <ul className='w-full h-full flex flex-col gap-0'>
            {bullets.map((itm, idx) => (
              <li
                key={idx}
                className='bg-white-main text-grey-pText p-2 flex gap-3 items-center'>
                <span className='text-main-brand text-xl font-extrabold'>
                  <FaCheck />
                </span>
                {itm}
              </li>
            ))}
          </ul>
        </div>
        <div className='h-full flex justify-center items-center'>
          <FaChevronRight size={30} />
        </div>
      </div>
      <h3 className='font-bold text-center text-[2.4rem] text-main-brand'>{price} €**</h3>
    </article>
  );
};

const Workplace = () => {
  return (
    <Wrapper style='w-full h-full my-8 bg-white-lightOrange'>
      <section className='w-full h-full flex flex-col gap-4'>
        <Heading
          text='Baue leistungsstarke All-in-One Workspaces.'
          style='text-black-main'
        />
        <div className='w-full h-full grid md:grid-cols-2 gap-12 my-8'>
          {StaticData.Pricing.Services.map((itm, idx) => (
            <ServicesCard key={idx} item={itm} />
          ))}
        </div>
        <p className='text-center'>
          **Die ausgewiesenen
          <span className='font-bold'>Preise sind monatliche Nettopreise</span> in Euro
        </p>
      </section>
    </Wrapper>
  );
};

export default Workplace;
