import React from 'react';

const Wrapper = ({
  id,
  children,
  style,
}: {
  id?: string;
  children: React.ReactNode;
  style?: string;
}) => {
  return (
    <section id={id} className={style}>
      <div className='w-full h-full max-w-[1320px] mx-auto px-4 relative'>{children}</div>
    </section>
  );
};

export default Wrapper;
