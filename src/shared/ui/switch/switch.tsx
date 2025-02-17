import { ChangeEvent } from 'react';

import style from './style.module.scss';
import { ISwitchProps } from './types';
export const Switch = (props: ISwitchProps) => {
  const { checked, disabled = false, onChange, id, name } = props;

  const uuid = id || `${Math.random()}`;
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <label className={style.root} htmlFor={uuid}>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        name={name}
        id={uuid}
      />
      <span className={style.slider} />
    </label>
  );
};
