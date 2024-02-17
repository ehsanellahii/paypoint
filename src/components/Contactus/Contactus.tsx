'use client';
import React from 'react';
import Wrapper from '../shared/Wrapper';
import { useTranslations } from 'next-intl';
import { Button, Checkbox, Input, Select, SelectItem, Textarea } from '@nextui-org/react';
import { FaFacebook, FaFacebookMessenger, FaTelegram } from 'react-icons/fa';
import Image from 'next/image';
import { StaticData } from '@/constants/Static';
import FAQ from '../Pricing/FAQ';
import { useRouter } from '@/navigation';

const Heading = ({ text }: { text: string }) => {
  return <h1 className='font-bold text-[3rem] leading-[2.5rem]'>{text}</h1>;
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
      <Wrapper style='bg-primaryDark'>
        <div className='w-full grid md:grid-cols-2'>
          <div className='py-10 text-white space-y-4'>
            <Heading text={t('Wir sind für Sie da')} />
            <p>
              {t(
                'Via Whatsapp, Online Chat oder über E-Mail Gerne Rufen wir Sie auch kostenlos zurück'
              )}
            </p>
            <Button className='bg-white font-semibold rounded-2xl py-4 text-black-main text-lg'>
              {t('Alle Kontaktmöglichkeiten sehen Jetzt runterscrollen')}
            </Button>
          </div>
          <div></div>
        </div>
      </Wrapper>
      <Wrapper>
        <div className='flex flex-wrap gap-8 py-10 justify-center'>
          {StaticData.Contact.SocialMedia.map((item, idx) => (
            <SocialMediaBlock
              key={idx}
              style={`bg-[${item.bgColor}]`}
              image={item.image}
              buttonStyle={``}
              buttonText={item.btnText}
              title={item.title}
            />
          ))}
        </div>
        <div className='w-full h-full grid md:grid-cols-2 gap-16'>
          <div className='flex flex-col gap-3 py-10'>
            <h4 className='text-xl font-semibold'>{t('Kontakt')}</h4>
            <Heading text={t('Brauchst du eine Beratung?')} />
            <p>
              {t(
                'Füll den Online-Fragebogen aus für ein maßgeschneidertes Kassensystem-Angebot'
              )}
            </p>
            <div className='w-full flex justify-center'>
              <Button className='bg-primaryDark text-white text-2xl'>
                {t('Zum Onlineformular')}
              </Button>
            </div>
            <div className='flex gap-2 items-center justify-start'>
              <FaFacebook size={25} />
              <FaFacebookMessenger size={25} />
              <FaTelegram size={25} />
            </div>
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
            <Input label='E-Mail' />
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
              <Button
                onClick={() => router.push('/tryforfree')}
                className='bg-white text-black-main font-semibold text-3xl px-6 py-4'>
                {t('Abschicken')}
              </Button>
            </div>
          </div>
          <div className='text-white space-y-4 py-4'>
            <h3 className='text-[4rem] leading-[3.5rem] font-semibold '>
              {t('Brauchst du einen Rückruf?')}
            </h3>
            <p>
              {t(
                'Füll den Online-Fragebogen aus für ein maßgeschneidertes Kassensystem-Angebot'
              )}
            </p>
          </div>
        </div>
      </Wrapper>
      <FAQ />
    </>
  );
};

export default ContactUs;
