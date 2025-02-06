import { Link } from 'react-router-dom';

import { Icon, IconName } from 'shared/icons';

export const SuccessPage = () => {
  return (
    <div className="bg-[linear-gradient(180deg,_#00834C_0%,_#00D47C_100%)] min-h-screen flex flex-col justify-center items-center">
      <div className="size-12 rounded-full bg-white flex items-center justify-center mb-2">
        <Icon name={IconName.successCheck} className="text-primary" />
      </div>
      <div>
        <h1>Заявка на покупку создана</h1>
        <p>Частями от 100$ до 500$</p>
        <h2>500$</h2>
        <p>По курсу 10,66 с.</p>
      </div>
      <div className="absolute bottom-10 container">
        <Link to="/" className="block text-center bg-white text-black">
          Посмотреть мои заявки
        </Link>
      </div>
    </div>
  );
};
