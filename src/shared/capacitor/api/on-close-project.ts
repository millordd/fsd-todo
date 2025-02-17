import { capacitorCommon } from '../capacitor';

export const onCloseProject = async (): Promise<void> => {
  return capacitorCommon.close();
};
