import { ContactTabsType } from '@/interface/Common';
import React from 'react';
import TabsWrapper from '../TabsWrapper';
import Select from 'react-select';

const AdditionalFunctionality = ({
  steps,
  formRef,
  uiRefresh,
  formKey,
}: ContactTabsType) => {
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
      title=' What type of business do you need a POS system for ?'>
      <h6>
        If you don&rsquo;t need any additional functions, you can skip this question.
      </h6>
      <Select
        value={selectedOptions}
        onChange={(value: any) => setSelectedOptions(value)}
        isMulti
        options={[
          { label: 'Time Tracking', value: 'time-tracking' },
          { label: 'DATEV connection', value: 'datev-connection' },
          { label: 'Lexware connection', value: 'lexware-connection' },
        ]}
      />
    </TabsWrapper>
  );
};

export default AdditionalFunctionality;
