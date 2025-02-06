import { onCloseProject } from 'shared/capacitor';

import style from './style.module.scss';
import { BUTTONS_LOCALE } from './constants';

export const Footer = ({ locale }: { locale: string }) => {
  const { refresh, close } = BUTTONS_LOCALE[locale];
  const handleRefresh = () => window?.location.reload();
  const handleClose = () => onCloseProject();

  return (
    <div className={style.footer}>
      <button onClick={handleRefresh} className={style.refresh}>
        {refresh}
      </button>
      <button className={style.close} onClick={handleClose}>
        {close}
      </button>
    </div>
  );
};
