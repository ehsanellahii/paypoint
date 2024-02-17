import { StaticData } from '@/constants/Static';
import Image from 'next/image';
import React, { useState } from 'react';
import ContactFooter from '../ContactFooter';
import TabsWrapper from '../TabsWrapper';
import { ContactTabsType } from '@/interface/Common';

interface OptionProps {
  title: string;
  img: string;
  active: boolean;
  handleSelected: (value: string) => void;
}

const Option = ({ title, img, active, handleSelected }: OptionProps) => {
  return (
    <div
      onClick={() => handleSelected(title)}
      className={`flex items-center   justify-center flex-col gap-2 p-4 cursor-pointer relative ${
        active ? 'border-primary scale-105 overflow-hidden border-2' : ''
      }`}>
      <div className='w-[13rem] h-[10rem] relative hover:scale-105 transition-all duration-75 ease-linear'>
        <Image src={img} alt={title} fill />
      </div>
      <h1 className='capitalize font-medium'>{title}</h1>
    </div>
  );
};

const BusinessTypePOS = ({ steps, formRef, uiRefresh, formKey }: ContactTabsType) => {
  const [, subRefresh] = useState(-1);
  const handleForward = () => {
    if (formRef.current[formKey] !== '' && formRef.current[formKey] !== undefined) {
      uiRefresh(Date.now());
      steps.current += 1;
    } else {
      alert('Please select a business type');
    }
  };
  return (
    <TabsWrapper
      handleForward={handleForward}
      showBackBtn={false}
      required
      title=' What type of business do you need a POS system for ?'>
      <div className='w-full grid grid-cols-3 gap-4'>
      {StaticData.Contact.BusinessOptions.map((itm, idx) => (
        <Option
          key={idx}
          active={itm.title === formRef.current[formKey] ? true : false}
          img={itm.image}
          title={itm.title}
          handleSelected={(val) => {
            formRef.current[formKey] = val;
            uiRefresh(Date.now());
          }}
        />
      ))}
      </div>
    </TabsWrapper>
  );
};

export default BusinessTypePOS;
