import React from 'react';
import TryForFreeFooter from './TryForFreeFooter';
import { useTranslations } from 'next-intl';

const TabsWrapper = ({
  children,
  title,
  required,
  handleBackward,
  handleForward,
  showBackBtn,
  showForwardBtn,
  tabType,
  showError,
  errorMessage,
}: {
  children: React.ReactNode;
  title: string;
  required?: boolean;
  handleForward?: () => void;
  handleBackward?: () => void;
  showBackBtn?: boolean;
  showForwardBtn?: boolean;
  tabType?: 'freeInput' | 'freeSelect';
  showError?: boolean;
  errorMessage?: string;
}) => {
  const t = useTranslations('TryForFree');

  return (
    <section className='bg-white w-full h-full space-y-4  rounded-2xl'>
      <div className='w-full px-2 sm:px-8 pt-6 pb-2 space-y-4'>
        <h1 className='text-xl px-4 md:px-0 font-medium '>
          {t(title)}
          {required && <span className='text-red-400'> *</span>}
        </h1>
        {children}
        <div className='w-full h-[3rem] flex justify-center'>
          {showError && (
            <div className='bg-red-500 text-white inline-flex items-center p-4 text-center error_animation'>
              {errorMessage
                ? t(errorMessage)
                : tabType && tabType === 'freeInput'
                ? `${t('Please fill out all fields')}`
                : `${t('Please make selection')}`}
              .
            </div>
          )}
        </div>
      </div>
      <TryForFreeFooter
        forward={handleForward}
        backward={handleBackward}
        showFurtherBtn={showForwardBtn}
        showBackBtn={showBackBtn}
      />
    </section>
  );
};

export default TabsWrapper;
