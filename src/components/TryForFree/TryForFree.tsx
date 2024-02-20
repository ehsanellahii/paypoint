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
import ServingTables from './Tabs/ServingTables';
import CustomerSeats from './Tabs/CustomerSeats';
import ConsultationTables from './Tabs/ConsulationTables';
export const initialState: { [key: string]: string | boolean } = {
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
  tablesHost: '',
  customerSeats: '',
  consultationTables: '',
};
const TryForFree = () => {
  const steps = useRef(1);
  const formRef = useRef<{ [key: string]: string | boolean }>(initialState);
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
              let componentRender;
              if (formRef.current.businessTypePOS === 'Gastronomy') {
                componentRender = (
                  <ServingTables
                    key={steps.current}
                    steps={steps}
                    formKey='tablesHost'
                    formRef={formRef}
                    uiRefresh={uiRefresh}
                  />
                );
              } else if (formRef.current.businessTypePOS === 'Hairdresser & Beauty') {
                componentRender = (
                  <CustomerSeats
                    key={steps.current}
                    steps={steps}
                    formKey='customerSeats'
                    formRef={formRef}
                    uiRefresh={uiRefresh}
                  />
                );
              } else if (formRef.current.businessTypePOS === 'Optician') {
                componentRender = (
                  <ConsultationTables
                    key={steps.current}
                    steps={steps}
                    formKey='consultationTables'
                    formRef={formRef}
                    uiRefresh={uiRefresh}
                  />
                );
              } else if (formRef.current.businessTypePOS === 'Other') {
                componentRender = (
                  <BusinessType
                    key={steps.current}
                    steps={steps}
                    formKey='businessType'
                    formRef={formRef}
                    uiRefresh={uiRefresh}
                  />
                );
              } else {
                componentRender = (
                  <NeedHardware
                    key={steps.current}
                    steps={steps}
                    formKey='needHardware'
                    formRef={formRef}
                    uiRefresh={uiRefresh}
                  />
                );
              }
              return componentRender;
            case 3:
              let componentToRenderThree;
              if (
                formRef.current.businessTypePOS === 'Gastronomy' ||
                formRef.current.businessTypePOS === 'Other' ||
                formRef.current.businessTypePOS === 'Optician' ||
                formRef.current.businessTypePOS === "'Hairdresser & Beauty'"
              ) {
                componentToRenderThree = (
                  <CardPayment
                    key={steps.current}
                    steps={steps}
                    formKey='acceptPayment'
                    formRef={formRef}
                    uiRefresh={uiRefresh}
                  />
                );
              } else {
                componentToRenderThree = (
                  <NeedHardware
                    key={steps.current}
                    steps={steps}
                    formKey='needHardware'
                    formRef={formRef}
                    uiRefresh={uiRefresh}
                  />
                );
              }
              return componentToRenderThree;
            case 4:
              let componentToRenderFour;
              if (
                formRef.current.businessTypePOS === 'Gastronomy' ||
                formRef.current.businessTypePOS === 'Other' ||
                formRef.current.businessTypePOS === 'Optician' ||
                formRef.current.businessTypePOS === "'Hairdresser & Beauty'"
              ) {
                componentToRenderFour = (
                  <ReceiptRolls
                    key={steps.current}
                    steps={steps}
                    formKey='receiptRolls'
                    formRef={formRef}
                    uiRefresh={uiRefresh}
                  />
                );
              } else {
                componentToRenderFour = (
                  <CardPayment
                    key={steps.current}
                    steps={steps}
                    formKey='acceptPayment'
                    formRef={formRef}
                    uiRefresh={uiRefresh}
                  />
                );
              }
              return componentToRenderFour;
            case 5:
              let componentToRenderFive;
              if (
                formRef.current.businessTypePOS === 'Gastronomy' ||
                formRef.current.businessTypePOS === 'Other' ||
                formRef.current.businessTypePOS === 'Optician' ||
                formRef.current.businessTypePOS === "'Hairdresser & Beauty'"
              ) {
                componentToRenderFive = (
                  <AdditionalFunctionality
                    key={steps.current}
                    steps={steps}
                    formKey='additionalFunctionality'
                    formRef={formRef}
                    uiRefresh={uiRefresh}
                  />
                );
              } else {
                componentToRenderFive = (
                  <ReceiptRolls
                    key={steps.current}
                    steps={steps}
                    formKey='receiptRolls'
                    formRef={formRef}
                    uiRefresh={uiRefresh}
                  />
                );
              }
              return componentToRenderFive;
            case 6:
              let componentToRenderSix;
              if (
                formRef.current.businessTypePOS === 'Gastronomy' ||
                formRef.current.businessTypePOS === 'Other' ||
                formRef.current.businessTypePOS === 'Optician' ||
                formRef.current.businessTypePOS === "'Hairdresser & Beauty'"
              ) {
                componentToRenderSix = (
                  <UserInformation
                    steps={steps}
                    key={steps.current}
                    formKey=''
                    formRef={formRef}
                    uiRefresh={uiRefresh}
                  />
                );
              } else {
                componentToRenderSix = (
                  <AdditionalFunctionality
                    key={steps.current}
                    steps={steps}
                    formKey='additionalFunctionality'
                    formRef={formRef}
                    uiRefresh={uiRefresh}
                  />
                );
              }
              return componentToRenderSix;
            case 7:
              let componentToRenderSeven;
              if (
                formRef.current.businessTypePOS === 'Gastronomy' ||
                formRef.current.businessTypePOS === 'Other' ||
                formRef.current.businessTypePOS === 'Optician' ||
                formRef.current.businessTypePOS === "'Hairdresser & Beauty'"
              ) {
                componentToRenderSeven = (
                  <AddressInformation
                    steps={steps}
                    formKey=''
                    formRef={formRef}
                    uiRefresh={uiRefresh}
                    key={steps.current}
                  />
                );
              } else {
                componentToRenderSeven = (
                  <UserInformation
                    steps={steps}
                    key={steps.current}
                    formKey=''
                    formRef={formRef}
                    uiRefresh={uiRefresh}
                  />
                );
              }
              return componentToRenderSeven;
            case 8:
              let componentToRenderEight;
              if (
                formRef.current.businessTypePOS === 'Gastronomy' ||
                formRef.current.businessTypePOS === 'Other' ||
                formRef.current.businessTypePOS === 'Optician' ||
                formRef.current.businessTypePOS === "'Hairdresser & Beauty'"
              ) {
                componentToRenderEight = (
                  <Telephone
                    steps={steps}
                    formKey='phoneNumber'
                    formRef={formRef}
                    key={steps.current}
                    uiRefresh={uiRefresh}
                  />
                );
              } else {
                componentToRenderEight = (
                  <AddressInformation
                    steps={steps}
                    formKey=''
                    formRef={formRef}
                    uiRefresh={uiRefresh}
                    key={steps.current}
                  />
                );
              }
              return componentToRenderEight;
            case 9:
              let componentToRenderNine;
              if (
                formRef.current.businessTypePOS === 'Gastronomy' ||
                formRef.current.businessTypePOS === 'Other' ||
                formRef.current.businessTypePOS === 'Optician' ||
                formRef.current.businessTypePOS === "'Hairdresser & Beauty'"
              ) {
                componentToRenderNine = (
                  <EmailTab
                    steps={steps}
                    formKey='email'
                    formRef={formRef}
                    uiRefresh={uiRefresh}
                  />
                );
              } else {
                componentToRenderNine = (
                  <Telephone
                    steps={steps}
                    formKey='phoneNumber'
                    formRef={formRef}
                    key={steps.current}
                    uiRefresh={uiRefresh}
                  />
                );
              }
              return componentToRenderNine;
            case 10:
              let componentToRenderTen;
              if (
                formRef.current.businessTypePOS === 'Gastronomy' ||
                formRef.current.businessTypePOS === 'Other' ||
                formRef.current.businessTypePOS === 'Optician' ||
                formRef.current.businessTypePOS === "'Hairdresser & Beauty'"
              ) {
                componentToRenderTen = (
                  <DataProtectionTab
                    steps={steps}
                    formKey='dataProtection'
                    formRef={formRef}
                    uiRefresh={uiRefresh}
                  />
                );
              } else {
                componentToRenderTen = (
                  <EmailTab
                    steps={steps}
                    formKey='email'
                    formRef={formRef}
                    uiRefresh={uiRefresh}
                  />
                );
              }
              return componentToRenderTen;
            case 11:
              let componentToRenderEleven;
              if (
                formRef.current.businessTypePOS === 'Gastronomy' ||
                formRef.current.businessTypePOS === 'Other' ||
                formRef.current.businessTypePOS === 'Optician' ||
                formRef.current.businessTypePOS === "'Hairdresser & Beauty'"
              ) {
                componentToRenderEleven = (
                  <SubmitSuccessTab
                    formKey=''
                    steps={steps}
                    formRef={formRef}
                    uiRefresh={uiRefresh}
                  />
                );
              } else {
                componentToRenderEleven = (
                  <DataProtectionTab
                    steps={steps}
                    formKey='dataProtection'
                    formRef={formRef}
                    uiRefresh={uiRefresh}
                  />
                );
              }
              return componentToRenderEleven;
            case 12:
              let componentToRenderTwelve;
              if (
                formRef.current.businessTypePOS === 'Gastronomy' ||
                formRef.current.businessTypePOS === 'Other' ||
                formRef.current.businessTypePOS === 'Optician' ||
                formRef.current.businessTypePOS === "'Hairdresser & Beauty'"
              ) {
                componentToRenderTwelve = null;
              } else {
                componentToRenderTwelve = (
                  <SubmitSuccessTab
                    formKey=''
                    steps={steps}
                    formRef={formRef}
                    uiRefresh={uiRefresh}
                  />
                );
              }
              return componentToRenderTwelve;
            default:
              return null;
          }
        })()}
      </div>
    </Wrapper>
  );
};

export default TryForFree;
