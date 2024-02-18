import React, { useState } from 'react';
import TabsWrapper from '../TabsWrapper';
import { Input } from '@nextui-org/react';
import { BiScan } from 'react-icons/bi';
import { ContactTabsType } from '@/interface/Common';

const ScanIcon = () => {
  return (
    <div className='rotate-90'>
      <BiScan />
    </div>
  );
};

const BusinessType = ({ steps, formRef, uiRefresh, formKey }: ContactTabsType) => {
  const [, subRefresh] = useState(-1);
  const handleForward = () => {
    if (formRef.current[formKey]) {
      uiRefresh((prev) => prev + 1);
      steps.current += 1;
    } else {
      alert('Please select a business type');
    }
  };
  const handleBackward = () => {
    uiRefresh((prev) => prev - 1);
    steps.current -= 1;
  };
  return (
    <TabsWrapper
      handleForward={handleForward}
      handleBackward={handleBackward}
      required
      title='What type of business is this?'>
      <Input
        isClearable
        type='email'
        labelPlacement='outside'
        startContent={<ScanIcon />}
        value={formRef.current[formKey]}
        onValueChange={(e) => {
          formRef.current[formKey] = e;
          subRefresh(Date.now());
        }}
        classNames={{
          inputWrapper: '',
          input: 'bg-transparent',
        }}
      />
    
    </TabsWrapper>
  );
};

export default BusinessType;
