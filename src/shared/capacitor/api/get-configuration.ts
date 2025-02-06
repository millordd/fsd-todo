import { capacitorCommon } from '../capacitor';
import { LANGUAGES } from '../../config';

export const getConfiguration = async () => {
  const { language, theme } = await capacitorCommon.configuration();
  return {
    language: LANGUAGES.includes(language) ? language : LANGUAGES[0],
    theme,
  };
};
