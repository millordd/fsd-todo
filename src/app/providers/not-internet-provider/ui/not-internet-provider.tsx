import { ReactNode, useEffect, useState } from 'react';

import { getConfiguration } from 'shared/capacitor';

import { WarningIcon } from './_components/warning-icon';
import { Info } from './_components/info';
import { Footer } from './_components/footer';
import style from './style.module.scss';

interface Props {
  children: ReactNode;
}

export const NotInternetProvider = ({ children }: Props) => {
  const [locale, setLocale] = useState('ru');
  const [isOnline, setIsOnline] = useState(window.navigator.onLine);

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

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  if (isOnline) return children;

  return (
    <div className={style.root}>
      <WarningIcon />
      <Info locale={locale} />
      <Footer locale={locale} />
    </div>
  );
};
