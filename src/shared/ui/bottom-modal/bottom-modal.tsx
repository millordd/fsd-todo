import style from './style.module.scss';
import { IBottomModalProps } from './types';

import { Icon, IconName } from '../../icons';

export const BottomModal = (props: IBottomModalProps) => {
  const { onClose, open, children, title } = props;

  if (!open) return null;

  return (
    <div className={style.root} onClick={onClose}>
      <div className={style.children} onClick={(e) => e.stopPropagation()}>
        {Boolean(title) && (
          <div className={style.titleWrapper}>
            <h1>{title}</h1>
            <Icon name={IconName.closeX} onClick={onClose} />
          </div>
        )}
        {children}
      </div>
    </div>
  );
};
