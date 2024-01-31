'use client';
import Wrapper from '@/components/shared/Wrapper';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { CommonApi } from '@/utils/firebase/api/Common';
import { Button, Input } from '@nextui-org/react';
import { Select, SelectItem } from '@nextui-org/react';
import { Autocomplete, AutocompleteItem } from '@nextui-org/react';
import Countries from '../../../constants/Countries.json';
import { serverTimestamp } from 'firebase/firestore';
import { useTranslations } from 'next-intl';

const Information = () => {
  const t = useTranslations('Pricing');
  const [loading, setLoading] = useState(false);
  const [Inputs, setInputs] = useState({
    Country: '',
    StoreType: '',
    StoreName: '',
    NumberOfLocations: '',
    POS: '',
    FirstName: '',
    LastName: '',
    PhoneNumber: '',
    BusinessEmail: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const Data = {
      store_type: Inputs.StoreType,
      country: Inputs.Country,
      store_name: Inputs.StoreName,
      no_of_stores: Inputs.NumberOfLocations,
      pos_kind: Inputs.POS,
      first_name: Inputs.FirstName,
      last_name: Inputs.LastName,
      phone_number: Inputs.PhoneNumber,
      business_email: Inputs.BusinessEmail,
      contacted_at: serverTimestamp(),
    };
    try {
      await CommonApi.storeDataInCollection('UsersContacted', Data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  return (
    <Wrapper style='w-full h-full bg-white-lightOrange '>
      <article className='w-full h-full md:max-w-[85%] mx-auto space-y-4  py-4'>
        <h1 className='font-bold text-[2.5rem] text-center'>
          {t('Submit the form and')}
          <span className='pb-[3px] border-b-blue-light border-b-[3px] ml-2'>
            {t('get the demo')}
          </span>
        </h1>
        <p className='text-grey-text text-xl text-center'>{t(`Getorder`)}</p>
      </article>
      <form
        onSubmit={handleSubmit}
        className='w-full h-full md:max-w-[60%] mx-auto flex flex-col gap-5 shadow-wrapper p-5 bg-white-main rounded-xl bg-white'>
        <h1 className='font-bold text-2xl'>{t('Your Store')}</h1>
        <Select
          value={Inputs.StoreType}
          onChange={handleChange}
          isRequired
          className='rounded-xl !bg-transparent focus:bg-white'
          name='StoreType'
          id='StoreType'
          label={t('Select Your Store')}>
          {[
            { value: 'Restaurant' },
            { value: 'Kiosk' },
            { value: 'Supermarket' },
            { value: 'Liferservice' },
          ].map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.value}
            </SelectItem>
          ))}
        </Select>
        <Input
          label={t('Store Name')}
          type='text'
          autoComplete='none'
          className='rounded-xl '
          isRequired
          name='StoreName'
          id='StoreName'
          value={Inputs.StoreName}
          onChange={handleChange}
        />
        <Autocomplete
          label={t('Select Your Country')}
          selectedKey={Inputs.Country}
          isRequired
          onSelectionChange={(value) => {
            setInputs((prevValues) => ({
              ...prevValues,
              Country: String(value),
            }));
          }}
          className=''>
          {Countries.map((country) => (
            <AutocompleteItem key={country.countryName} value={country.countryName}>
              {country.countryName}
            </AutocompleteItem>
          ))}
        </Autocomplete>
        <Select
          value={Inputs.NumberOfLocations}
          onChange={handleChange}
          isRequired
          className='rounded-xl !bg-transparent focus:bg-white'
          name='NumberOfLocations'
          id='NumberOfLocations'
          label={t('Number of Stores')}>
          {[
            { value: '1' },
            { value: '2-5' },
            { value: '6-10' },
            { value: '11-25' },
            { value: '25+' },
          ].map((item) => (
            <SelectItem key={item.value} value={item.value}>
              {item.value}
            </SelectItem>
          ))}
        </Select>
        <Input
          label={t('What POS do you have?')}
          type='text'
          autoComplete='none'
          className='rounded-xl '
          name='POS'
          id='POS'
          value={Inputs.POS}
          onChange={handleChange}
        />

        <h1 className='font-bold text-xl'>{t('Contact Info')}</h1>
        <Input
          label={t('First Name')}
          type='text'
          isRequired
          autoComplete='none'
          className='rounded-xl '
          name='FirstName'
          id='FirstName'
          value={Inputs.FirstName}
          onChange={handleChange}
        />
        <Input
          label={t('Last Name')}
          type='text'
          isRequired
          autoComplete='none'
          className='rounded-xl'
          name='LastName'
          id='LastName'
          value={Inputs.LastName}
          onChange={handleChange}
        />
        <Input
          label={t('Phone Number')}
          type='text'
          isRequired
          autoComplete='none'
          className='rounded-xl'
          name='LastName'
          id='LastName'
          value={Inputs.PhoneNumber}
          onChange={handleChange}
        />
        <Input
          label={t('Business Email')}
          type='text'
          isRequired
          autoComplete='none'
          className='rounded-xl '
          name='BusinessEmail'
          id='BusinessEmail'
          value={Inputs.BusinessEmail}
          onChange={handleChange}
        />
        {/* <p className='text-lg'>
          By submitting the form, you agree to the{' '}
          <span className='font-bold'>terms of use </span>of the site and the{' '}
          <span className='font-bold'>privacy policy</span>
        </p> */}
        <Button
          disabled={loading}
          type='submit'
          color='primary'
          isLoading={loading}
          className='text-xl rounded-xl px-6 py-6  text-white-main'>
          Continue
        </Button>
      </form>
    </Wrapper>
  );
};

export default Information;
