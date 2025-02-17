import { useEffect, useState } from 'react';

import { getConfiguration } from 'shared/capacitor';

import style from './style.module.scss';
import { WarningIcon } from './_components/warning-icon';
import { Info } from './_components/info';
import { Footer } from './_components/footer';

export const ServerErrorPage = () => {
  const [locale, setLocale] = useState('ru');

  useEffect(() => {
    (async () => {
      try {
        const { language } = await getConfiguration();
        setLocale(language);
      } catch (e) {
        setLocale('ru');
      }
    })();
  }, []);

  return (
    <div className={style.root}>
      <WarningIcon />
      <Info locale={locale} />
      <Footer locale={locale} />
    </div>
  );
};
