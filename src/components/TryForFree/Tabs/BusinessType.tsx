import React, { useEffect, useState } from 'react';
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
  const handleBackward = () => {
    uiRefresh((prev) => prev - 1);
    steps.current -= 1;
  };
  return (
    <TabsWrapper
      handleForward={handleForward}
      handleBackward={handleBackward}
      required
      tabType='freeInput'
      showError={showError}
      title='What type of business is this?'>
      <Input
        isClearable
        type='text'
        labelPlacement='outside'
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
