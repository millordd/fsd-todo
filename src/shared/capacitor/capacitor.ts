import { registerPlugin } from '@capacitor/core';

import { ICapacitorCommon } from './types';

export const capacitorCommon = registerPlugin<ICapacitorCommon>('Common');

export const capacitorKeyboard = registerPlugin<any>('Keyboard');
