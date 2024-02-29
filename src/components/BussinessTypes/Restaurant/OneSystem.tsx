'use client';
import React, { useState } from 'react';
import Heading from '../../shared/Heading/Heading';
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
          className='w-full h-[50rem] md:h-[100rem] relative md:max-w-[80%] mx-auto'
          style={{
            backgroundImage: "url('/Assets/Restaurant/OneSystem.webp')",
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
          }}>
          <div className='absolute top-[10%] left-[12%] '>
            <button
              onClick={() => handleClick(1)}
              className='flex gap-2 bg-white rounded-xl md:rounded-[2rem] px-3 md:px-5 py-2 md:py-4 items-center transition duration-250'>
              <span className='text-main-brand text-3xl'>
                <TiPlus />
              </span>
              <span className='text-black-text font-bold'>{t('Küchenmanager')}</span>
            </button>
            {activeIndex === 1 && (
              <div className='p-3 relative z-[999] bg-white max-w-[14rem] mt-2 rounded-lg'>
                <p>
                  {t(
                    'Automatisiere deine Küchenprozesse und verwalte Bestellungen digital am Küchenmonitor'
                  )}
                </p>
              </div>
            )}
          </div>
          <div className='absolute top-[20%] left-[60%] '>
            <button
              onClick={() => handleClick(2)}
              className='flex gap-2 bg-white rounded-xl md:rounded-[2rem] px-3 md:px-5 py-2 md:py-4 items-center'>
              <span className='text-main-brand text-3xl'>
                <TiPlus />
              </span>
              <span className='text-black-text font-bold'>{t('Payment')}</span>
            </button>
            {activeIndex === 2 && (
              <div className='p-3 relative z-[999] bg-white max-w-[14rem] mt-2 rounded-lg'>
                <p>
                  {t(
                    'Wickle bargeldlose Zahlungen im Restaurant und online schnell und sicher ab'
                  )}
                </p>
              </div>
            )}
          </div>
          <div className='absolute top-[35%] left-[7%] '>
            <button
              onClick={() => handleClick(3)}
              className='flex gap-2 bg-white rounded-xl md:rounded-[2rem] px-3 md:px-5 py-2 md:py-4 items-center'>
              <span className='text-main-brand text-3xl'>
                <TiPlus />
              </span>
              <span className='text-black-text font-bold'>{t('Kassensystem')}</span>
            </button>
            {activeIndex === 3 && (
              <div className='p-3 relative z-[999] bg-white max-w-[14rem] mt-2 rounded-lg'>
                <p>
                  {t(
                    'Verwalte alle Bestellkanäle direkt in der Kasse - egal ob Lieferportal-, Theken- oder Webshop-Bestellung'
                  )}
                </p>
              </div>
            )}
          </div>
          <div className='absolute top-[45%] md:top-[40%] left-[60%] md:left-[70%] '>
            <button
              onClick={() => handleClick(4)}
              className='flex gap-2 bg-white rounded-xl md:rounded-[2rem] px-3 md:px-5 py-2 md:py-4 items-center'>
              <span className='text-main-brand text-3xl'>
                <TiPlus />
              </span>
              <span className='text-black-text font-bold'>{t('Mobile Kasse')}</span>
            </button>
            {activeIndex === 4 && (
              <div className='p-3 relative z-[999] bg-white max-w-[14rem] mt-2 rounded-lg'>
                <p>
                  {t(
                    'Nimm Bestellungen schneller entgegen und übertrage Bestellungen automatisch an die Küche'
                  )}
                </p>
              </div>
            )}
          </div>{' '}
          <div className='absolute top-[60%] left-[7%] md:left-[12%] '>
            <button
              onClick={() => handleClick(6)}
              className='flex gap-2 bg-white rounded-xl md:rounded-[2rem] px-3 md:px-5 py-2 md:py-4 items-center'>
              <span className='text-main-brand text-3xl'>
                <TiPlus />
              </span>
              <span className='text-black-text font-bold'>
                {t('QR-Code Tischbestellung')}
              </span>
            </button>
            {activeIndex === 6 && (
              <div className='p-3 relative z-[999] bg-white max-w-[14rem] mt-2 rounded-lg'>
                <p>
                  {t(
                    'Biete Gästen die Möglichkeit, kontaktlos über QR-Codes zu bestellen und bezahlen'
                  )}
                </p>
              </div>
            )}
          </div>
          <div className='absolute top-[78%] left-[50%] md:left-[60%] '>
            <button
              onClick={() => handleClick(5)}
              className='flex gap-2 bg-white rounded-xl md:rounded-[2rem] px-3 md:px-5 py-2 md:py-4   items-center'>
              <span className='text-main-brand text-3xl'>
                <TiPlus />
              </span>
              <span className='text-black-text font-bold'>{t('Bonussystem')}</span>
            </button>
            {activeIndex === 5 && (
              <div className='p-3 relative z-[999] bg-white max-w-[14rem] mt-2 rounded-lg'>
                <p>
                  {t(
                    'Schaffe Bestellanreize und binde Gäste langfristig an deinen Gastronomiebetrieb'
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
