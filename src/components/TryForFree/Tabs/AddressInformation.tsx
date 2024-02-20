import React, { useState } from 'react';
import TabsWrapper from '../TabsWrapper';
import { ContactTabsType } from '@/interface/Common';
import { Input } from '@nextui-org/react';
import { useTranslations } from 'next-intl';

const AddressInformation = ({ steps, formRef, uiRefresh, formKey }: ContactTabsType) => {
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
      handleBackward={handleBackward}
      handleForward={handleForward}
      title='Address'>
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
