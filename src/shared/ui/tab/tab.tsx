import style from './style.module.scss';
import { ITabProps } from './types';
export const Tab = (props: ITabProps) => {
  const { tabs, value, onChange, className } = props;

  return (
    <div className={[style.root, className && className].join(' ')}>
      {tabs.map((tab, index) => (
        <button
          key={index}
          className={[style.button, value === tab && style.active].join(' ')}
          onClick={() => onChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
