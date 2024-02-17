import { Button } from '@nextui-org/react';
import React from 'react';

const SubmitSuccessTab = () => {
  return (
    <section className='bg-white w-full h-full pt-6 space-y-4  rounded-2xl py-10'>
      <div className='px-8 space-y-4'>
        <h1 className='text-xl font-medium text-center'>Thank you for your submission</h1>
        <p className=' text-center'>We will get back to you as soon as possible.</p>
        <div className='w-full flex justify-center'>
          <Button className='text-white bg-primary hover:bg-primaryDark'>
            + New Submission
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SubmitSuccessTab;
