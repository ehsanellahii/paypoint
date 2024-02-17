import React from 'react';
import TabsWrapper from '../TabsWrapper';
import { Checkbox, Input } from '@nextui-org/react';
import { MdOutlineEmail } from 'react-icons/md';
import { ContactTabsType } from '@/interface/Common';

const DataProtectionTab = ({ steps, formRef, uiRefresh, formKey }: ContactTabsType) => {
  const handleBackward = () => {
    uiRefresh((prev) => prev - 1);
    steps.current -= 1;
  };
  const handleForward = () => {
    uiRefresh((prev) => prev + 1);
    steps.current += 1;
  };
  return (
    <TabsWrapper
      handleBackward={handleBackward}
      handleForward={handleForward}
      title='Email  '>
      <p>
        I agree that the data I have sent will be processed for the purpose of processing
        my request in accordance with the
        <a href='#/' className='underline ml-2' >
          data protection declaration
        </a>
      </p>
      <Checkbox
        isSelected={formRef.current[formKey]}
        onValueChange={(value) => {
          formRef.current[formKey] = value;
          uiRefresh(Date.now());
        }}>
        I agree
      </Checkbox>
    </TabsWrapper>
  );
};

export default DataProtectionTab;
