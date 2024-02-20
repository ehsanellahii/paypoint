import { ContactTabsType } from '@/interface/Common';
import React, { useState } from 'react';
import TabsWrapper from '../TabsWrapper';
import makeAnimated from 'react-select/animated';
const animatedComponents = makeAnimated();
import Select from 'react-select';
import { useTranslations } from 'next-intl';

const NeedHardware = ({ steps, formRef, uiRefresh, formKey }: ContactTabsType) => {
  const t = useTranslations('TryForFree');
  const handleBackward = () => {
    uiRefresh((prev) => prev - 1);
    steps.current -= 1;
  };
  const handleForward = () => {
    uiRefresh((prev) => prev + 1);
    steps.current += 1;
  };
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  return (
    <TabsWrapper
      handleBackward={handleBackward}
      handleForward={handleForward}
      title='Do you need hardware as well as software? If yes, which?'>
      <h6>{t("If you don’t need any hardware, you can skip this question")}</h6>
      <Select
        value={selectedOptions}
        onChange={(value: any) => setSelectedOptions(value)}
        isMulti
        options={[
          { value: 'checkout', label: `${t('Checkout')}` },
          { label: 'Cash drawer', value: `${t('cash-drawer')}` },
          { label: 'Receipt Printer', value: `${t('receipt-printer')}` },
          { label: 'Scanner', value: `${t('scanner')}` },
        ]}
      />
    </TabsWrapper>
  );
};

export default NeedHardware;
