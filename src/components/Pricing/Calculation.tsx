import React from 'react';
import Wrapper from '../shared/Wrapper';

const Calculation = () => {
  return (
    <Wrapper style='bg-white-lightOrange w-full h-full py-10 '>
      <section className='w-full h-full md:max-w-[85%] mx-auto bg-white-main px-4'>
        <article className='w-full h-full grid md:grid-cols-[70fr,30fr] gap-4 md:gap-0 place-items-center py-8 px-4'>
          <div className='w-full h-full flex flex-col gap-4'>
            <h5 className='w-full h-full font-bold text-xl'>
              Wähle selbst: Wie viel sparst du mit dem SIDES Webshop?
            </h5>
            <div className='w-full h-full flex flex-col md:flex-row gap-3'>
              <div></div> <div></div>
              <div></div>
              {/* <SelectField placeholder='Portalprovision 14%' />
                <SelectField placeholder='1500 Bestellungen pro Monat' />
                <SelectField placeholder='Bestellwert 25€' /> */}
            </div>
            <p className='text-grey-text font-medium text-center mt-4 text-sm italic'>
              *Beispiel für 100% Bestellungen über den eigenen Webshop
            </p>
          </div>
          <div className='w-full h-full flex flex-col items-center md:items-start gap-4'>
            <h5 className='font-bold text-xl'> Potentielle Ersparnis*</h5>
            <div className='flex justify-center flex-col'>
              <p className='font-bold text-3xl text-main-brand'>0.00€</p>
              <p className='text-grey-pText text-start text-sm'>monatlich</p>
            </div>
          </div>
        </article>
      </section>
    </Wrapper>
  );
};

export default Calculation;
