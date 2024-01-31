'use client';
import React from 'react';

import Wrapper from '../shared/Wrapper';
import Hero from './Hero';
import Features from './Features';
import ContentOnLeftVideoOnRight from './ContentOnLeftVideoOnRight';
import ContentOnRightVideoOnLeft from './ContentOnRightVideoOnLeft';
import Testimonial from './Testimonial';
import { useTranslations } from 'next-intl';

const Home = () => {
  const t = useTranslations('Landing');
  return (
    <>
      {/* Hero Section */}
      <Hero />
      {/* Features Section */}
      <Features />
      <div className='w-full h-full flex flex-col gap-3 '>
        <ContentOnRightVideoOnLeft
          title='Deine eigene App und Webshop Individuell und unabhängig'
          text='Fange ganz einfach an zu bauen Der Template- Markt und das intuitive Design von Tape ermöglichen es dir, selbst komplexe Anforderungen abzubilden'
          ImageUrl='/Assets/Home/web.webp'
        />
        <ContentOnLeftVideoOnRight
          title='Automatisiere Deine Touren 5x Schnellere Effizienz'
          text='Hier sind alle deine Bestellungen in einer Umfassenden Übersicht Einfaches Fahrer- Tracking und Auswertung der Effizienz'
          ImageUrl='/Assets/Home/maps.png'
        />
        <ContentOnRightVideoOnLeft
          title='Alles im Überblick Genau das was du willst'
          text='Das System bündelt alle Bestellungen der Filialen automatisch, und zeigt sie in einer Übersicht an, inklusive Tagesumsatz, Arbeitszeiten der Mitarbeiter:innen uvm'
          ImageUrl='/Assets/Home/dashboard.png'
        />
        <ContentOnLeftVideoOnRight
          title='Real-Time Tracking Der Lieferungen'
          text='Schnellere Auftragsvergabe über die Fahrer-App für Fahrer:innen in der Nähe Lieferung in unter 30 Minuten dank automatischer TourenplanungEBIKE DELIVERY'
          video='/Assets/Home/real_time.mp4'
        />
      </div>
      {/* Reviews */}
      <Testimonial />
    </>
  );
};

export default Home;
