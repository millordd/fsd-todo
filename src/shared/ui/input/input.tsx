import { useRef } from 'react';

import style from './style.module.scss';
import { IInputProps } from './types';

export const Input = (props: IInputProps) => {
  const {
    label,
    help,
    leftElement,
    rightElement,
    error,
    className,
    id,
    variant = 'standard',
    disabled,
    onClick,
    readonly,
    ...rest
  } = props;

  const ref = useRef<HTMLInputElement>(null);

  const uuid = id || `${Math.random()}`;

  const handleClick = () => {
    if (ref.current && readonly) {
      onClick && onClick();
      ref.current.blur();
    }
  };

  const root = [
    style.root,
    style.m,
    variant === 'standard' && style.standard,
    variant === 'outlined' && style.outlined,
    disabled && style.disabled,
    error && style.error,
    className && className,
  ].join(' ');

  return (
    <div className={root}>
      <label htmlFor={uuid} className={style.label}>
        {label}
      </label>
      <div className={style.inputWrapper}>
        <div className={style.left}>{leftElement}</div>
        <input {...rest} ref={ref} onClick={handleClick} id={uuid} />
        <div className={style.right}>{rightElement}</div>
      </div>
      <p className={style.help}>{help}</p>
    </div>
  );
};
