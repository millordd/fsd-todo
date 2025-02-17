import style from './style.module.scss';
import { INFO_LOCALE } from './constants';

export const Info = ({ locale }: { locale: string }) => {
  const { title, description } = INFO_LOCALE[locale];

  return (
    <div className={style.info}>
      <h1 className={style.title}>{title} :(</h1>
      <p className={style.description}>{description}</p>
    </div>
  );
};
