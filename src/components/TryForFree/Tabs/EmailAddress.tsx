import React, { useState } from 'react';
import TabsWrapper from '../TabsWrapper';
import { ContactTabsType } from '@/interface/Common';
import { Input } from '@nextui-org/react';
import { MdOutlineEmail } from 'react-icons/md';
import { useTranslations } from 'next-intl';

const EmailTab = ({ steps, formRef, uiRefresh, formKey }: ContactTabsType) => {
  const t = useTranslations('TryForFree');
  const [, subRefresh] = React.useState(-1);
  const [showError, setShowError] = useState(false);
  const [showInValidError, setShowInValidError] = useState(false);
  React.useEffect(() => {
    if (showError) {
      setTimeout(() => setShowError(false), 1000);
    }
    if(showInValidError){
      setTimeout(() => setShowInValidError(false), 1000);
    }
  }, [showError,showInValidError]);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleForward = () => {
    const emailInput = formRef.current[formKey];
    if (emailInput && emailInput.trim() !== '') {
      if (isValidEmail(emailInput)) {
        uiRefresh(Date.now());
        steps.current += 1;
        setShowError(false);
      } else {
        setShowInValidError(true);
      }
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
      required
      tabType='freeInput'
      showError={showError}
      title='Email'
      errorMessage={showInValidError ? 'Please enter a valid email address' : 'Please fill out all fields'}
      >
      <p>
        {t(
          'Please let us know your email address so that we can send you your tailor-made offer'
        )}
      </p>
      <Input
        isClearable
        type='email'
        labelPlacement='outside'
        startContent={<MdOutlineEmail />}
        description={t('Email Address')}
        value={formRef.current[formKey]}
        onValueChange={(e) => {
          formRef.current[formKey] = e;
          subRefresh(Date.now());
        }}
      />
    </TabsWrapper>
  );
};

export default EmailTab;
