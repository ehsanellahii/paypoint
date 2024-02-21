import { ContactTabsType } from '@/interface/Common';
import React, { useEffect, useState } from 'react';
import TabsWrapper from '../TabsWrapper';
import makeAnimated from 'react-select/animated';
import { useTranslations } from 'next-intl';
import { Radio, RadioGroup } from '@nextui-org/react';

const ConsultationTables = ({ steps, formRef, uiRefresh, formKey }: ContactTabsType) => {
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
      tabType='freeSelect'
      title='How many consultation tables do you host?'>
      <RadioGroup
        value={formRef.current[formKey]}
        onValueChange={(value) => {
          formRef.current[formKey] = value;
          subRefresh(Date.now());
        }}>
        <Radio value='1-10 Tables'>{t('1-10 tables')}</Radio>
        <Radio value='More than 10 tables'>{t('More than 10 tables')}</Radio>
        <Radio value='None'>{t('no')}</Radio>
      </RadioGroup>
    </TabsWrapper>
  );
};

export default ConsultationTables;
