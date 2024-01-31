import React from 'react';
import Wrapper from '../shared/Wrapper';
import { Heading } from './Pricing';

const SavingInformation = () => {
  return (
    <Wrapper style='bg-white-main py-8 md:py-16'>
      <section className='w-full h-full '>
        <Heading text='Dein Spar-Potenzial als Lieferdienst -' />
        <Heading text='du möchtest 15.372€ und mehr im Jahr sparen?' />
        <div className='w-full h-full py-6 text-grey-text'>
          <p>
            Das Shopsystem hilft Dir, Kunden von Portalen zu Deinen Stammkunden zu machen.
            Das bedeutet mehr Umsatz im eigenen Shop und weniger Provisionen zahlen. Denn
            bei order smart fallen keine Provisionen an.
          </p>
          <p>
            So geht&lsquo;s: Angenommen, du machst mit den Bestellungen über die Portale
            einen Umsatz von 10.000 € im Monat. Bei 14% zahist du 1.400 € Provision an die
            Portale. Und das jeden Monat
          </p>
        </div>
        <div className='h-[1px] bg-main-brand max-w-[20%] mx-auto text-center my-4 mb-6'></div>
        <Heading text='Gesamtumsatz Lieferdienst 10.000€ im Monat' />
        <Heading text='14% = 1.400 Euro Provision → 16.800 Euro Provisionen im Jahr' />
      </section>
    </Wrapper>
  );
};

export default SavingInformation;
