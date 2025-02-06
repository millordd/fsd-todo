import { Icon, IconName } from 'shared/icons';

import { ITagProps } from './types';
import style from './style.module.scss';

export const Tag = (props: ITagProps) => {
  const { tag, onClick, className } = props;
  return (
    <button className={[className, style.root].join(' ')} onClick={onClick}>
      {tag}
      <Icon name={IconName.chevron} className="size-3 -rotate-90" />
    </button>
  );
};
