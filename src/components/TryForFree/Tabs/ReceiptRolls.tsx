import React, { useState } from 'react';
import TabsWrapper from '../TabsWrapper';
import { ContactTabsType } from '@/interface/Common';
import { Radio, RadioGroup } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

const ReceiptRolls = ({ steps, formRef, uiRefresh, formKey }: ContactTabsType) => {
  const t = useTranslations('TryForFree');
  const [, subRefresh] = useState(-1);
  const [showError, setShowError] = useState(false);
  React.useEffect(() => {
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
      tabType='freeSelect'
      showError={showError}
      title='Would you like to save on receipt rolls and offer a digital receipt solution using a QR code?'>
      <p>
        {t(
          'Regardless of whether your customer asks for it, you are obliged to issue a receipt With the digital form, you can fulfill this obligation in a paperless, tax office-compliant and environmentally friendly manner'
        )}
      </p>
      <RadioGroup
        value={formRef.current[formKey]}
        onValueChange={(value) => {
          formRef.current[formKey] = value;
          subRefresh(Date.now());
        }}>
        <Radio value='Yes'>{t('Yes')}</Radio>
        <Radio value='No'>{t('No')}</Radio>
      </RadioGroup>
    </TabsWrapper>
  );
};

export default ReceiptRolls;
