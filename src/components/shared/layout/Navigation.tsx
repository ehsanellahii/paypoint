'use client';
import React, { useEffect, useState } from 'react';
import Wrapper from '../Wrapper';
import { StaticData } from '@/constants/Static';
import { Link, usePathname } from '@/navigation';
import Image from 'next/image';
import { FaBars } from 'react-icons/fa6';
import { RxCross2 } from 'react-icons/rx';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@nextui-org/react';
import DropdownComponent from '../Dropdown/Dropdown';
import { useLocale, useTranslations } from 'next-intl';
import { IoGlobe } from 'react-icons/io5';
import { useRouter } from '@/navigation';

const Navigation = () => {
  const navbarTranslation = useTranslations('Navbar');
  const headerTranslation = useTranslations('Header');
  const t = useTranslations('Landing');

  const path = usePathname();
  const router = useRouter();
  const locale = useLocale();
  const otherLocale = locale === 'en' ? 'de' : 'en';

  const [selectedKeys, setSelectedKeys] = useState<any>(
    new Set([locale === 'en' ? 'english' : 'germen'])
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showAdd, setShowAdd] = useState<boolean>(true);

  const [Show, setShow] = useState<boolean>(false);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY < lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  });
  return (
    <>
      <Wrapper
        style={`w-full md:h-[6rem]  ${
          isOpen ? 'h-full' : 'h-[5rem]'
        } md:sticky top-0 z-[500] transition-all duration-1000 ${
          Show && 'md:-top-[6rem] text-black-text'
        } bg-white `}>
        <nav className='w-full h-full flex gap-5 justify-between md:justify-start items-center px-2 py-2 md:py-0'>
          {/* Logos*/}
          <Link
            href={'/'}
            className='md:w-[10rem] w-[4rem] md:h-[5rem] h-[4.7rem] relative'>
            <Image src={'/Logo.png'} alt='' fill className='object-contain' />
          </Link>

          {/* Navigation Links */}
          <div className='w-full h-full hidden md:flex justify-between items-center gap-[5rem] flex-nowrap'>
            <div className='w-full h-full hidden md:flex md:gap-5 lg:gap-7 justify-start items-center flex-nowrap'>
              {StaticData.Navigation.map((itm: any, idx: number) => {
                return itm.name === 'Business Typen' ? (
                  <DropdownComponent
                    key={idx}
                    DropdownTitle={navbarTranslation('Business Typen')}
                    item={itm.subLink}
                  />
                ) : (
                  <Link
                    href={itm.link}
                    key={idx}
                    className='relative text-xl break-keep font-semibold whitespace-nowrap group capitalize'>
                    <span className='pb-2'>{navbarTranslation(itm.name)}</span>
                    <span className='absolute inset-x-0 bottom-0 h-[2.5px] bg-primaryDark transform origin-left scale-x-0 transition-transform group-hover:scale-x-100'></span>
                  </Link>
                );
              })}
            </div>
          </div>
          <div className='flex items-center gap-1'>
            <div className='pr-2 md:pr-7'>
              <Dropdown>
                <DropdownTrigger>
                  <div className='relative w-[2rem] h-[2rem]'>
                    <Image
                      src={locale === 'en' ? '/us_flag.svg' : '/germany_flag.svg'}
                      alt=''
                      fill
                    />
                  </div>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label='Single selection example'
                  disallowEmptySelection={false}
                  selectionMode='single'
                  selectedKeys={selectedKeys}
                  //@ts-ignore
                  onSelectionChange={setSelectedKeys}>
                  <DropdownItem
                    key='english'
                    className='py-0'
                    onClick={() => router.push(path, { locale: otherLocale })}>
                    <div className='inline-flex items-center gap-3'>
                      <Image src={'/us_flag.svg'} alt='' width={30} height={30} />
                      <p>English</p>
                    </div>
                  </DropdownItem>
                  <DropdownItem
                    key='germen'
                    className='py-0'
                    onClick={() => router.push(path, { locale: otherLocale })}>
                    <div className='inline-flex items-center gap-3'>
                      <Image src={'/germany_flag.svg'} alt='' width={30} height={30} />
                      <p>Germen</p>
                    </div>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>

            <div
              className='block md:hidden text-2xl'
              onClick={() => setIsOpen((prev) => !prev)}>
              {isOpen ? <RxCross2 /> : <FaBars />}
            </div>
          </div>
        </nav>
        {/* Drawer will show on small screen */}
        {isOpen && (
          <div className='md:hidden w-full h-full py-4'>
            <div className='w-full h-full flex flex-col justify-start items-start'>
              {StaticData.Navigation.map((itm: any, idx: number) => {
                return itm.name === 'Business Typen' ? (
                  itm.subLink.map((itm: any, idx: number) => (
                    <div key={idx} className='py-3 w-full border-b'>
                      <Link
                        href={itm.link}
                        className='w-full text-xl hover:text-primaryDark text-black-main hover:underline font-semibold'>
                        {navbarTranslation(itm.name)}
                      </Link>
                    </div>
                  ))
                ) : (
                  <div key={idx} className='py-3 w-full border-b'>
                    <Link
                      href={itm.link}
                      className='w-full text-xl hover:text-primaryDark text-black-main hover:underline font-semibold'>
                      {navbarTranslation(itm.name)}
                    </Link>
                  </div>
                );
              })}
            </div>
            <Button
              className='rounded-3xl text-xl bg-primary hover:bg-primaryDark text-white px-4 py-4 font-semibold mt-2 flex justify-center w-full outline-none border-none focus:outline-none focus:border-none'
              type='button'>
              {t('TryButton')}
            </Button>
          </div>
        )}
      </Wrapper>
      <Wrapper
        style={`${
          showAdd ? 'block' : 'hidden'
        } bg-black-main md:bg-transparent py-4 sm:py-4 md:py-6 `}>
        <div
          className={`${
            showAdd ? 'block' : 'hidden'
          } w-full flex justify-between items-center bg-black-main md:px-8 md:py-5 text-white text-lg md:text-xl rounded-[1rem] md:rounded-[5rem] md:mt-2`}>
          <p>
            {headerTranslation('HeaderText')} 🔥
            <span className='underline'>{headerTranslation('UserLinedHeaderText')}</span>
            ➡️
          </p>
          <div
            onClick={() => {
              setShowAdd(false);
            }}
            className='text-xl md:text-3xl'>
            <RxCross2 />
          </div>
        </div>
      </Wrapper>
    </>
  );
};

export default Navigation;
