import { capacitorKeyboard } from '../capacitor';

export const getKeyboardHeight = (): Promise<number> => {
  return new Promise((resolve) => {
    capacitorKeyboard?.addListener('keyboardDidShow', (info: {keyboardHeight: number}) => {
      resolve(info?.keyboardHeight || 0);
    });
  })
};


export const getKeyboardClose = (): Promise<number> => {
  return new Promise((resolve) => {
    capacitorKeyboard.hide();
    capacitorKeyboard?.addListener('keyboardDidHide', () => {
      resolve(0);
    });
  })
}
