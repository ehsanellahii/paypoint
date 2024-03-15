import React from 'react';
import { FaFacebook, FaFacebookMessenger, FaTelegram } from 'react-icons/fa';
import Wrapper from '../shared/Wrapper';
import Image from 'next/image';
import { Button } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

const SocialContacts = () => {
  const t = useTranslations('Contactus');
  return (
    <Wrapper>
      <div className='flex flex-wrap gap-8 py-10 justify-center'>
        <div
          className={`w-[13rem] h-full rounded-2xl flex flex-col justify-center items-center bg-[#25D366] px-6 py-4`}>
          <div className='w-[7.5rem] h-[7.5rem] relative'>
            <Image fill src='/Assets/ContactUs/whatsapp.png' alt='Paypoint Whatsapp' />
          </div>
          <div className='w-full space-y-2 flex flex-col items-center'>
            <h2 className='text-white text-xl font-semibold text-center'>Whatsapp</h2>
            <a
              href={'https://wa.me/03045023722'}
              target='_blank'
              className={`rounded-3xl bg-white text-black-main font-semibold text-xl px-[3rem] py-1`}>
              Kontakt
            </a>
          </div>
        </div>
        <div
          className={`w-[13rem] h-full rounded-2xl flex flex-col justify-center items-center bg-white py-4`}>
          <div className='w-[8rem] h-[7.5rem] relative'>
            <Image
              fill
              src='/Assets/ContactUs/paypoint.jpeg'
              alt='Paypoint Customer Support Number'
            />
          </div>
          <div className='w-full space-y-2 flex flex-col items-center'>
            <h2 className='text-black-main text-xl font-semibold text-center'>
              Customer Support
            </h2>
            <a
              href={'tel:03045023722'}
              target='_blank'
              className={`rounded-3xl bg-black-main text-white font-semibold text-base px-[1.5rem] py-2`}>
              030/45023722
            </a>
          </div>
        </div>
        <div
          className={`w-[13rem] h-full rounded-2xl flex flex-col justify-center items-center bg-primaryDark px-6 py-4`}>
          <div className='w-[7.5rem] h-[7.5rem] relative'>
            <Image fill src='/Assets/ContactUs/mail.png' alt='Paypoint E-Mail Support' />
          </div>
          <div className='w-full space-y-2 flex flex-col items-center'>
            <h2 className='text-white text-xl font-semibold text-center'>
              E-Mail Support
            </h2>
            <a
              href='mailto:info@get-paypoint.de'
              target='_blank'
              className={`rounded-3xl bg-white text-black-main whitespace-nowrap font-semibold text-sm px-[1em] py-2`}>
              info@get-paypoint.de
            </a>
          </div>
        </div>
      </div>
      <div className='w-full h-full grid md:grid-cols-2 gap-16'>
        <div className='flex flex-col gap-3 py-10 px-4'>
          <h4 className='text-2xl font-semibold'>{t('Kontakt')}</h4>
          <h1 className='font-bold text-[3rem] md:text-[4rem] leading-[4rem] max-w-[80%]'>
            {t('Brauchst du eine Beratung?')}
          </h1>
          <p className='text-xl'>
            {t(
              'Füll den Online-Fragebogen aus für ein maßgeschneidertes Kassensystem-Angebot'
            )}
          </p>
          <div className='w-full flex justify-center'>
            <Button className='bg-primaryDark text-white  text-lg md:text-xl rounded-[4rem] font-bold p-6'>
              {t('Zum Onlineformular')}
            </Button>
          </div>
          <div className='flex gap-2 items-center justify-start'>
            <FaFacebook size={25} />
            <FaFacebookMessenger size={25} />
            <FaTelegram size={25} />
          </div>
        </div>
        <div className='w-full h-full relative'>
          <Image
            src='/Assets/ContactUs/person.png'
            alt=''
            className='w-full h-full '
            fill
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default SocialContacts;
