import React, { useState } from 'react';
import Wrapper from '../shared/Wrapper';
import { Button, Checkbox, Input, Select, SelectItem, Textarea } from '@nextui-org/react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { CommonApi } from '@/utils/firebase/api/Common';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { ContactFormSchema } from '@/validations/ContactForm';

type Form = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  businessName: string;
  storeType: string;
  agree: boolean;
};

const ContactForm = () => {
  const t = useTranslations('Contactus');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Form>({
    resolver: zodResolver(ContactFormSchema),
  });
  const [input, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    businessName: '',
    storeType: '',
    agree: false,
  });
  console.log(input);
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    console.log(name, value);
    return setInputs({
      ...input,
      [name]: value,
    });
  };
  const onSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      first_name: input.firstName,
      last_name: input.lastName,
      email: input.email,
      phone_number: input.phoneNumber,
      business_name: input.businessName,
      business_type: input.storeType,
      agree: input.agree ? 'Yes' : 'No',
    };
    try {
      await CommonApi.storeDataInCollection('contactForm', data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Wrapper style='bg-primaryDark'>
      <div className='w-full grid md:grid-cols-2 gap-4 lg:gap-8 py-10'>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='w-full h-full  flex flex-col gap-3'>
          <div className='flex flex-col md:flex-row gap-2'>
            <Input
              label={t('Vorname')}
              required
              {...register('firstName')}
              isInvalid={errors['firstName'] ? true : false}
              errorMessage={errors['firstName']?.message}
              name='firstName'
              value={input.firstName}
              onChange={handleInputChange}
              autoComplete='off'
              classNames={{
                input: '!bg-white !border-white !focus:border-white',
                innerWrapper: '!bg-white !border-white !focus:border-white',
                inputWrapper:
                  '!bg-white !border-white !focus:border-white !hover:bg-white !rounded-[6px] !focus-within:bg-white',
              }}
            />
            <Input
              label={t('Nachname')}
              required
              {...register('lastName')}
              isInvalid={errors['lastName'] ? true : false}
              errorMessage={errors['lastName']?.message}
              name='lastName'
              value={input.lastName}
              onChange={handleInputChange}
              classNames={{
                input: '!bg-white !border-white !focus:border-white',
                innerWrapper: '!bg-white !border-white !focus:border-white',
                inputWrapper:
                  '!bg-white !border-white !focus:border-white !hover:bg-white !rounded-[6px] !focus-within:bg-white',
              }}
            />
          </div>
          <Input
            label={t('E-Mail')}
            classNames={{
              input: '!bg-white !border-white !focus:border-white',
              innerWrapper: '!bg-white !border-white !focus:border-white',
              inputWrapper:
                '!bg-white !border-white !focus:border-white !hover:bg-white !rounded-[6px] !focus-within:bg-white',
            }}
            {...register('email')}
            isInvalid={errors['email'] ? true : false}
            errorMessage={errors['email']?.message}
            name='email'
            type='email'
            required
            value={input.email}
            onChange={handleInputChange}
          />
          <Input
            label={t('Telefonnummer')}
            type='tel'
            {...register('phoneNumber')}
            isInvalid={errors['phoneNumber'] ? true : false}
            errorMessage={errors['phoneNumber']?.message}
            name='phoneNumber'
            classNames={{
              input: '!bg-white !border-white !focus:border-white',
              innerWrapper: '!bg-white !border-white !focus:border-white',
              inputWrapper:
                '!bg-white !border-white !focus:border-white !hover:bg-white !rounded-[6px] !focus-within:bg-white',
            }}
            required
            value={input.phoneNumber}
            onChange={handleInputChange}
          />
          <Textarea
            label={t('Name des Gesschafts')}
            {...register('businessName')}
            isInvalid={errors['businessName'] ? true : false}
            errorMessage={errors['businessName']?.message}
            classNames={{
              base: '!bg-white !border-white !focus:border-white rounded-[6px]',
              innerWrapper: '!bg-white !border-white !focus:border-white',
              inputWrapper:
                '!bg-white !border-white !focus:border-white !hover:bg-white !rounded-[6px] !focus-within:bg-white',
            }}
            required
            name='businessName'
            value={input.businessName}
            onChange={handleInputChange}
          />
          <Select
            {...register('storeType')}
            isInvalid={errors['storeType'] ? true : false}
            errorMessage={errors['storeType']?.message}
            name='storeType'
            id='storeType'
            required
            label={t('Wählen Sie Ihren Shop aus')}
            value={input.storeType}
            onChange={handleInputChange}
            classNames={{
              base: '!bg-white !border-white !focus:border-white rounded-[6px]',
              innerWrapper: '!bg-white !border-white !focus:border-white',
              trigger: '!bg-white !border-white !focus:border-white',
            }}>
            {[
              { value: 'Restaurant' },
              { value: 'Kiosk' },
              { value: 'Supermarket' },
              { value: 'Liferservice' },
            ].map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {t(item.value)}
              </SelectItem>
            ))}
          </Select>
          <Checkbox
            {...register('agree')}
            isInvalid={errors['agree'] ? true : false}
            required
            name='agree'
            isSelected={input.agree}
            onValueChange={(value) => setInputs({ ...input, agree: value })}
            classNames={{
              base: 'bg-primaryDark !text-white',
              label: '!text-white font-medium !text-lg !leading-6',
            }}>
            {t('Sind Sie mit unseren Allgemeinen Geschäftsbedingungen einverstanden?')}
          </Checkbox>
          <div className='flex justify-center'>
            <Button
              type='submit'
              className='bg-white text-black-main text-lg md:text-xl rounded-[4rem]  font-bold p-6'>
              {t('Abschicken')}
            </Button>
          </div>
        </form>
        <div className='text-white space-y-4 py-4 md:px-8 lg:px-20'>
          <h3 className='text-[3rem] md:text-[4rem] md:leading-[3.5rem] font-semibold '>
            {t('Brauchst du einen Rückruf?')}
          </h3>
          <p className='text-xl'>
            {t(
              'Füll den Online-Fragebogen aus für ein maßgeschneidertes Kassensystem-Angebot'
            )}
          </p>
          <div className='w-full flex items-center justify-center flex-wrap gap-3'>
            <div className='bg-white w-[7rem] h-[7.5rem] md:w-[6rem]  md:h-[6.5rem] flex items-center justify-center rounded-xl'>
              <div className='w-full h-full relative'>
                <Image
                  src='/Assets/ContactUs/diazo.jpeg'
                  alt='Papa James'
                  className='object-contain rounded-xl'
                  fill
                />
              </div>
            </div>
            <div className='bg-white w-[7rem] h-[7.5rem]  md:w-[6rem] md:h-[6.5rem] flex items-center justify-center  rounded-xl px-1'>
              <div className='w-full h-full relative'>
                <Image
                  src='/Assets/ContactUs/sushi.jpeg'
                  alt='Papa James'
                  className='object-contain rounded-xl'
                  fill
                />
              </div>
            </div>
            <div className='bg-white w-[7rem] h-[7.5rem] md:w-[6rem] md:h-[6.5rem] flex items-center justify-center rounded-xl px-1'>
              <div className='w-full h-full relative'>
                <Image
                  src='/Assets/ContactUs/yamyam.jpeg'
                  alt='Papa James'
                  className='object-contain rounded-xl'
                  fill
                />
              </div>
            </div>
            <div className='bg-white  w-[7rem] h-[7.5rem] md:w-[6rem] md:h-[6.5rem] flex items-center justify-center rounded-xl px-1'>
              <div className='w-[9rem] h-[3rem] relative'>
                <Image
                  src='/Assets/ContactUs/papajames.jpeg'
                  alt='Papa James'
                  className='object-contain rounded-xl'
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default ContactForm;
