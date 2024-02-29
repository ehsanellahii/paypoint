import Image from 'next/image';
import React from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa6';
import Heading from '@/components/shared/Heading/Heading';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

const FleetManagement = ({
  Header,
  TitleOne,
  TitleTwo,
  Bullets,
  LeanMoreUrl,
  ImageUrl,
  textDivStyle,
  imageDivStyle,
}: {
  ImageUrl: string;
  Header: string;
  TitleOne: string;
  TitleTwo: string;
  Bullets: any[];
  LeanMoreUrl: string;
  textDivStyle?: string;
  imageDivStyle?: string;
}) => {
  const t = useTranslations('Common');
  return (
    <article className='w-full h-full grid md:grid-cols-2 md:gap-4 place-items-center'>
      <div className={`w-full h-full p-[1rem] md:p-[3rem] ${imageDivStyle}`}>
        <div className='w-full  md:h-full relative rounded-lg'>
          <img
            src={ImageUrl}
            alt={''}
            className='w-auto h-[25rem] object-cover rounded-lg'
          />
          <div className='absolute -top-[4rem] md:-top-[4.5rem] left-5'>
            <div className='relative w-[8rem] h-[8rem] rounded-lg overflow-hidden'>
              <Image
                src='/Assets/BusinessType/SuperMarket/bicycle.jpg'
                alt=''
                fill
                className='w-full h-full object-contain md:object-cover'
              />
            </div>
          </div>
        </div>
      </div>
      <div className={`flex flex-col gap-4 py-8 md:py-8 px-4 ${textDivStyle}`}>
        <h5 className='text-xl'>{t(Header)}</h5>
        <div>
          <Heading text={t(TitleOne)} style='text-left' />
          <Heading text={t(TitleTwo)} style='text-left' />
        </div>
        <ul className='space-y-3'>
          {Bullets.map((itm, idx) => (
            <li key={idx} className='w-full h-full flex items-start gap-2 text-lg'>
              <span className='text-main-brand text-3xl'>
                <FaRegCheckCircle />
              </span>
              {t(itm)}
            </li>
          ))}
        </ul>
        <div>
          <Link href={LeanMoreUrl} className='flex items-center gap-3 text-xl py-3 '>
            <span className='border-b-green-500 border-b-[3px]'>
              {t('Mehr erfahren')}
            </span>
            <FaAngleRight />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default FleetManagement;
