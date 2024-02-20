import { ContactTabsType } from '@/interface/Common';
import React from 'react';
import TabsWrapper from '../TabsWrapper';
import Select from 'react-select';
import { useTranslations } from 'next-intl';

const AdditionalFunctionality = ({
  steps,
  formRef,
  uiRefresh,
  formKey,
}: ContactTabsType) => {
  const t = useTranslations('TryForFree');
  const [selectedOptions, setSelectedOptions] = React.useState<string[]>([]);
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
      title='Do you need additional functions?'>
      <h6>
        {t('If you don’t need any additional functions, you can skip this question')}
      </h6>
      <Select
        value={selectedOptions}
        onChange={(value: any) => setSelectedOptions(value)}
        isMulti
        options={[
          { label: `${t('Time Tracking')}`, value: 'time-tracking' },
          { label: `${t('DATEV Connection')}`, value: 'datev-connection' },
          { label: `${t('Lexware Connection')}`, value: 'lexware-connection' },
        ]}
      />
    </TabsWrapper>
  );
};

export default AdditionalFunctionality;
