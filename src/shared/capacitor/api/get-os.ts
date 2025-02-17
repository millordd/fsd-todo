import { IOS } from '../types';

export const getOs = (): IOS => {
  const userAgent = navigator.userAgent || navigator.vendor;
  if (/android/i.test(userAgent)) {
    return 'Android';
  }
  /*else if (/iPad|iPhone|iPod/.test(userAgent)) {
        return "iOS";
    }*/
  return 'iOS';
};
