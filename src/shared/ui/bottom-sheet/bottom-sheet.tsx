import { BottomSheet as Sheet } from 'react-spring-bottom-sheet';
import 'react-spring-bottom-sheet/dist/style.css';

import { Icon, IconName } from 'shared/icons';

import { IBottomSheetProps } from './types';
import './style.scss';

export const BottomSheet = (props: IBottomSheetProps) => {
  const { open, onClose, title, header, children, maxHeight } = props;

  const maxSize = {
    10: 1.9,
    20: 1.8,
    30: 1.7,
    40: 1.6,
    50: 1.5,
    60: 1.4,
    70: 1.3,
    80: 1.2,
    90: 1.1,
    100: 1,
  };

  const max = maxHeight ? maxSize[maxHeight] : undefined;

  const Title = (
    <div className="bottomSheetTitleDiv">
      <h1>{title}</h1>
      <Icon name={IconName.closeX} onClick={onClose} />
    </div>
  );

  return (
    <Sheet
      open={open}
      header={header || title ? Title : ''}
      sibling={<div className="bottomSheetSibling" onClick={onClose} />}
      onDismiss={onClose}
      snapPoints={max ? (props) => [props.maxHeight / max] : undefined}
    >
      {children}
    </Sheet>
  );
};
