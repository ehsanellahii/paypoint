import { Button } from '@nextui-org/react';
import React from 'react';
import { initialState } from '../TryForFree';
import { ContactTabsType } from '@/interface/Common';
import { useTranslations } from 'next-intl';

const SubmitSuccessTab = ({ formRef, uiRefresh, steps }: ContactTabsType) => {
  const t = useTranslations('TryForFree');
  const handleClick = () => {
    window.location.reload();
  };
  return (
    <section className='bg-white w-full h-full pt-6 space-y-4  rounded-2xl py-10'>
      <div className='px-8 space-y-4'>
        <h1 className='text-xl font-medium text-center'>
          {t('Thank You for Submission')}
        </h1>
        <p className=' text-center'>{t('We will get back to you as soon as possible')}</p>
        <div className='w-full flex justify-center'>
          <Button
            onClick={handleClick}
            className='text-white bg-primary hover:bg-primaryDark'>
            + {t('New Submission')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SubmitSuccessTab;
