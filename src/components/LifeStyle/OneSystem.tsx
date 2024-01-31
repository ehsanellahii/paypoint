'use client';
import React, { useState } from 'react';
import Heading from '../shared/Heading/Heading';
import { TiPlus } from 'react-icons/ti';
import { useTranslations } from 'next-intl';

const OneSystem = () => {
  const t = useTranslations('Common');
  const [activeIndex, setActiveIndex] = useState<number>();
  const handleClick = (index: number) => {
    setActiveIndex((prev) => (prev === index ? -1 : index));
  };
  return (
    <article className='w-full h-full py-8 md:py-12'>
      <Heading text={t('Ein System für alle Prozesse')} />
      <div className='w-full h-full grid py-12'>
        <div
          className='w-full h-[20rem] md:h-[25rem] relative mx-auto'
          style={{
            backgroundImage: "url('/Assets/LifeStyle/OneSystem.png')",
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
          }}>
          <div className='absolute top-[22%] left-[33%] md:top-[24%] md:left-[34%] '>
            <button
              onClick={() => handleClick(1)}
              className='flex gap-2 bg-white-main rounded-3xl px-1 py-0.5 md:px-3 md:py-2 items-center transition duration-250'>
              <span className='text-main-brand text-3xl'>
                <TiPlus />
              </span>
              <span className='text-black-text font-bold text-xs md:text-base'>
                {t('Küchenmanager')}
              </span>
            </button>
            {activeIndex === 1 && (
              <div className='p-3 relative z-[999] bg-white-main max-w-[14rem] mt-2 rounded-lg'>
                <p>
                  {t(
                    'Automatisiere deine Küchenprozesse und verwalte Bestellungen digital am Küchenmonitor'
                  )}
                </p>
              </div>
            )}
          </div>
          <div className='absolute top-[55%] left-[20%] md:top-[53%] md:left-[33%] '>
            <button
              onClick={() => handleClick(2)}
              className='flex gap-2 bg-white-main rounded-3xl px-3 py-2 items-center'>
              <span className='text-main-brand text-3xl'>
                <TiPlus />
              </span>
              <span className='text-black-text font-bold text-xs md:text-base'>
                {t('Payment')}
              </span>
            </button>
            {activeIndex === 2 && (
              <div className='p-3 relative z-[999] bg-white-main max-w-[14rem] mt-2 rounded-lg'>
                <p>
                  {t(
                    'Wickle bargeldlose Zahlungen im Restaurant und online schnell und sicher ab'
                  )}
                </p>
              </div>
            )}
          </div>
          <div className='absolute top-[35%] md:top-[48%] md:left-[9%] '>
            <button
              onClick={() => handleClick(3)}
              className='flex gap-2 bg-white-main rounded-3xl px-3 py-2 items-center'>
              <span className='text-main-brand text-3xl'>
                <TiPlus />
              </span>
              <span className='text-black-text font-bold text-xs md:text-base'>
                {t('Kassensystem')}
              </span>
            </button>
            {activeIndex === 3 && (
              <div className='p-3 relative z-[999] bg-white-main max-w-[14rem] mt-2 rounded-lg'>
                <p>
                  {t(
                    'Verwalte alle Bestellkanäle direkt in der Kasse - egal ob Lieferportal-, Theken- oder Webshop-Bestellung'
                  )}
                </p>
              </div>
            )}
          </div>
          <div className='absolute top-[35%] md:top-[57%] left-[60%] md:left-[55%] '>
            <button
              onClick={() => handleClick(4)}
              className='flex gap-2 bg-white-main rounded-3xl px-3 py-2 items-center'>
              <span className='text-main-brand text-3xl'>
                <TiPlus />
              </span>
              <span className='text-black-text font-bold text-xs md:text-base'>
                Webshop & App
              </span>
            </button>
            {activeIndex === 4 && (
              <div className='p-3 relative z-[999] bg-white-main max-w-[14rem] mt-2 rounded-lg'>
                <p>
                  {t(
                    'Nimm Bestellungen schneller entgegen und übertrage Bestellungen automatisch an die Küche'
                  )}
                </p>
              </div>
            )}
          </div>
          <div className='absolute top-[60%] md:top-[45%] left-[60%] md:left-[70%] '>
            <button
              onClick={() => handleClick(6)}
              className='flex gap-2 bg-white-main rounded-3xl px-3 py-2 items-center'>
              <span className='text-main-brand text-3xl'>
                <TiPlus />
              </span>
              <span className='text-black-text font-bold text-xs md:text-base'>
                QR-Code
              </span>
            </button>
            {activeIndex === 6 && (
              <div className='p-3 relative z-[999] bg-white-main max-w-[14rem] mt-2 rounded-lg'>
                <p>
                  {t(
                    'Biete Gästen die Möglichkeit, kontaktlos über QR-Codes zu bestellen und bezahlen'
                  )}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default OneSystem;
