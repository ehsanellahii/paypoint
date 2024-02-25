import { useTranslations } from 'next-intl';
import React from 'react';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io';

interface TryForFreeFooterProps {
  showBackBtn?: boolean;
  showFurtherBtn?: boolean;
  backward?: () => void;
  forward?: () => void;
  forwardBtnText?: string;
  backBtnText?: string;
}
const TryForFreeFooter = ({
  showBackBtn = true,
  showFurtherBtn = true,
  backward,
  forward,
  forwardBtnText = "Further",
  backBtnText="Back",
}: TryForFreeFooterProps) => {
  const t = useTranslations('TryForFree');

  return (
    <div className='bg-primaryDark p-4 flex items-center rounded-b-2xl'>
      {showBackBtn && (
        <div className='w-full h-full flex justify-start'>
          <button
            onClick={backward}
            className='md:text-lg flex items-center gap-1 border-[2px] md:border-none rounded-lg text-white hover:scale-110 transition-all duration-100 ease-in-out'>
            <IoMdArrowRoundBack size={30} />
            <p className='hidden md:block text-xl'> {t(backBtnText)}</p>
          </button>
        </div>
      )}
      {showFurtherBtn && (
        <div className='w-full h-full flex justify-end'>
          <button
            onClick={forward}
            className='md:text-lg flex items-center gap-1 border-[2px] md:border-none rounded-lg border-white p-2  text-white hover:scale-110 transition-all duration-100 ease-in-out'>
            <p className='hidden md:block text-xl'>{t(forwardBtnText)}</p>
            <IoMdArrowRoundForward size={30} />
          </button>
        </div>
      )}
    </div>
  );
};

export default TryForFreeFooter;
