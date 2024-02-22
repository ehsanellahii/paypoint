import React, { useEffect, useState } from 'react';
import TabsWrapper from '../TabsWrapper';
import { Checkbox, Input } from '@nextui-org/react';
import { MdOutlineEmail } from 'react-icons/md';
import { ContactTabsType } from '@/interface/Common';
import { useTranslations } from 'next-intl';

interface SubmitTabType extends ContactTabsType {
  handleSubmit: () => void;
}

const DataProtectionTab = ({
  handleSubmit,
  steps,
  formRef,
  uiRefresh,
  formKey,
}: SubmitTabType) => {
  const t = useTranslations('TryForFree');
  const [showError, setShowError] = useState(false);
  useEffect(() => {
    if (showError) {
      setTimeout(() => setShowError(false), 1000);
    }
  }, [showError]);
  const handleForward = () => {
    if (formRef.current[formKey] !== '' && formRef.current[formKey] !== undefined) {
      handleSubmit();
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
      handleBackward={handleBackward}
      handleForward={handleForward}
      title='Data protection'
      required
      errorMessage='Please accept our terms and conditions so that we can process your request'
      showError={showError}>
      <p>
        {t(
          'I agree that the data I have sent will be processed for the purpose of processing my request in accordance with the'
        )}
        <a href='#/' className='underline ml-2'>
          {t('data protection declaration')}
        </a>
      </p>
      <Checkbox
        isSelected={formRef.current[formKey]}
        onValueChange={(value) => {
          formRef.current[formKey] = value;
          uiRefresh(Date.now());
        }}>
        {t('I agree')}
      </Checkbox>
    </TabsWrapper>
  );
};

export default DataProtectionTab;
