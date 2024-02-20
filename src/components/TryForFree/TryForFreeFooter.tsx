import { useTranslations } from 'next-intl';
import React from 'react';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io';

interface TryForFreeFooterProps {
  showBackBtn?: boolean;
  showFurtherBtn?: boolean;
  backward?: () => void;
  forward?: () => void;
}
const TryForFreeFooter = ({
  showBackBtn = true,
  showFurtherBtn = true,
  backward,
  forward,
}: TryForFreeFooterProps) => {
  const t = useTranslations('TryForFree');

  return (
    <div className='bg-primaryDark p-4 flex items-center rounded-b-2xl'>
      {showBackBtn && (
        <div className='w-full h-full flex justify-start'>
          <button
            onClick={backward}
            className='md:text-lg flex items-center gap-2 text-white hover:scale-110 transition-all duration-100 ease-in-out'>
            <IoMdArrowRoundBack />
            {t('Back')}
          </button>
        </div>
      )}
      {showFurtherBtn && (
        <div className='w-full h-full flex justify-end'>
          <button
            onClick={forward}
            className='md:text-lg flex items-center gap-2 text-white hover:scale-110 transition-all duration-100 ease-in-out'>
            {t('Further')}
            <IoMdArrowRoundForward />
          </button>
        </div>
      )}
    </div>
  );
};

export default TryForFreeFooter;
