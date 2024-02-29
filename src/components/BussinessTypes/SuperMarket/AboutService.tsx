import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import TextLink from './TextLink';

type PropsType = {
  headerTitle: string;
  about: { text: string; bold?: boolean; underline?: boolean; linkUrl?: string }[];
};

const AboutService = ({ headerTitle, about }: PropsType) => {
  const t = useTranslations('Common');

  return (
    <section className='w-full h-full py-8 md:py-12 space-y-4 md:space-y-6'>
      <h1 className='font-semibold text-[2rem] md:text-[3rem] md:leading-[3rem] text-center px-2 d:max-w-[90%] lg:max-w-[55%] mx-auto'>
        {t(headerTitle)}
      </h1>
      <article className='w-full h-full md:max-w-[90%] lg:max-w-[85%] mx-auto flex flex-col gap-6 md:gap-8'>
        <div className='w-full h-full md:max-w-[90%] md:mx-auto'>
          <p className='text-black-text text-center text-lg px-4 '>
            {about.map((item, index) =>
              item.linkUrl ? (
                <TextLink key={index} text={t(item.text)} linkUrl={item.linkUrl} />
              ) : (
                <span
                  key={index}
                  className={`${item.bold ? 'font-bold' : ''} ${item.underline ? 'underline decoration-primaryDark underline-offset-4' : ''} ${index === 0 ? 'pr-1' : index === about.length - 1 ? 'pl-1' : 'px-1'}`}>
                  {t(item.text)}
                </span>
              )
            )}
          </p>
        </div>
      </article>
    </section>
  );
};

export default AboutService;
