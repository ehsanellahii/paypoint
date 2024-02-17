'use client';
import { Link } from '@/navigation';
import { useTranslations } from 'next-intl';
import React from 'react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from '@nextui-org/react';
import { useRouter } from '@/navigation';
import { IoIosArrowDown } from 'react-icons/io';

const DropdownComponent = ({
  DropdownTitle,
  item,
}: {
  DropdownTitle: string;
  item: any[];
}) => {
  const router = useRouter();
  const navbarTranslation = useTranslations('Navbar');
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <Dropdown
      onOpenChange={(value: boolean) => {
        setIsOpen(value);
      }}>
      <DropdownTrigger className='capitalize text-xl break-keep font-bold whitespace-nowrap group'>
        <div className='flex items-center gap-3'>
          <h6>{DropdownTitle}</h6>
          <span className={`arrow ${isOpen ? 'open rotate-180' : ''}`}>
            <IoIosArrowDown />
          </span>
        </div>
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
