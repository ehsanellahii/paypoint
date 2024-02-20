import { ContactTabsType } from '@/interface/Common';
import React, { useState } from 'react';
import TabsWrapper from '../TabsWrapper';
import makeAnimated from 'react-select/animated';
import { useTranslations } from 'next-intl';
import { Radio, RadioGroup } from '@nextui-org/react';

const ServingTables = ({ steps, formRef, uiRefresh, formKey }: ContactTabsType) => {
  const t = useTranslations('TryForFree');
  const [, subRefresh] = useState(-1);

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
      handleForward={handleForward}
      handleBackward={handleBackward}
      required
      title='How many tables do you host?'>
      <RadioGroup
        value={formRef.current[formKey]}
        onValueChange={(value) => {
          formRef.current[formKey] = value;
          subRefresh(Date.now());
        }}>
        <Radio value='1-10 Tables'>{t('1-10 tables')}</Radio>
        <Radio value='10-50 Tables'>{t('10-50 tables')}</Radio>
        <Radio value='More than 50 tables'>{t('10-50 tables')}</Radio>
        <Radio value='None'>{t('no')}</Radio>
      </RadioGroup>
    </TabsWrapper>
  );
};

export default ServingTables;
