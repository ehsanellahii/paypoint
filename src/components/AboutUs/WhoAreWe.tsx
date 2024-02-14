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
    <div className='w-full h-full max-w-[25rem] flex flex-col justify-center items-center py-4'>
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
        <div className='w-full h-full flex flex-wrap items-center justify-center'>
          {StaticData.AboutUs.TeamMembers.map((itm, idx) => (
            <TeamMemberCard key={idx} item={itm} />
          ))}
        </div>
      </article>
    </Wrapper>
  );
};

export default WhoAreWe;
