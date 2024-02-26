import { Link } from '@/navigation';
import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { RiArrowDownSLine } from 'react-icons/ri';

interface Props {
  Items: any;
}

function FullWidthNavDropdown({ Items }: Props) {
  return (
    <div className='Full_Menu flex justify-center items-center h-[100%]'>
      <button className='relative text-xl  break-keep font-semibold whitespace-nowrap group capitalize'>
        <span className='inline-flex gap-3 items-center'>
          {Items.Title}
          <span className='arrow'>
            <IoIosArrowDown size={20} />
          </span>
        </span>
        <span className='absolute inset-x-0 bottom-0 h-[2.5px] bg-primaryDark transform origin-left scale-x-0 transition-transform group-hover:scale-x-100'></span>
      </button>

      <div
        className='absolute bg-white hidden z-[9999999] max-w-[80%] mx-auto py-8 px-12 top-[70px] left-0 right-0 justify-center items-center'
        style={{ boxShadow: 'rgba(0,0,0,.2) 2px 2px 5px' }}>
        <div className=' w-full h-full flex flex-col'>
          <h2 className='font-inter font-[700] text-medium  mb-4 uppercase'>
            {Items.Category1.Title}
          </h2>
          <div className='flex justify-start items-start flex-col gap-2'>
            {Items.Category1.Items.map((item: any, index: number) => {
              return (
                <Link
                  key={index}
                  href={item.Route}
                  className='font-inter font-normal text-black-cool text-[.875rem] leading-[1.25rem] hover:underline hover:text-main-brand cursor-pointer'>
                  {item.Name}
                </Link>
              );
            })}
          </div>
        </div>
        {/* <div className=' w-[20%] h-full flex flex-col'>
          <h2 className='font-inter font-[700] text-[13px] text-black-off mb-4 uppercase'>
            {Items.Category2.Title}
          </h2>
          <div className='flex justify-start items-start flex-col gap-2'>
            {Items.Category2.Items.map((item: any, index: number) => {
              return (
                <Link
                  key={index}
                  href={item.Route}
                  className='font-inter font-normal text-black-cool text-[.875rem] leading-[1.25rem] hover:underline hover:text-main-brand cursor-pointer'>
                  {item.Name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className=' w-[20%] h-full flex flex-col'>
          <h2 className='font-inter font-[700] text-[13px] text-black-off mb-4 uppercase'>
            {Items.Category3.Title}
          </h2>
          <div className='flex justify-start items-start flex-col gap-2'>
            {Items.Category3.Items.map((item: any, index: number) => {
              return (
                <Link
                  key={index}
                  href={item.Route}
                  className='font-inter font-normal text-black-cool text-[.875rem] leading-[1.25rem] hover:underline hover:text-main-brand cursor-pointer'>
                  {item.Name}
                </Link>
              );
            })}
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default FullWidthNavDropdown;
