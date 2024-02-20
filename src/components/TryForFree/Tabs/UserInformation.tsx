import { ContactTabsType } from '@/interface/Common';
import React from 'react';
import TabsWrapper from '../TabsWrapper';
import { Input } from '@nextui-org/react';
import { LuUser2 } from 'react-icons/lu';
import { useTranslations } from 'next-intl';

const UserInformation = ({ steps, formRef, uiRefresh, formKey }: ContactTabsType) => {
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
      required
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
