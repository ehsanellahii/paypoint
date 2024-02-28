'use client';
import React, { useState } from 'react';
import Wrapper from '../shared/Wrapper';
import { Button, Input, Select, SelectItem, Textarea } from '@nextui-org/react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { CommonApi } from '@/utils/firebase/api/Common';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { ContactFormSchema } from '@/validations/ContactForm';
import { serverTimestamp } from 'firebase/firestore';
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@nextui-org/react';
import { useRouter } from '@/navigation';

type Form = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  businessName: string;
  businessType: string;
  agreement: boolean;
};

const ContactForm = () => {
  const t = useTranslations('Contactus');
  const tryT = useTranslations('TryForFree');

  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const {
    register,
    reset,
    handleSubmit,

    formState: { errors },
  } = useForm<Form>({
    resolver: zodResolver(ContactFormSchema),
  });
  const onSubmit = async (input: any) => {
    setLoading(true);
    const data = {
      first_name: input.firstName,
      last_name: input.lastName,
      email: input.email,
      phone_number: input.phoneNumber,
      business_name: input.businessName,
      business_type: input.businessType,
      contacted_at: serverTimestamp(),
    };
    try {
      await CommonApi.storeDataInCollection('contactform', data);
      reset();
      setLoading(false);
      setIsOpen(true);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <>
      <Wrapper style='bg-primaryDark'>
        <div className='w-full grid md:grid-cols-2 gap-4 lg:gap-8 py-10'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='w-full h-full  flex flex-col gap-3'>
            <div className='flex flex-col md:flex-row gap-2'>
              <Input
                label={t('Vorname')}
                {...register('firstName')}
                isInvalid={errors['firstName'] ? true : false}
                errorMessage={errors['firstName'] && `${t(errors['firstName']?.message)}`}
                name='firstName'
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
                {...register('lastName')}
                isInvalid={errors['lastName'] ? true : false}
                errorMessage={errors['lastName'] && `${t(errors['lastName']?.message)}`}
                name='lastName'
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
              errorMessage={errors['email'] && `${t(errors['email']?.message)}`}
              name='email'
              type='email'
            />
            <Input
              label={t('Telefonnummer')}
              type='tel'
              {...register('phoneNumber')}
              isInvalid={errors['phoneNumber'] ? true : false}
              errorMessage={
                errors['phoneNumber'] && `${t(errors['phoneNumber']?.message)}`
              }
              name='phoneNumber'
              classNames={{
                input: '!bg-white !border-white !focus:border-white',
                innerWrapper: '!bg-white !border-white !focus:border-white',
                inputWrapper:
                  '!bg-white !border-white !focus:border-white !hover:bg-white !rounded-[6px] !focus-within:bg-white',
              }}
            />
            <Textarea
              label={t('Name des Gesschafts')}
              {...register('businessName')}
              isInvalid={errors['businessName'] ? true : false}
              errorMessage={
                errors['businessName'] && `${t(errors['businessName']?.message)}`
              }
              classNames={{
                base: '!bg-white !border-white !focus:border-white rounded-[6px]',
                innerWrapper: '!bg-white !border-white !focus:border-white',
                inputWrapper:
                  '!bg-white !border-white !focus:border-white !hover:bg-white !rounded-[6px] !focus-within:bg-white',
              }}
              name='businessName'
            />
            <Select
              {...register('businessType')}
              isInvalid={errors['businessType'] ? true : false}
              errorMessage={
                errors['businessType'] && `${t(errors['businessType']?.message)}`
              }
              name='businessType'
              id='businessType'
              label={t('Wählen Sie Ihren Unternehmenstyp aus')}
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
            <div className='flex justify-center'>
              <Button
                isLoading={loading}
                type='submit'
                className='bg-white text-black-main text-lg md:text-xl rounded-[4rem]  font-bold p-6'>
                {t('Abschicken')}
              </Button>
            </div>
          </form>
          <div className='text-white space-y-4 md:space-y-8 py-4 md:px-8 lg:px-20'>
            <h3 className='text-[3rem] md:text-[4rem] md:leading-[3.5rem] font-semibold '>
              {t('Brauchst du einen Rückruf?')}
            </h3>
            <p className='text-base md:pl-8 '>
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
      <Modal
        backdrop='blur'
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        motionProps={{
          variants: {
            enter: {
              y: 0,
              opacity: 1,
              transition: {
                duration: 0.3,
                ease: 'easeOut',
              },
            },
            exit: {
              y: -20,
              opacity: 0,
              transition: {
                duration: 0.2,
                ease: 'easeIn',
              },
            },
          },
        }}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div className='p-4 sm:p-8 md:p-12 flex flex-col justify-center items-center gap-5'>
                  <h1 className='text-xl font-medium text-center'>
                    {tryT('Thank You for Submission')}
                  </h1>
                  <p className=' text-center'>
                    {tryT('We will get back to you as soon as possible')}
                  </p>
                  <div className='w-full flex justify-center'>
                    <Button
                      onClick={() => router.push('/')}
                      className='text-white bg-primary hover:bg-primaryDark'>
                      Okay
                    </Button>
                  </div>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ContactForm;
