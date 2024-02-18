import { ContactTabsType } from '@/interface/Common';
import React, { useState } from 'react';
import TabsWrapper from '../TabsWrapper';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();
import Select from 'react-select';

const NeedHardware = ({ steps, formRef, uiRefresh, formKey }: ContactTabsType) => {
  const handleBackward = () => {
    uiRefresh((prev) => prev - 1);
    steps.current -= 1;
  };
  const handleForward = () => {
    uiRefresh((prev) => prev + 1);
    steps.current += 1;
  };
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  return (
    <TabsWrapper
      handleBackward={handleBackward}
      handleForward={handleForward}
      title=' What type of business do you need a POS system for ?'>
      <h6>If you don&rsquo;t need any hardware, you can skip this question.</h6>
      <Select
        value={selectedOptions}
        onChange={(value: any) => setSelectedOptions(value)}
        isMulti
        options={[
          { value: 'checkout', label: 'Checkout' },
          { label: 'Cash drawer', value: 'cash-drawer' },
          { label: 'Receipt Printer', value: 'receipt-printer' },
          { label: 'Scanner', value: 'scanner' },
        ]}
      />
    </TabsWrapper>
  );
};

export default NeedHardware;
