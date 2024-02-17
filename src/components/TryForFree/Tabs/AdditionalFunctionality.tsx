import { ContactTabsType } from '@/interface/Common';
import React from 'react';
import TabsWrapper from '../TabsWrapper';
import { Select, SelectItem } from '@nextui-org/react';

const AdditionalFunctionality = ({
  steps,
  formRef,
  uiRefresh,
  formKey,
}: ContactTabsType) => {
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
      title=' What type of business do you need a POS system for ?'>
      <h6>
        If you don&rsquo;t need any additional functions, you can skip this question.
      </h6>
      <Select placeholder='-- Select --' className='w-full' selectionMode='multiple'>
        {['Time Tracking', 'DATEV connection', 'Lexware connection'].map((item) => (
          <SelectItem key={item} value={item}>
            {item}
          </SelectItem>
        ))}
      </Select>
    </TabsWrapper>
  );
};

export default AdditionalFunctionality;
