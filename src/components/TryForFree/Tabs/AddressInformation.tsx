import React, { useEffect, useState } from 'react';
import TabsWrapper from '../TabsWrapper';
import { ContactTabsType } from '@/interface/Common';
import { Input } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

const AddressInformation = ({ steps, formRef, uiRefresh, formKey }: ContactTabsType) => {
  const t = useTranslations('TryForFree');
  const [, subRefresh] = useState(-1);
  const [showError, setShowError] = useState(false);
  useEffect(() => {
    if (showError) {
      setTimeout(() => setShowError(false), 1000);
    }
  }, [showError]);
  const handleForward = () => {
    if (
      (formRef.current['street'] !== '' && formRef.current['street'] !== undefined) &&
      (formRef.current['city'] !== '' && formRef.current['city'] !== undefined) &&
      (formRef.current['postalCode'] !== '' &&
        formRef.current['postalCode'] !== undefined)
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
      title='Address'
      required
      tabType='freeInput'
      showError={showError}>
      <Input
        isClearable
        type='text'
        labelPlacement='outside'
        description={t('Street')}
        value={formRef.current['street']}
        onValueChange={(e) => {
          formRef.current['street'] = e;
          subRefresh(Date.now());
        }}
      />
      <div className='w-full grid md:grid-cols-2 gap-4'>
        <Input
          isClearable
          type='text'
          labelPlacement='outside'
          description={t('City')}
          value={formRef.current['city']}
          onValueChange={(e) => {
            formRef.current['city'] = e;
            subRefresh(Date.now());
          }}
        />
        <Input
          isClearable
          type='text'
          labelPlacement='outside'
          description={t('Postal Code')}
          value={formRef.current['postalCode']}
          onValueChange={(e) => {
            formRef.current['postalCode'] = e;
            subRefresh(Date.now());
          }}
        />
      </div>
    </TabsWrapper>
  );
};

export default AddressInformation;
