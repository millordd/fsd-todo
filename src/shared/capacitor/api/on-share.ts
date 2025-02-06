import { Share } from '@capacitor/share';
import { ShareResult } from '@capacitor/share/dist/esm/definitions';

import { IShare } from '../types';

export const onShare = (data: IShare): Promise<ShareResult> => {
  return Share.share(data);
};
