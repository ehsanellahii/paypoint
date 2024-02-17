import React, { useState } from 'react';
import TabsWrapper from '../TabsWrapper';
import { ContactTabsType } from '@/interface/Common';
import { Radio, RadioGroup } from '@nextui-org/react';

const ReceiptRolls = ({ steps, formRef, uiRefresh, formKey }: ContactTabsType) => {
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
      title='Would you like to save on receipt rolls and offer a digital receipt solution using a QR code?'>
      <p>
        Regardless of whether your customer asks for it, you are obliged to issue a
        receipt. With the digital form, you can fulfill this obligation in a paperless,
        tax office-compliant and environmentally friendly manner.
      </p>
      <RadioGroup
        value={formRef.current[formKey]}
        onValueChange={(value) => {
          formRef.current[formKey] = value;
          subRefresh(Date.now());
        }}>
        <Radio value='Yes'>Yes</Radio>
        <Radio value='No'>No</Radio>
      </RadioGroup>
    </TabsWrapper>
  );
};

export default ReceiptRolls;
