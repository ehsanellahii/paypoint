import { ContactTabsType } from '@/interface/Common';
import React, { useEffect, useState } from 'react';
import TabsWrapper from '../TabsWrapper';
import makeAnimated from 'react-select/animated';
import { useTranslations } from 'next-intl';
import { Input, Radio, RadioGroup } from '@nextui-org/react';

const CustomerSeats = ({ steps, formRef, uiRefresh, formKey }: ContactTabsType) => {
  const t = useTranslations('TryForFree');
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
      showError={showError}
      tabType='freeInput'
      title='How many customer seats do you have in your premises?'>
      <Input
        isClearable
        type='text'
        labelPlacement='outside'
        value={formRef.current[formKey]}
        onValueChange={(e) => {
          formRef.current[formKey] = e;
          subRefresh(Date.now());
        }}
      />
      {/* <RadioGroup
        value={formRef.current[formKey]}
        onValueChange={(value) => {
          formRef.current[formKey] = value;
          subRefresh(Date.now());
        }}>
        <Radio value='1-10 Seats'>{t('1-10 seats')}</Radio>
        <Radio value='0-50 Seats'>{t('0-50 seats')}</Radio>
        <Radio value='More than 50 Seats'>{t('more than 50 seats')}</Radio>
        <Radio value='None'>{t('no')}</Radio>
      </RadioGroup> */}
    </TabsWrapper>
  );
};

export default CustomerSeats;
