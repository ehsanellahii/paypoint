import Wrapper from '@/components/shared/Wrapper';
import React from 'react';

interface IHowItWorksProps {
  title: string;
  about: string;
  steps: Array<Array<{ text: string; bold?: boolean }>>;
}
interface IStepsProps {
  stepNumber: number;
  step: { text: string; bold?: boolean }[];
}

const Step: React.FC<IStepsProps> = ({ stepNumber, step }) => {
  return (
    <div
      className='h-full inline-flex items-center p-4 rounded-lg px-4'
      style={{
        boxShadow: '0px 3px 36px 0px rgba(0, 0, 0, 0.05)',
      }}>
      <span className='text-primaryDark pr-[0.3rem] font-medium'>{stepNumber}.</span>
      {step.map((itm, idx) => (
        <span
          key={idx}
          className={`${itm.bold ? 'font-bold' : ''} ${idx === 0 ? 'pr-1' : idx === step.length - 1 ? 'pl-1' : 'px-1'}`}>
          {itm.text}
        </span>
      ))}
    </div>
  );
};

const HowItWorks: React.FC<IHowItWorksProps> = ({ title, about, steps }) => {
  return (
    <Wrapper style='pb-8 bg-white'>
      <div className='w-full grid md:grid-cols-2 place-items-center gap-8 lg:gap-12'>
        <div className='h-full flex flex-col gap-4'>
          {steps.map((itm, idx) => (
            <Step key={idx} stepNumber={idx + 1} step={itm} />
          ))}
        </div>
        <div className='w-full h-full flex flex-col justify-center items-end '>
          <div className='w-full h-full lg:max-w-[80%] space-y-3 flex flex-col justify-center'>
            <h1 className='text-[2.5rem] leading-[2.9rem] font-bold'>{title}</h1>
            <p className='text-xl font-medium'>{about}</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default HowItWorks;
