import React from 'react';
import Wrapper from '../shared/Wrapper';
import Heading from '../shared/Heading/Heading';

const History = () => {
  return (
    <Wrapper style='bg-white-main py-8 md:py-16'>
      {/* History */}
      <article className='w-full h-full flex flex-col justify-center items-center gap-3 px-4 py-8 md:py-12  '>
        <Heading text='Unsere Geschichte' />
        <p className='text-center text-xl text-black-text mt-4'>
          Plattformen, die es Menschen ermöglichen, ihr gesamtes Business abzubilden und
          alle ihre Arbeitsabläufe zu digitalisieren, waren für uns schon immer etwas
          Magisches.
        </p>
        <p className='text-center text-xl text-black-text'>
          Im heutigen No-Code/Low-Code Markt sind leistungsstarke Plattformen mit einer
          starken generischen Datenbank, einem brillanten App-Creator, vielen
          verschiedenen Feldtypen und übersichtlichen Datensätzen mit unterschiedlichen
          Ansichtsoptionen eher selten zu finden.
        </p>
        <p className='text-center text-xl text-black-text'>
          Eine Plattform zu finden, die eine innovative Technologie und eine moderne
          Schnittstelle mit einem solchen Kraftpaket kombiniert, ist scheinbar unmöglich.
          Deshalb haben wir angefangen, das Unmögliche zu bauen
        </p>
        <p className='text-center text-xl text-black-text'>
          Nachdem wir die größten technischen Herausforderungen gemeistert haben, ist es
          Zeit durchzustarten. Wir wollen zur #1 Low-Code-Business-Plattform werden und es
          unserer Community ermöglichen zu noch besseren “Buildern” zu werden. Mit
          innovativer Technologie und einem modernen User Interface.
        </p>
      </article>
    </Wrapper>
  );
};

export default History;
