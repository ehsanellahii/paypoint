'use client';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import React from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/react';
import { useRouter } from '@/navigation';

const DropdownComponent = ({
  DropdownTitle,
  item,
}: {
  DropdownTitle: string;
  item: any[];
}) => {
  const router = useRouter();
  const navbarTranslation = useTranslations('Navbar');
  return (
    <Dropdown>
      <DropdownTrigger className='capitalize text-xl break-keep font-bold whitespace-nowrap group'>
        {DropdownTitle}
      </DropdownTrigger>
      <DropdownMenu aria-label='Dynamic Actions' items={item}>
        {(item: any) => (
          <DropdownItem
            key={item.name}
            color={'default'}
            className={''}
            onClick={() => {
              router.push(item.link);
            }}>
            <Link href={item.link} className='capitalize'>
              {navbarTranslation(item.name)}
            </Link>
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownComponent;
