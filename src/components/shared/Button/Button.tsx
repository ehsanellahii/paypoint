import React from 'react';
import { Button } from '@nextui-org/react';

type ButtonProps = {
  text: string;
  className?: string;
};

const ButtonComponent = ({ text, className }: ButtonProps) => {
  return <Button className={`rounded-lg ${className}`}>{text}</Button>;
};

export default Button;
