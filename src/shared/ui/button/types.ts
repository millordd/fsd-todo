import { ButtonHTMLAttributes } from 'react';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?:
    | 'primary'
    | 'white'
    | 'transparent'
    | 'standard'
    | 'outlined'
    | 'secondary';
  size?: 'm';
  to?: string;
}
