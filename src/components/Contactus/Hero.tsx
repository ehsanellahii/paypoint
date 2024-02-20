import { Button } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';

const Heading = ({ text }: { text: string }) => {
  return <h1 className='font-bold text-3xl text-[4rem] leading-[3.5rem]'>{text}</h1>;
};
const Hero = () => {
  const t = useTranslations('Contactus');

  return (
    <div className='w-full h-full relative bg-primaryDark'>
      <div className='w-full grid md:grid-cols-2 max-w-[1600px] mx-auto'>
        <div className='py-10 text-white space-y-4 px-4 md:px-8 '>
          <Heading text={t('Wir sind für Sie da')} />
          <p className='lg:max-w-[84%] text-xl'>
            {t(
              'Via Whatsapp, Online Chat oder über E-Mail Gerne Rufen wir Sie auch kostenlos zurück'
            )}
          </p>
          {/* <Button className='bg-white text-wrap font-semibold rounded-3xl py-6 text-black-main text-lg'>
            {t('Alle Kontaktmöglichkeiten sehen Jetzt runterscrollen')}
          </Button> */}
        </div>
        <div className='w-full h-full'>
          <div className='relative w-full h-full'>
            <Image
              src='/Assets/ContactUs/hero.jpeg'
              alt=''
              fill
              className='w-full h-full '
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
