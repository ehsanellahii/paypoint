'use client';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

interface ITextLinkType {
  text: string;
  linkUrl: string;
  style?: string;
}

const TextLink: React.FC<ITextLinkType> = ({ text, linkUrl, style }) => {
  const [baseUrl, setBaseUrl] = useState('');
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const baseUrlValue = window.location.origin;
      setBaseUrl(baseUrlValue);
    }
  }, []);

  const locale = useLocale();
  return (
    <Link
      href={`${baseUrl}/${locale}/${linkUrl}`}
      className={`font-bold underline decoration-primaryDark inline-block underline-offset-4 decoration-2 ${style}`}>
      {text}
    </Link>
  );
};

export default TextLink;
