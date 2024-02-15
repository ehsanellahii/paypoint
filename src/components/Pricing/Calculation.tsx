import React, { useState } from 'react';
import Wrapper from '../shared/Wrapper';
import { Select, SelectItem } from '@nextui-org/react';
import { StaticData } from '@/constants/Static';
import { useTranslations } from 'next-intl';

const Calculation = () => {
  const t = useTranslations('Pricing');
  const [values, setValues] = useState({
    portalProvision: new Set(['14']),
    bestelLungen: new Set(['1500']),
    bestellWert: new Set(['50']),
  });
  const portalProvisionOptions = Array.from({ length: 11 }, (_, index) => ({
    label: `Portalprovision ${7 + index}%`,
    value: `${7 + index}`,
  }));
  const calculateTotal = (v1: number, v2: number, v3: number) => {
    const initial = v2 * v3;
    const total = initial * (v1 / 100);
    return total.toFixed(2);
  };
  return (
    <Wrapper style='bg-white-lightOrange w-full h-full py-10 '>
      <section className='w-full h-full md:max-w-[85%] mx-auto bg-white-main px-4'>
        <article className='w-full h-full grid md:grid-cols-[70fr,30fr] gap-4 md:gap-0 place-items-center py-8 px-4'>
          <div className='w-full h-full flex flex-col gap-4'>
            <h5 className='w-full h-full font-bold text-xl'>
              {t('Wähle selbst: Wie viel sparst du mit dem Paypoint Webshop?')}
            </h5>
            <div className='w-full h-full flex flex-col items-center md:flex-row md:justify-start md:flex-wrap lg:flex-nowrap gap-3 px-4 md:pl-0 md:pr-[3rem] lg:pr-[4rem]'>
              <Select
                variant='bordered'
                placeholder='Select an Portal Provision'
                selectedKeys={values.portalProvision}
                className='max-w-xs'
                onSelectionChange={(value: any) => {
                  setValues((prev) => ({ ...prev, portalProvision: value }));
                }}>
                {portalProvisionOptions.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {`${t('portalProvision')} ${item.value}%`}
                  </SelectItem>
                ))}
              </Select>
              <Select
                variant='bordered'
                placeholder='Select an BestelLungen'
                selectedKeys={values.bestelLungen}
                className='max-w-xs'
                onSelectionChange={(value: any) => {
                  setValues((prev) => ({ ...prev, bestelLungen: value }));
                }}>
                {StaticData.Pricing.Bestellungen.map((value) => (
                  <SelectItem key={value.value} value={value.value}>
                    {`${value.value} ${t('Bestellungen pro Monat')}`}
                  </SelectItem>
                ))}
              </Select>
              <Select
                aria-label='Bestell Wert'
                variant='bordered'
                placeholder='Select an Bestell Wert'
                selectedKeys={values.bestellWert}
                className='max-w-xs'
                onSelectionChange={(value: any) => {
                  setValues((prev) => ({ ...prev, bestellWert: value }));
                }}>
                {StaticData.Pricing.Bestellwert.map((item) => (
                  <SelectItem key={item.value} value={item.value}>
                    {`${t('Bestell Wert')} ${item.value}€`}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <p className='text-grey-text font-medium text-center mt-4 text-sm italic'>
              *{t('Beispiel für 100% Bestellungen über den eigenen Webshop')}
            </p>
          </div>
          <div className='w-full h-full flex flex-col items-center md:items-start gap-4'>
            <h5 className='font-bold text-xl'> {t('Potentielle Ersparnis')}*</h5>
            <div className='flex justify-center flex-col'>
              <p className='font-bold text-3xl text-main-brand'>
                {calculateTotal(
                  parseInt(Array.from(values.portalProvision)[0], 10),
                  parseInt(Array.from(values.bestelLungen)[0], 10),
                  parseInt(Array.from(values.bestellWert)[0], 10)
                )}
                €
              </p>
              <p className='text-grey-pText text-center md:text-start text-sm'>{t('monatlich')}</p>
            </div>
          </div>
        </article>
      </section>
    </Wrapper>
  );
};

export default Calculation;
