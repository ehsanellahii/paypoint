'use client';
import React from 'react';
import Wrapper from '../shared/Wrapper';
import { useTranslations } from 'next-intl';
import { Button, Checkbox, Input, Select, SelectItem, Textarea } from '@nextui-org/react';
import { FaFacebook, FaFacebookMessenger, FaTelegram } from 'react-icons/fa';
import Image from 'next/image';
import FAQ from './FAQ';
import { useRouter } from '@/navigation';

const Heading = ({ text }: { text: string }) => {
  return <h1 className='font-bold text-[4rem] leading-[3.5rem]'>{text}</h1>;
};

const SocialMediaBlock = ({
  title,
  image,
  buttonText,
  style,
  buttonStyle,
}: {
  style: string;
  title: string;
  image: string;
  buttonText: string;
  buttonStyle: string;
}) => {
  return (
    <div
      className={`w-[13rem] h-[13rem] rounded-2xl flex flex-col justify-center items-center gap-3 ${style}`}>
      <div className='w-[5rem] h-[5rem] relative'>
        <Image fill src={image} alt={title} />
      </div>
      {title}
      <Button className={`rounded-2xl bg-white text-black-main ${buttonStyle}`}>
        {buttonText}
      </Button>
    </div>
  );
};

const ContactUs = () => {
  const t = useTranslations('Contactus');
  const router = useRouter();
  return (
    <>
      <div className='w-full h-full relative bg-primaryDark'>
        <div className='w-full grid md:grid-cols-2 max-w-[1600px] mx-auto'>
          <div className='py-10 text-white space-y-4 px-4 md:px-8 '>
            <Heading text={t('Wir sind für Sie da')} />
            <p className='lg:max-w-[84%] text-xl'>
              {t(
                'Via Whatsapp, Online Chat oder über E-Mail Gerne Rufen wir Sie auch kostenlos zurück'
              )}
            </p>
            <Button className='bg-white  md:break-keep font-semibold rounded-3xl py-6 text-black-main text-lg'>
              {t('Alle Kontaktmöglichkeiten sehen Jetzt runterscrollen')}
            </Button>
          </div>
          <div className='w-full h-full'>
            <div className='relative w-full h-full'>
              <Image
                src='/Assets/ContactUs/hero.jpeg'
                alt=''
                fill
                className='w-full h-full '
              />
            </div>
          </div>
        </div>
      </div>
      <Wrapper>
        <div className='flex flex-wrap gap-8 py-10 justify-center'>
          <div
            className={`w-[13rem] h-full rounded-2xl flex flex-col justify-center items-center bg-[#25D366] px-6 py-4`}>
            <div className='w-[7.5rem] h-[7.5rem] relative'>
              <Image fill src='/Assets/ContactUs/whatsapp.png' alt='Paypoint Whatsapp' />
            </div>
            <div className='w-full space-y-2 flex flex-col items-center'>
              <h2 className='text-white text-xl font-semibold text-center'>Whatsapp</h2>
              <a
                href={'https://wa.me/+923078607264'}
                target='_blank'
                className={`rounded-3xl bg-white text-black-main font-semibold text-xl px-[3rem] py-1`}>
                Kontakt
              </a>
            </div>
          </div>
          <div
            className={`w-[13rem] h-full rounded-2xl flex flex-col justify-center items-center bg-white py-4`}>
            <div className='w-[8rem] h-[7.5rem] relative'>
              <Image
                fill
                src='/Assets/ContactUs/paypoint.jpeg'
                alt='Paypoint Customer Support Number'
              />
            </div>
            <div className='w-full space-y-2 flex flex-col items-center'>
              <h2 className='text-black-main text-xl font-semibold text-center'>
                Customer Support
              </h2>
              <a
                href={'tel:+923078607264'}
                target='_blank'
                className={`rounded-3xl bg-black-main text-white font-semibold text-base px-[1.5rem] py-2`}>
                +923078607264
              </a>
            </div>
          </div>
          <div
            className={`w-[13rem] h-full rounded-2xl flex flex-col justify-center items-center bg-primaryDark px-6 py-4`}>
            <div className='w-[7.5rem] h-[7.5rem] relative'>
              <Image
                fill
                src='/Assets/ContactUs/mail.png'
                alt='Paypoint E-Mail Support'
              />
            </div>
            <div className='w-full space-y-2 flex flex-col items-center'>
              <h2 className='text-white text-xl font-semibold text-center'>
                E-Mail Support
              </h2>
              <a
                href='mailto:info@get-paypoint.de'
                target='_blank'
                className={`rounded-3xl bg-white text-black-main whitespace-nowrap font-semibold text-sm px-[1em] py-2`}>
                info@get-paypoint.de
              </a>
            </div>
          </div>
        </div>
        <div className='w-full h-full grid md:grid-cols-2 gap-16'>
          <div className='flex flex-col gap-3 py-10 px-4'>
            <h4 className='text-2xl font-semibold'>{t('Kontakt')}</h4>
            <h1 className='font-bold text-[4rem] leading-[4rem] max-w-[80%]'>
              {t('Brauchst du eine Beratung?')}
            </h1>
            <p className='text-xl'>
              {t(
                'Füll den Online-Fragebogen aus für ein maßgeschneidertes Kassensystem-Angebot'
              )}
            </p>
            <div className='w-full flex justify-center'>
              <Button className='bg-primaryDark text-white  text-lg md:text-xl rounded-[4rem] font-bold p-6'>
                {t('Zum Onlineformular')}
              </Button>
            </div>
            <div className='flex gap-2 items-center justify-start'>
              <FaFacebook size={25} />
              <FaFacebookMessenger size={25} />
              <FaTelegram size={25} />
            </div>
          </div>
          <div className='w-full h-full relative'>
            <Image
              src='/Assets/ContactUs/person.png'
              alt=''
              className='w-full h-full '
              fill
            />
          </div>
        </div>
      </Wrapper>
      <Wrapper style='bg-primaryDark'>
        <div className='w-full grid md:grid-cols-2 gap-16 py-10'>
          <div className='w-full h-full  flex flex-col gap-3'>
            <div className='flex gap-2'>
              <Input label='Vorname' required />
              <Input label='Nachname' required />
            </div>
            <Input label='E-Mail'  />
            <Input label='Telefonnummer' />
            <Textarea label='Name des Gesschafts' />
            {/* <Select
                className='rounded-xl !bg-transparent focus:bg-white'
                name='StoreType'
                id='StoreType'
                label={'Select Your Store'}>
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
              </Select> */}
            <Checkbox className='text-white'>
              Do you agree to our terms and conditions?
            </Checkbox>
            <div className='flex justify-center'>
              <Button className='bg-white text-black-main text-lg md:text-xl rounded-[4rem]  font-bold p-6'>
                {t('Abschicken')}
              </Button>
            </div>
          </div>
          <div className='text-white space-y-4 py-4 md:px-8 lg:px-20'>
            <h3 className='text-[4rem] leading-[3.5rem] font-semibold '>
              {t('Brauchst du einen Rückruf?')}
            </h3>
            <p className='text-xl'>
              {t(
                'Füll den Online-Fragebogen aus für ein maßgeschneidertes Kassensystem-Angebot'
              )}
            </p>
            <div className='w-full h-full flex justify-between'>
              <div className='bg-white h-[6.5rem] flex items-center justify-center w-[6rem] rounded-xl'>
                <div className='w-full h-full relative'>
                  <Image
                    src='/Assets/ContactUs/diazo.jpeg'
                    alt='Papa James'
                    className='object-contain rounded-xl'
                    fill
                  />
                </div>
              </div>
              <div className='bg-white h-[6.5rem] flex items-center justify-center w-[6rem] rounded-xl px-1'>
                <div className='w-full h-full relative'>
                  <Image
                    src='/Assets/ContactUs/sushi.jpeg'
                    alt='Papa James'
                    className='object-contain rounded-xl'
                    fill
                  />
                </div>
              </div>
              <div className='bg-white h-[6.5rem] flex items-center justify-center w-[6rem] rounded-xl px-1'>
                <div className='w-full h-full relative'>
                  <Image
                    src='/Assets/ContactUs/yamyam.jpeg'
                    alt='Papa James'
                    className='object-contain rounded-xl'
                    fill
                  />
                </div>
              </div>
              <div className='bg-white h-[6.5rem] flex items-center justify-center w-[6rem] rounded-xl px-1'>
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
      <FAQ />
    </>
  );
};

export default ContactUs;
