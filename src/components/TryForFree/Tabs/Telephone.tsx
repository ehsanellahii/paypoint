import React, { useEffect, useState } from 'react';
import TabsWrapper from '../TabsWrapper';
import { ContactTabsType } from '@/interface/Common';
import { Input } from '@nextui-org/react';
import { SlScreenSmartphone } from 'react-icons/sl';
import { useTranslations } from 'next-intl';

const Telephone = ({ steps, formRef, uiRefresh, formKey }: ContactTabsType) => {
  const t = useTranslations('TryForFree');
  const [, subRefresh] = React.useState(-1);
  const [showError, setShowError] = useState(false);
  const [showInValidError, setShowInValidError] = useState(false);
  useEffect(() => {
    if (showError) {
      setTimeout(() => setShowError(false), 1000);
    }
    if (showInValidError) {
      setTimeout(() => setShowInValidError(false), 1000);
    }
  }, [showError, showInValidError]);
  const handleForward = () => {
    const telephoneInput = formRef.current[formKey];
    if (telephoneInput) {
      if (/^\d+$/.test(telephoneInput) || telephoneInput.length < 10) {
        setShowInValidError(true);
        return;
      }
      uiRefresh(Date.now());
      steps.current += 1;
      setShowInValidError(false);
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
      title='Telephone'
      required
      errorMessage={
        showInValidError
          ? 'Please enter a valid phone number'
          : 'Please fill out all fields'
      }
      tabType='freeInput'
      showError={showError || showInValidError}>
      <p>
        {t(
          'We know you have a lot to do We only need your telephone number in case we have any questions about your request Of course, you will not receive any annoying advertising calls from us'
        )}
      </p>
      <Input
        isClearable
        type='phone'
        labelPlacement='outside'
        startContent={<SlScreenSmartphone />}
        description={t('Telephone')}
        value={formRef.current[formKey]}
        onValueChange={(e) => {
          formRef.current[formKey] = e;
          subRefresh(Date.now());
        }}
      />
    </TabsWrapper>
  );
};

export default Telephone;
