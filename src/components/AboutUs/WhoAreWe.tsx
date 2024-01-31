import React from 'react';
import Wrapper from '../shared/Wrapper';
import Image from 'next/image';
import { FaLinkedin } from 'react-icons/fa';
import { StaticData } from '@/constants/Static';
import { Link } from '@/navigation';
import Heading from '../shared/Heading/Heading';

type TeamMemberProps = {
  item: {
    image: string;
    name: string;
    designation: string;
    linkedinProfileUrl: string;
  };
};

const TeamMemberCard = ({ item }: TeamMemberProps) => {
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
      <p>{item.designation}</p>
      <Link href={item.linkedinProfileUrl} className='text-[#0a66c2] text-xl'>
        <FaLinkedin />
      </Link>
    </div>
  );
};

const WhoAreWe = () => {
  return (
    <Wrapper style='w-full h-full bg-white-lightOrange py-8 md:py-12'>
      <article className='w-full h-full flex flex-col gap-4'>
        <Heading text='Wer wir sind?' />
        <p className='text-center text-xl text-black-text md:max-w-[60%] mx-auto '>
          Ein Team von begeisterten Unternehmern und Software Freaks.
          <br /> Unabhängig von anderen Unternehmen oder technischen Vorgaben.
        </p>
        <div className='w-full h-full grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center'>
          {StaticData.AboutUs.TeamMembers.map((itm, idx) => (
            <TeamMemberCard key={idx} item={itm} />
          ))}
        </div>
      </article>
      <div className='w-full h-full md:flex  md:py-10 md:px-10'>
        <div className='w-full h-[20rem] relative'>
          <Image
            src='/Assets/AboutUs/Motto.svg'
            alt='Work better together.'
            fill
            className='object-contain'
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default WhoAreWe;
