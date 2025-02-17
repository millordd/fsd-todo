import { Link } from 'react-router-dom';

import { IButtonProps } from './types';
import style from './style.module.scss';
export const Button = (props: IButtonProps) => {
  const {
    size = 'm',
    to,
    color = 'primary',
    children,
    className,
    ...rest
  } = props;

  const styles = () => {
    const cn = [style.root, style[size], style[color]];
    return cn.join(' ') + ' ' + (className || '');
  };

  if (to) {
    return (
      <Link to={to} className={styles()}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles()} {...rest}>
      {children}
    </button>
  );
};
