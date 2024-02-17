'use client';
import Wrapper from '@/components/shared/Wrapper';
import React, { ChangeEvent, FormEvent, useRef, useState } from 'react';
import BusinessTypePOS from './Tabs/BusinessTypePOS';
import BusinessType from './Tabs/BusinessType';
import NeedHardware from './Tabs/NeedHardware';
import CardPayment from './Tabs/CardPayment';
import ReceiptRolls from './Tabs/ReceiptRolls';
import UserInformation from './Tabs/UserInformation';
import AdditionalFunctionality from './Tabs/AdditionalFunctionality';
import AddressInformation from './Tabs/AddressInformation';
import Telephone from './Tabs/Telephone';
import EmailTab from './Tabs/EmailAddress';
import DataProtectionTab from './Tabs/DataProtection';
import SubmitSuccessTab from './Tabs/SubmitSuccessTab';

const TryForFree = () => {
  const steps = useRef(1);
  const formRef = useRef({
    businessTypePOS: '',
    businessType: '',
    needHardware: 'Yes',
    acceptPayment: '',
    receiptRolls: 'Yes',
    additionalFunctionality: '',
    firstName: '',
    lastName: '',
    concernName: '',
    street: '',
    city: '',
    postalCode: '',
    phoneNumber: '',
    email: '',
    dataProtection: false,
  });
  const [ui, uiRefresh] = useState(0);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setOpenPopUp(true);
    // setLoading(true);
    // const Data = {
    //   store_type: Inputs.StoreType,
    //   country: Inputs.Country,
    //   store_name: Inputs.StoreName,
    //   no_of_stores: Inputs.NumberOfLocations,
    //   pos_kind: Inputs.POS,
    //   first_name: Inputs.FirstName,
    //   last_name: Inputs.LastName,
    //   phone_number: Inputs.PhoneNumber,
    //   business_email: Inputs.BusinessEmail,
    //   contacted_at: serverTimestamp(),
    // };
    // try {
    //   await CommonApi.storeDataInCollection('UsersContacted', Data);
    // } catch (error) {
    //   console.log(error);
    // }
    // setLoading(false);
  };
  return (
    <Wrapper style='w-full h-full bg-primary'>
      <div className='w-full max-w-[65%] mx-auto flex items-center justify-center py-4 md:py-16'>
        {(() => {
          switch (steps.current) {
            case 1:
              return (
                <BusinessTypePOS
                  key={steps.current}
                  steps={steps}
                  formKey='businessTypePOS'
                  formRef={formRef}
                  uiRefresh={uiRefresh}
                />
              );
            case 2:
              return (
                <BusinessType
                  key={steps.current}
                  steps={steps}
                  formKey='businessType'
                  formRef={formRef}
                  uiRefresh={uiRefresh}
                />
              );
            case 3:
              return (
                <NeedHardware
                  key={steps.current}
                  steps={steps}
                  formKey='needHardware'
                  formRef={formRef}
                  uiRefresh={uiRefresh}
                />
              );
            case 4:
              return (
                <CardPayment
                  key={steps.current}
                  steps={steps}
                  formKey='acceptPayment'
                  formRef={formRef}
                  uiRefresh={uiRefresh}
                />
              );
            case 5:
              return (
                <ReceiptRolls
                  key={steps.current}
                  steps={steps}
                  formKey='receiptRolls'
                  formRef={formRef}
                  uiRefresh={uiRefresh}
                />
              );
            case 6:
              return (
                <AdditionalFunctionality
                  key={steps.current}
                  steps={steps}
                  formKey='additionalFunctionality'
                  formRef={formRef}
                  uiRefresh={uiRefresh}
                />
              );
            case 7:
              return (
                <UserInformation
                  steps={steps}
                  key={steps.current}
                  formKey=''
                  formRef={formRef}
                  uiRefresh={uiRefresh}
                />
              );
            case 8:
              return (
                <AddressInformation
                  steps={steps}
                  formKey=''
                  formRef={formRef}
                  uiRefresh={uiRefresh}
                  key={steps.current}
                />
              );
            case 9:
              return (
                <Telephone
                  steps={steps}
                  formKey='phoneNumber'
                  formRef={formRef}
                  key={steps.current}
                  uiRefresh={uiRefresh}
                />
              );
            case 10:
              return (
                <EmailTab
                  steps={steps}
                  formKey='email'
                  formRef={formRef}
                  uiRefresh={uiRefresh}
                />
              );
            case 11:
              return (
                <DataProtectionTab
                  steps={steps}
                  formKey='dataProtection'
                  formRef={formRef}
                  uiRefresh={uiRefresh}
                />
              );
            case 12:
              return <SubmitSuccessTab />;
            default:
              return null;
          }
        })()}
      </div>
    </Wrapper>
  );
};

export default TryForFree;
