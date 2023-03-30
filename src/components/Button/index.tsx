import React from 'react';
import { ButtonStyles } from './Button.styles';
import { type ButtonProps } from './Button.interface';

export const Button: React.FC<ButtonProps> = ({ text, action }) => {
  return <ButtonStyles onClick={action}>{text}</ButtonStyles>;
};
