// Dropdown.js

import React, { useState } from 'react';
import './ManualDropdown.css';
import { useTranslations } from 'next-intl';
import { Link } from '@/navigation';
import { IoIosArrowDown } from 'react-icons/io';
const ManualDropdown = ({
  options,
  onSelect,
  title,
}: {
  title: any;
  options: any;
  onSelect: any;
}) => {
  const t = useTranslations('Navbar');
  const [selectedOption, setSelectedOption] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: any) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(!isOpen);
  };
  console.log(isOpen);
  return (
    <div className='dropdown'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='relative text-xl break-keep font-semibold whitespace-nowrap group capitalize'>
        {title}
        <span className={`arrow ${isOpen ? 'open rotate-180' : ''}`}>
          <IoIosArrowDown />
        </span>
      </button>
      {isOpen && (
        <ul className='dropdown-list flex w-full rounded-lg shadow-sm justify-center items-start px-4 py-4 flex-col gap-2 border border-appBg'>
          {options.map((option: any) => (
            <Link
              href={option.link}
              key={option.id}
              className={`capitalize text-black-text font-semibold whitespace-nowrap group`}
              onClick={() => handleOptionClick(option)}>
              {t(option.name)}
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ManualDropdown;
