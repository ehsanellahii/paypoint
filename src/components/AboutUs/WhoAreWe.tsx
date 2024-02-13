import React from 'react';
import Wrapper from '../shared/Wrapper';
import Image from 'next/image';
import { StaticData } from '@/constants/Static';
import Heading from '../shared/Heading/Heading';
import { useTranslations } from 'next-intl';
import ToContactUsButton from './ToContactusButton';

type TeamMemberProps = {
  item: {
    image: string;
    name: string;
    designation: string;
    description: string;
  };
};

const TeamMemberCard = ({ item }: TeamMemberProps) => {
  const t = useTranslations('Aboutus');

  return (
    <div className='w-full h-full flex flex-col justify-center items-center py-4'>
      <Image
        src={item.image}
        alt={item.name}
        width={150}
        height={150}
        className='rounded-full object-cover'
      />
      <h1 className='font-bold capitalize'>{item.name}</h1>
      <p className='text-grey-text '>{t(item.designation)}</p>
      <p className='mt-2 max-w-[80%] mx-auto text-center'>{t(item.description)}</p>
    </div>
  );
};

const WhoAreWe = () => {
  const t = useTranslations('Aboutus');
  return (
    <Wrapper style='w-full h-full bg-white-lightOrange py-8 md:py-12'>
      <article className='w-full h-full flex flex-col gap-4'>
        <Heading text={t('Wer wir sind?')} />
        <p className='text-center text-xl text-black-text md:max-w-[60%] mx-auto '>
          {t('Ein Team von begeisterten Unternehmern und Software Freaks')}
          <br /> {t('Unabhängig von anderen Unternehmen oder technischen Vorgaben')}
        </p>
        <div className='w-full h-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
          {StaticData.AboutUs.TeamMembers.map((itm, idx) => (
            <TeamMemberCard key={idx} item={itm} />
          ))}
        </div>
      </article>
      <div className='w-full h-full flex flex-col gap-4  md:py-10 md:px-10 md:max-w-[50%] mx-auto'>
        <div className='w-full h-[12rem] relative'>
          <Image
            src='/Assets/AboutUs/person.png'
            alt='Work better together.'
            fill
            className='object-contain'
          />
        </div>
        <h2 className='font-semibold text-xl md:text-3xl text-center'>{t('Und Du…?')}</h2>
        <h5 className='font-semibold text-xl md:text-3xl text-center'>
          {t('Wir suchen kluge Köpfe')}
        </h5>
        <p className=' text-lg md:text-2xl font-medium text-center px-4'>
          {t(
            'Was wäre eine ständig wachsende Firma ohne Zuwachs? Wenn Du eine neue Herausforderung suchst, können wir Dir vielleicht helfen'
          )}
        </p>
        <ToContactUsButton />
      </div>
    </Wrapper>
  );
};

export default WhoAreWe;
