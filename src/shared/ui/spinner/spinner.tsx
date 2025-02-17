import style from './style.module.scss';

interface Props {
  show?: boolean;
  className?: string;
}
export const Spinner = (props: Props) => {
  const { className, show = true } = props;
  if (!show) return null;
  return <div className={[style.loader, className].join(' ')} />;
};
