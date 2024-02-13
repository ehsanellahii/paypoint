'use client';
import React, { useState } from 'react';
import Wrapper from '../Wrapper';
import Image from 'next/image';
import { StaticData } from '@/constants/Static';
import { Link, useRouter } from '@/navigation';
import { IoGlobe } from 'react-icons/io5';
import { useTranslations } from 'next-intl';
import { Button } from '@nextui-org/react';

const Footer = () => {
  const t = useTranslations('Footer');
  const router = useRouter();
  return (
    <section className='w-full h-full flex flex-col gap-2 my-4'>
      <section className='w-full h-full py-10 bg-blue-dark clip-path'>
        {/* Footer Header */}
        <article className=' py-10 space-y-8 my-2'>
          {/* Logo */}
          <div className='w-full h-full relative'>
            <Image
              src='/Assets/Home/DownwardCurve.svg'
              alt=''
              fill
              className='w-full h-full object-cover'
            />
          </div>
          <h1 className='text-white-main text-[2.5rem] leading-[2.5rem] md:text-[3rem] text-center font-bold md:font-black px-2'>
            {t('Begleite und gestalte die Reise von Payout')}
          </h1>
          <div className='flex flex-col md:flex-row items-center gap-3 justify-center max-w-[90%] mx-auto md:max-w-[50%]'>
            <Button
              onClick={() =>
                router.push(
                  'https://forms.gastrosoft.de/gastrosoftgmbh/form/UnverbindlichesAngebotfrDeinGastroSoftKassensystem/formperma/DJVmlx_F57t2rzGQnzLown0G26T_Yfc9O7QaO7lSzrw'
                )
              }
              className='w-full text-lg md:text-xl font-bold bg-white-main text-black-text py-6 px-6 rounded-[4rem]'
              type='button'>
              {t('Kostenlos testen')}
            </Button>
            <Button
              className='w-full text-lg md:text-xl font-bold bg-transparent border-[2px] text-white-main  py-6 px-6 rounded-[4rem]'
              type='button'>
              {t('Updates erhalten')}
            </Button>
          </div>
        </article>
      </section>
      <Wrapper style='w-full h-full py-10'>
        <div className='w-full h-full flex flex-col gap-2'>
          {/* Footer Links */}
          <article className='w-full h-full hidden  md:flex md:flex-nowrap gap-5'>
            <div className='w-full h-full flex items-start justify-start'>
              <Image
                src='/Logo.png'
                alt='Payout'
                width={100}
                height={100}
                className='object-cover'
              />
            </div>
            <div className='w-full h-full'>
              <h3 className='font-semibold'>{t('Produkt')}</h3>
              <ul>
                {StaticData.FooterLinks.Products.map((itm, idx) => (
                  <li key={idx}>
                    <Link href={itm.link}>{itm.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='w-full h-full'>
              <h3 className='font-semibold'>{t('Ressourcen')}</h3>
              <ul>
                {StaticData.FooterLinks.Products.map((itm, idx) => (
                  <li key={idx}>
                    <Link href={itm.link}>{itm.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='w-full h-full'>
              <h3 className='font-semibold'>{t('Unternehmen')}</h3>
              <ul>
                {StaticData.FooterLinks.Products.map((itm, idx) => (
                  <li key={idx}>
                    <Link href={itm.link}>{itm.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </article>
          <article className='w-full h-full border-t-2 py-3 flex flex-col md:flex-row md:justify-between items-center gap-2 mt-3'>
            {/* language Select Input */}
            <div className='w-full flex gap-2 md:gap-4 flex-col md:flex-row items-center'>
              {/* <div>
                <p className='font-bold'>Status</p>
              </div> */}
              <div>©{t('2023 Alle Rechte vorbehalten PayPoint')}</div>
            </div>
            {/* PayPoints Social Links Icons */}
            <div className='w-full h-full flex gap-2 justify-center md:justify-end items-center text-black-main text-2xl'>
              {StaticData.FooterLinks.PayoutSocialLinks.map(
                ({ icon: Icon, link }, idx) => {
                  return (
                    <Link href={link} key={idx}>
                      <Icon />
                    </Link>
                  );
                }
              )}
            </div>
          </article>
        </div>
      </Wrapper>
    </section>
  );
};

export default Footer;
