import Image from 'next/image';
import React from 'react';
import Heading from '../shared/Heading/Heading';
import { useTranslations } from 'next-intl';

const AboutService = ({ headerTitle, about }: { headerTitle: string; about: string }) => {
  const t = useTranslations('Common');
  return (
    <article className='w-full h-full py-8 md:py-12 md:max-w-[80%] mx-auto flex flex-col gap-6 md:gap-8'>
      <div className='w-full h-full'>
        <Heading
          text={t('Für volle Teller und stressfreien Service')}
          style='text-black-text text-center break-normal'
        />
        <p className='text-black-text text-center  md:text-base px-4 mt-5 md:mt-7'>
          {t(
            'Vereinfache deine Bestellaufnahme! Mit der mobilen Kasse nimmst du Bestellungen im Restaurant schneller entgegen Alle Bestellkanäle laufen direkt in der SIDES Restaurant Software zusammen, egal ob Bestellung an der Theke, per QR-Code oder online Das entlastet deinen in-House Betrieb und verringert deine Fehlerquote  Die automatische Übertragung von Bestellungen an den Küchenmanager ermöglicht die schnellere Abarbeitung von Bestellungen'
          )}
        </p>
      </div>

      <div className='w-full h-full md:max-w-[90%] lg:max-h-[20rem] mx-auto grid md:grid-cols-2 gap-2 px-4 md:px-0'>
        <div className='w-full h-full md:max-w-full p-8 md:px-12 py-8 space-y-6 bg-blue-teal rounded-lg '>
          <p className='text-left avalon-heading text-xl text-white-main'>
            „
            {t(
              'Mit der PayPoint Lieferdienst Software bekomme ich alles mit Ich kann alle Bestellungen immer in Verbindung mit den Lieferzeiten nachvollziehen und sehe genau, welche Bestellungen noch offen sind'
            )}
            “
          </p>
          <p className='text-white-main'>
            <span className='avalon-heading'>- Björn Tischler</span>, Geschäftsführer bei
            Diazo
          </p>
        </div>
        <div className='w-full h-full  md:max-w-full grid grid-cols-2 gap-2'>
          <div className='w-full h-[10rem] md:h-full bg-white-snow flex justify-center items-center px-4 rounded-lg'>
            <h1
              className='font-bold text-[1.5rem] md:text-[2.5rem] uppercase underline decoration-2'
              style={{ fontFamily: 'Times New Roman' }}>
              Diazo
            </h1>
          </div>
          <div className='w-full min-h-[10rem] md:h-full rounded-lg'>
            <div
              className='w-full h-full relative rounded-lg'
              style={{
                backgroundImage: "url('/Assets/Restaurant/paypoint-owner.png')",
                backgroundPosition: 'top',
                backgroundSize: 'cover',
              }}></div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default AboutService;
