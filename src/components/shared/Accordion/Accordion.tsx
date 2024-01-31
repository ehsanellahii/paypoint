'use client';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import { GoChevronRight, GoChevronDown } from 'react-icons/go';

const Accordion = ({
  accordionList,
  arrowColor,
}: {
  arrowColor: string;
  accordionList: any;
}) => {
  const t = useTranslations('Common');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const handleAccordionClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className='w-full h-full'>
      {accordionList?.map((item: any, index: number) => (
        <div
          key={index}
          className={`w-full border-b-[.1px] py-4 border-grey-text ${
            index === 0 && 'border-t-[.1px]'
          }`}>
          <div
            className='w-full h-full flex justify-between font-bold text-xl px-4 text-black-text'
            onClick={() => handleAccordionClick(index)}
            style={{ cursor: 'pointer' }}>
            <h1 className=''>{t(item.title)}</h1>
            <span className={arrowColor}>
              {activeIndex === index ? <GoChevronDown /> : <GoChevronRight />}
            </span>
          </div>
          {activeIndex === index && (
            <div className='px-4 py-4'>
              {item.contentParts.map((part: any, partIndex: any) => (
                <span key={partIndex} className={part.bold ? 'font-bold px-1' : ''}>
                  {t(part.text)}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
