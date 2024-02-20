'use client';
import { useRouter } from '@/navigation';
import { Button } from '@nextui-org/react';
import { useTranslations } from 'next-intl';
import { FaAngleRight } from 'react-icons/fa';

const ToContactUsButton = () => {
  const router = useRouter();
  const t = useTranslations('Aboutus');
  return (
    <Button
      type='button'
      onClick={() => router.push('/tryforfree')}
      color='primary'
      className='flex gap-3 text-white bg-primaryDark text-lg md:text-xl rounded-[4rem]  font-bold py-6'>
      <FaAngleRight /> {t('Zim Kontaktformular')}
    </Button>
  );
};

export default ToContactUsButton;
