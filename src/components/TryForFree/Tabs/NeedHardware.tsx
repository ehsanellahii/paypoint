import { ContactTabsType } from '@/interface/Common';
import React from 'react';
import { Select, SelectItem } from '@nextui-org/react';
import TabsWrapper from '../TabsWrapper';

const NeedHardware = ({ steps, formRef, uiRefresh, formKey }: ContactTabsType) => {
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
      <h6>If you don&rsquo;t need any hardware, you can skip this question.</h6>
      <Select placeholder='-- Select --' className='w-full' selectionMode='multiple'>
        {['Checkout', 'Cash drawer', 'Receipt Printer', 'Scanner'].map((item) => (
          <SelectItem key={item} value={item}>
            {item}
          </SelectItem>
        ))}
      </Select>
    </TabsWrapper>
  );
};

export default NeedHardware;
