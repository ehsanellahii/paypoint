import { ContactTabsType } from '@/interface/Common';
import React, { useState } from 'react';
import TabsWrapper from '../TabsWrapper';
import { Input } from '@nextui-org/react';
import { LuUser2 } from 'react-icons/lu';
import { useTranslations } from 'next-intl';

const UserInformation = ({ steps, formRef, uiRefresh, formKey }: ContactTabsType) => {
  const t = useTranslations('TryForFree');
  const [, subRefresh] = React.useState(-1);
  const [showError, setShowError] = useState(false);
  React.useEffect(() => {
    if (showError) {
      setTimeout(() => setShowError(false), 1000);
    }
  }, [showError]);
  const handleForward = () => {
    if (
      (formRef.current['firstName'] !== '' &&
        formRef.current['firstName'] !== undefined) &&
      (formRef.current['lastName'] !== '' && formRef.current['lastName'] !== undefined) &&
      (formRef.current['concernName'] !== '' &&
        formRef.current['concernName'] !== undefined)
    ) {
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
      required
      tabType='freeInput'
      showError={showError}
      title='Surname'>
      <div className='flex gap-2 flex-wrap'>
        <Input
          isClearable
          type='text'
          labelPlacement='outside'
          startContent={<LuUser2 />}
          description={t('First Name')}
          value={formRef.current['firstName']}
          onValueChange={(e) => {
            formRef.current['firstName'] = e;
            subRefresh(Date.now());
          }}
        />
        <Input
          isClearable
          type='text'
          labelPlacement='outside'
          description={t('Last Name')}
          value={formRef.current['lastName']}
          onValueChange={(e) => {
            formRef.current['lastName'] = e;
            subRefresh(Date.now());
          }}
        />
        <Input
          isClearable
          type='text'
          labelPlacement='outside'
          description={t('Name of the concern')}
          value={formRef.current['concernName']}
          onValueChange={(e) => {
            formRef.current['concernName'] = e;
            subRefresh(Date.now());
          }}
        />
      </div>
    </TabsWrapper>
  );
};

export default UserInformation;
