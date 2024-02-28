'use client';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import { GoChevronRight, GoChevronDown } from 'react-icons/go';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Accordion = ({
  accordionList,
  arrowColor,
}: {
  arrowColor?: string;
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
        <div key={index} className={`w-full border-b-[.15rem] py-4 border-black-main `}>
          <div
            className='w-full h-full flex justify-between font-bold text-xl  text-black-text'
            onClick={() => handleAccordionClick(index)}
            style={{ cursor: 'pointer' }}>
            <div className='flex '>
              <p className='text-primaryDark mr-1'>{index + 1}.</p>
              <h1 className=''>{t(item.title)}</h1>
            </div>

            <span className={`${arrowColor} text-primaryDark`}>
              {activeIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </span>
          </div>
          {activeIndex === index && (
            <div className='py-4 leading-[1.5rem] text-[1.2rem]'>
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
