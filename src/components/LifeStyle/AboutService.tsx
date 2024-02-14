import Image from 'next/image';
import React from 'react';
import Heading from '../shared/Heading/Heading';
import { useTranslations } from 'next-intl';

type PropsType = {
  headerTitle: string;
  lineOne: string;
  lineTwo: string;
  lineThree?: string;
  about: string;
};

const AboutService = ({ headerTitle, lineOne, lineTwo, lineThree, about }: PropsType) => {
  const t = useTranslations('Common');
  return (
    <article className='w-full h-full py-8 md:py-12 md:max-w-[80%] mx-auto flex flex-col gap-6 md:gap-8'>
      <div className='w-full h-full'>
        <Heading text={t('Die Unabhängigkeitserklärung für deinen Lieferservice')} />
        <p className='text-black-text text-center text-base px-4'>
          {t(
            ''
          )}
          {t('Gastro-Kassensystem')}
          {t(
            ''
          )}
        </p>
      </div>
      <div className='w-full h-full md:max-h-[20rem] md:max-w-[90%] mx-auto grid md:grid-cols-2 gap-2 px-4 md:px-0'>
        <div className='w-full h-full md:max-w-full md:max-h-[20rem] p-8 md:px-12 py-8 space-y-6 bg-blue-teal rounded-lg '>
          <p className='text-left avalon-heading text-xl text-white-main'>
            „
            {t(
              'Mit der PayPoint Lieferdienst Software bekomme ich alles mit Ich kann alle Bestellungen immer in Verbindung mit den Lieferzeiten nachvollziehen und sehe genau, welche Bestellungen noch offen sind'
            )}
            “
          </p>
          <p className='text-white-main'>
            <span className='avalon-heading'>- Björn Tischler</span>, Geschäftsführer bei
            Diazo
          </p>
        </div>
        <div className='w-full h-full  md:max-w-full grid grid-cols-2 gap-2'>
          <div className='w-full h-[10rem] md:h-full bg-[#f6f6f6] flex justify-center items-center px-4 rounded-lg'>
            <h1
              className='font-bold text-[1.5rem] md:text-[2.5rem] uppercase underline decoration-2'
              style={{ fontFamily: 'Times New Roman' }}>
              Diazo
            </h1>
          </div>
          <div className='w-full min-h-[10rem] md:h-full rounded-lg'>
            <div
              className='w-full h-full relative rounded-lg'
              style={{
                backgroundImage: "url('/Assets/Restaurant/paypoint-owner.png')",
                backgroundPosition: 'top',
                backgroundSize: 'cover',
              }}></div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default AboutService;
