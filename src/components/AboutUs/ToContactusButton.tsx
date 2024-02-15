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
      onClick={() => router.push('/contact')}
      color='primary'
      className='flex gap-3 text-white-main bg-primaryDark text-2xl py-8 px-6'>
      <FaAngleRight /> {t('Zim Kontaktformular')}
    </Button>
  );
};

export default ToContactUsButton;
