import { useLayoutEffect } from 'react';

import { getConfiguration } from 'shared/capacitor';

export interface Props {
  children: React.ReactNode;
  switcher: boolean;
}

export const ConfigurationProvider = (props: Props) => {
  const { children, switcher } = props;

  useLayoutEffect(() => {
    if (!switcher) return;
    (async () => {
      try {
        const { theme } = await getConfiguration();
        document.body.classList.add(theme);
      } catch (e) {
        document.body.classList.remove('dark');
      }
    })();
  }, [switcher]);

  return <>{children}</>;
};
