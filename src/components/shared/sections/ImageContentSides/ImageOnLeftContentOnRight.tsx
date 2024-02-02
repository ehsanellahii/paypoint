import Image from 'next/image';
import React from 'react';
import { FaRegCheckCircle } from 'react-icons/fa';
import { FaAngleRight } from 'react-icons/fa6';
import Heading from '../../Heading/Heading';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';

const ImageOnLeftContentOnRight = ({
  Header,
  TitleOne,
  TitleTwo,
  Bullets,
  LeanMoreUrl,
  ImageUrl,
}: {
  ImageUrl: string;
  Header: string;
  TitleOne: string;
  TitleTwo: string;
  Bullets: any[];
  LeanMoreUrl: string;
}) => {
  const t = useTranslations('Common');
  return (
    <article className='w-full h-full grid md:grid-cols-2 md:gap-4 place-items-center'>
      <div className='w-full h-full px-2 py-4 '>
        <div className='w-full h-[10rem] md:h-full relative'>
          <Image src={ImageUrl} alt={''} fill className='w-full h-full object-contain' />
        </div>
      </div>
      <div className='flex flex-col gap-4 py-8 md:py-8'>
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

export default ImageOnLeftContentOnRight;
