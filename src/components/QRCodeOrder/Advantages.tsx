import React from 'react';
import Wrapper from '../shared/Wrapper';
import Image from 'next/image';
import { Link } from '@/navigation';
import { StaticData } from '@/constants/Static';

type AdvantageType = {
  image: string;
  title: string;
  about: string;
  learnMoreUrl: string;
};
interface AdvantagesProps {
  advantages: AdvantageType[];
}

const AdvantagesCard: React.FC<AdvantageType> = ({
  image,
  title,
  about,
  learnMoreUrl,
}) => {
  return (
    <div className='w-full max-w-[30rem] h-full flex flex-col gap-8 items-center text-white px-4'>
      <div className='w-[4rem] h-[4.7rem] relative'>
        <Image src={image} alt={title} className='w-full h-full object-contain' fill />
      </div>
      <h1 className='text-center text-2xl font-bold'>{title}</h1>
      <p className='text-center font-medium'>{about}</p>
      <Link
        href={learnMoreUrl}
        className='space-x-4 underline flex items-center gap-2 decoration-white'>
        Learn More
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='16'
          height='16'
          viewBox='0 0 16 16'
          fill='none'>
          <path
            d='M11.8461 8.2172L6.1524 13.9108C5.8778 14.1854 5.4326 14.1854 5.15803 13.9108L4.49396 13.2468C4.21983 12.9726 4.2193 12.5284 4.49279 12.2536L9.00512 7.72L4.49279 3.18646C4.2193 2.91168 4.21983 2.46739 4.49396 2.19326L5.15803 1.52919C5.43263 1.25459 5.87783 1.25459 6.1524 1.52919L11.846 7.22283C12.1206 7.4974 12.1206 7.9426 11.8461 8.2172Z'
            fill='#fff'
          />
        </svg>
      </Link>
    </div>
  );
};

const Advantages: React.FC<AdvantagesProps> = ({ advantages }) => {
  return (
    <Wrapper style='bg-primaryDark py-8'>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 place-items-center py-8 px-4'>
        {advantages.map((feature, idx) => (
          <AdvantagesCard
            key={idx}
            image={feature.image}
            title={feature.title}
            about={feature.about}
            learnMoreUrl={feature.learnMoreUrl}
          />
        ))}
      </div>
    </Wrapper>
  );
};

export default Advantages;
