import { useNavigate } from 'react-router-dom';

import { Button } from 'shared/ui';
import { onCloseProject } from 'shared/capacitor';

import { BUTTONS_LOCALE } from './constants';

export const Footer = ({ locale }: { locale: string }) => {
  const { refresh, main } = BUTTONS_LOCALE[locale];
  const navigate = useNavigate();

  const handleRefresh = () => navigate(-1);

  return (
    <div className="mt-5 w-full">
      <Button onClick={handleRefresh} className="w-full">
        {refresh}
      </Button>
      <Button color="transparent" className="w-full" onClick={onCloseProject}>
        {main}
      </Button>
    </div>
  );
};
