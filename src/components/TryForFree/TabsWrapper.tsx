import React from 'react';
import ContactFooter from './ContactFooter';

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
  return (
    <section className='bg-white w-full h-full space-y-4  rounded-2xl'>
      <div className='px-8 py-6 space-y-4'>
        <h1 className='text-xl font-medium '>
          {title}
          {required && <span className='text-red-400'> *</span>}
        </h1>
        {children}
      </div>
      <ContactFooter
        forward={handleForward}
        backward={handleBackward}
        showFurtherBtn={showForwardBtn}
        showBackBtn={showBackBtn}
      />
    </section>
  );
};

export default TabsWrapper;
