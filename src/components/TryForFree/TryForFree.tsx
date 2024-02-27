'use client';
import React, { useEffect, useRef, useState } from 'react';
import './TryForFree.css';
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
import { CommonApi } from '@/utils/firebase/api/Common';
import { serverTimestamp } from 'firebase/firestore';
import { useTranslations } from 'next-intl';
import { IoArrowBack } from 'react-icons/io5';
import { useRouter } from '@/navigation';
export const initialState: { [key: string]: string | boolean } = {
  businessTypePOS: '',
  businessType: '',
  needHardware: '',
  acceptPayment: '',
  receiptRolls: '',
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
  const t = useTranslations('TryForFree');
  const router = useRouter();
  const steps = useRef(1);
  const formRef = useRef<{ [key: string]: string | boolean }>(initialState);
  const [ui, uiRefresh] = useState(0);
  // useEffect(() => {
  //   const handleBeforeUnload = (e: BeforeUnloadEvent) => {
  //     const confirmationMessage =
  //       'You have unsaved changes. Are you sure you want to leave?';
  //     e.returnValue = confirmationMessage;
  //     return confirmationMessage;
  //   };
  //   window.addEventListener('beforeunload', handleBeforeUnload);
  //   return () => {
  //     window.removeEventListener('beforeunload', handleBeforeUnload);
  //   };
  // }, []);
  const handleSubmit = async () => {
    const data: any = {
      contacted_at: serverTimestamp(),
      business_type: formRef.current.businessType,
      pos_type: formRef.current.businessTypePOS,
      need_hardware: formRef.current.needHardware,
      accept_payments: formRef.current.acceptPayment,
      receipt_rolls: formRef.current.receiptRolls,
      additional_functionalities: formRef.current.additionalFunctionality,
      number_of_tables_host: formRef.current.tablesHost,
      number_of_customer_seats: formRef.current.customerSeats,
      number_of_consultation_tabes: formRef.current.consultationTables,
      user_details: {
        first_name: formRef.current.firstName,
        last_name: formRef.current.lastName,
        name_of_concern: formRef.current.concernName,
        street: formRef.current.concernName,
        city: formRef.current.city,
        postal_code: formRef.current.postalCode,
        email: formRef.current.email,
        phone_number: formRef.current.phoneNumber,
      },
      data_protection_agree: formRef.current.dataProtection,
    };
    //@ts-ignore
    Object.entries(formRef.current).forEach(([key, value]) => {
      // Check if the value is not empty (assuming non-empty strings)
      if (value && typeof value === 'string' && value.trim() !== '') {
        // Handle nested objects
        if (key.includes('.')) {
          const [parentKey, nestedKey] = key.split('.');
          if (!data[parentKey]) {
            data[parentKey] = {};
          }
          data[parentKey][nestedKey] = value;
        } else {
          data[key] = value;
        }
      }
    });

    try {
      await CommonApi.storeDataInCollection('tryforfree', data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <section className='w-full h-full min-h-screen bg-primary relative bg-logo'>
      <div className='p-8'>
        <button
          onClick={() => router.push('/')}
          className='text-white text-xl md:text-3xl lg:text-[2rem] flex items-center justify-start gap-4'>
          <IoArrowBack />
          {t('Back')}
        </button>
      </div>
      <div className='w-full h-full min-h-screen max-w-[1420px] mx-auto px-4 relative bg-girl'>
        <div className='w-full max-w-[90%] md:max-w-[65%] mx-auto flex items-center justify-center py-4 md:py-16'>
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
                      handleSubmit={handleSubmit}
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
                      handleSubmit={handleSubmit}
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
      </div>
    </section>
  );
};

export default TryForFree;
