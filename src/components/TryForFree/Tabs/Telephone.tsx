import React from 'react';
import TabsWrapper from '../TabsWrapper';
import { ContactTabsType } from '@/interface/Common';
import { Input } from '@nextui-org/react';
import { SlScreenSmartphone } from 'react-icons/sl';
import { useTranslations } from 'next-intl';

const Telephone = ({ steps, formRef, uiRefresh, formKey }: ContactTabsType) => {
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
      title='Telephone'>
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
