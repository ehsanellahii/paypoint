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
}: {
  children: React.ReactNode;
  title: string;
  required?: boolean;
  handleForward?: () => void;
  handleBackward?: () => void;
  showBackBtn?: boolean;
  showForwardBtn?: boolean;
}) => {
  const t = useTranslations('TryForFree');
  return (
    <section className='bg-white w-full h-full space-y-4  rounded-2xl'>
      <div className='px-2 sm:px-8 py-6 space-y-4'>
        <h1 className='text-xl font-medium '>
          {t(title)}
          {required && <span className='text-red-400'> *</span>}
        </h1>
        {children}
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
