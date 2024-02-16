'use client';
import Wrapper from '@/components/shared/Wrapper';
import React, { ChangeEvent, FormEvent, useState } from 'react';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/navigation';
import BusinessType from './Tabs/BusinessType';

const Contactus = () => {
  const { push } = useRouter();
  const [openPopup, setOpenPopUp] = useState<boolean>(false);
  console.log(openPopup);
  const t = useTranslations('Pricing');
  const [loading, setLoading] = useState(false);
  const [Inputs, setInputs] = useState({
    Country: '',
    StoreType: '',
    StoreName: '',
    NumberOfLocations: '',
    POS: '',
    FirstName: '',
    LastName: '',
    PhoneNumber: '',
    BusinessEmail: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setOpenPopUp(true);
    // setLoading(true);
    // const Data = {
    //   store_type: Inputs.StoreType,
    //   country: Inputs.Country,
    //   store_name: Inputs.StoreName,
    //   no_of_stores: Inputs.NumberOfLocations,
    //   pos_kind: Inputs.POS,
    //   first_name: Inputs.FirstName,
    //   last_name: Inputs.LastName,
    //   phone_number: Inputs.PhoneNumber,
    //   business_email: Inputs.BusinessEmail,
    //   contacted_at: serverTimestamp(),
    // };
    // try {
    //   await CommonApi.storeDataInCollection('UsersContacted', Data);
    // } catch (error) {
    //   console.log(error);
    // }
    // setLoading(false);
  };
  return (
    <Wrapper style='w-full h-full bg-bgApp '>
      <BusinessType />
    </Wrapper>
  );
};

export default Contactus;
