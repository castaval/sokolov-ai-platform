import { NextPage } from 'next';
import { useTranslation } from 'react-i18next';

const NotFoundPage: NextPage = () => {
  const { t } = useTranslation();

  return (
    <div className="nk-content ">
      <div className="nk-block nk-block-middle wide-md mx-auto">
        <div className="nk-block-content nk-error-ld text-center">
          <h2>Ошибка 404</h2>
          <div className="wide-xs mx-auto">
            <h3 className="nk-error-title">Ой! Как Вы здесь оказались?</h3>
            <p className="nk-error-text">
              Приносим извинения за неудобства. Похоже, вы пытаетесь получить
              доступ к странице, которая либо была удалена, либо никогда не
              существовала вовсе.
            </p>
            <a
              href='/'
              className="btn btn-lg btn-primary mt-2"
            >
              Вернуться на главную
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
