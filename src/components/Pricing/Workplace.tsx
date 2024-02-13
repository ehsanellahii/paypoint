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
import { useTranslations } from 'next-intl';

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
  const t = useTranslations('Pricing');
  const { image, title, about, bullets, price } = item;
  const router = useRouter();
  const handleClick = () => {
    setSessionCookie('selectedOfferDetails', JSON.stringify(item));
    router.push('/pricing/information');
  };
  return (
    <article
      onClick={handleClick}
      className={`w-full h-full lg:h-[25rem] text-grey-pText flex flex-col space-y-between bg-white-main py-6 hover:border hover:border-main-brand hover:shadow-md`}>
      <h1 className='font-bold text-[2.3rem] leading-[2.8rem] text-black-text text-center'>
        {t(title)}
      </h1>
      <div className='w-full h-full flex flex-col items-center md:grid md:grid-cols-[.7fr,1.4fr] gap-2'>
        <div
          className={`w-[10rem] h-[10rem] md:w-full md:h-full mx-auto ${
            image === '/Assets/Home/dashboard.png' ? 'px-4' : ''
          }`}>
          <div className='w-full h-full relative '>
            <Image src={image} alt='' fill className='object-contain' />
          </div>
        </div>
        <div className='w-full h-full flex justify-between px-4 sm:px-6 md:px-0'>
          <ul className='w-full h-full flex flex-col justify-center  gap-1'>
            {bullets.map((itm, idx) => (
              <li
                key={idx}
                className='bg-white-main text-grey-pText flex gap-3 items-center'>
                <span className='text-main-brand text-xl font-extrabold'>
                  <FaCheck />
                </span>
                {t(itm)}
              </li>
            ))}
          </ul>
          <div className='h-full flex justify-center items-center'>
            <FaChevronRight size={30} />
          </div>
        </div>
      </div>
      <h3 className='font-bold text-center text-[2.4rem] text-main-brand'>{price}€</h3>
    </article>
  );
};

const Workplace = () => {
  const t = useTranslations('Pricing');
  return (
    <Wrapper style='w-full h-full my-8 bg-white-lightOrange'>
      <section className='w-full h-full flex flex-col gap-4'>
        <Heading
          text={t('Baue leistungsstarke All-in-One Workspaces')}
          style='text-black-main'
        />
        <div className='w-full h-full grid lg:grid-cols-2 gap-12 my-8'>
          {StaticData.Pricing.Services.map((itm, idx) => (
            <ServicesCard key={idx} item={itm} />
          ))}
        </div>
        <p className='text-center'>
          **{t('Die ausgewiesenen')}
          <span className='font-bold'> {t('Preise sind monatliche Nettopreise')}</span> in
          Euro
        </p>
      </section>
    </Wrapper>
  );
};

export default Workplace;
