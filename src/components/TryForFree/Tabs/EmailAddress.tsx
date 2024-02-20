import React from 'react';
import TabsWrapper from '../TabsWrapper';
import { ContactTabsType } from '@/interface/Common';
import { Input } from '@nextui-org/react';
import { MdOutlineEmail } from 'react-icons/md';
import { useTranslations } from 'next-intl';

const EmailTab = ({ steps, formRef, uiRefresh, formKey }: ContactTabsType) => {
  const t = useTranslations('TryForFree');
  const [, subRefresh] = React.useState(-1);
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
      title='Email'>
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
