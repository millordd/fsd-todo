import { InputHTMLAttributes } from 'react';
import style from './style.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {}

export const Radio = (props: Props) => {
  const { id, className, ...rest } = props;
  const uuid = id || String(Math.random() * 1_000);

  return (
    <div className={[className, style.root].join(' ')}>
      <label htmlFor={uuid} className={style.radio}>
        <div />
      </label>
      <input type="radio" id={uuid} {...rest} />
    </div>
  );
};
