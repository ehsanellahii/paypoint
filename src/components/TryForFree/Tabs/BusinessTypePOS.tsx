import { StaticData } from '@/constants/Static';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import TabsWrapper from '../TabsWrapper';
import { ContactTabsType } from '@/interface/Common';
import { useTranslations } from 'next-intl';

interface OptionProps {
  title: string;
  img: string;
  active: boolean;
  handleSelected: (value: string) => void;
}

const Option = ({ title, img, active, handleSelected }: OptionProps) => {
  const t = useTranslations('TryForFree');

  return (
    <div
      onClick={() => handleSelected(title)}
      className={`flex items-center   justify-center flex-col gap-2 p-4 cursor-pointer relative ${
        active ? 'border-primary scale-105 overflow-hidden border-2' : ''
      }`}>
      <div className='w-[13rem] h-[10rem] relative hover:scale-105 transition-all duration-75 ease-linear'>
        <Image src={img} alt={title} fill />
      </div>
      <h1 className='capitalize font-medium'>{t(title)}</h1>
    </div>
  );
};

const BusinessTypePOS = ({ steps, formRef, uiRefresh, formKey }: ContactTabsType) => {
  const [, subRefresh] = useState(-1);
  const [showError, setShowError] = useState(false);
  useEffect(() => {
    if (showError) {
      setTimeout(() => setShowError(false), 1000);
    }
  }, [showError]);
  const handleForward = () => {
    if (formRef.current[formKey] !== '' && formRef.current[formKey] !== undefined) {
      uiRefresh(Date.now());
      steps.current += 1;
    } else {
      setShowError(true);
    }
  };
  return (
    <TabsWrapper
      handleForward={handleForward}
      showBackBtn={false}
      required
      tabType='freeSelect'
      showError={showError}
      title='What type of business do you need a POS system for ?'>
      <div className='w-full grid md:grid-cols-2 lg:grid-cols-3 place-items-center gap-4'>
        {StaticData.Contact.BusinessOptions.map((itm, idx) => (
          <Option
            key={idx}
            active={itm.title === formRef.current[formKey] ? true : false}
            img={itm.image}
            title={itm.title}
            handleSelected={(val) => {
              formRef.current[formKey] = val;
              uiRefresh(Date.now());
              setTimeout(() => handleForward(), 500);
            }}
          />
        ))}
      </div>
    </TabsWrapper>
  );
};

export default BusinessTypePOS;
