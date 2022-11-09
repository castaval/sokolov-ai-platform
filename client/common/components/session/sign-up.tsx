import { Formik } from 'formik';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { SessionContextProps } from '../../../pages/signin';

export const SignUp = ({
  setSessionContext,
  errorMessage,
  setErrorMessage,
}: SessionContextProps) => {
  const [createdUser, setCreatedUser] = useState('');
  const { t } = useTranslation();
  return (
    <div className="nk-block nk-block-middle nk-auth-body wide-xs">
      {errorMessage && (
        <div className="alert alert-danger alert-icon alert-dismissible">
          <em className="icon ni ni-cross-circle"></em>
          {errorMessage}
        </div>
      )}
      <div className="card card-bordered">
        <div className="card-inner card-inner-lg">
          <div className="nk-block-head">
            <div className="nk-block-head-content">
              <h4 className="nk-block-title text-center">Регистрация</h4>
              <div className="nk-block-des">
                <p>Create New Dashlite Account</p>
              </div>
            </div>
          </div>
          <Formik
            initialValues={{
              first_name: '',
              last_name: '',
              password: '',
              email: '',
            }}
            onSubmit={async (values: any) => {
              setErrorMessage(undefined);
              // const response = await handleCreateNewUser({
              //   first_name: values.first_name,
              //   last_name: values.last_name,
              //   email: values.email,
              //   password: values.password,
              //   course: values.course,
              // });
              // // @ts-ignore: Unreachable code error
              // if (response!.createNewUserStatus!.status === 200) {
              //   // @ts-ignore: Unreachable code error
              //   setCreatedUser(response.createNewUserStatus!.user.first_name);
              // } else {
              //   switch (true) {
              //     case response.createNewUserStatus?.response.errors[0]
              //       .message === 'Field "email" has to be unique.':
              //       setErrorMessage(
              //         'Account wurde blockiert wegen zu vielen fehlgeschlagenen Anmeldeversuche. Bitte melde dich ans Admin-Team',
              //       );
              //       break;
              //   }
              // }
            }}
          >
            {(props) => (
              <form onSubmit={props.handleSubmit}>
                <div className="form-group">
                  <div className="form-label-group">
                    <label className="form-label">Имя</label>
                  </div>
                  <div className="form-control-wrap">
                    <input
                      id="first_name"
                      name="first_name"
                      type="text"
                      value={props.values.first_name}
                      onChange={props.handleChange}
                      className="form-control form-control-lg"
                      placeholder="Адрес эл. почты или имя пользователя"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-label-group">
                    <label className="form-label">Фамилия</label>
                  </div>
                  <div className="form-control-wrap">
                    <input
                      id="last_name"
                      name="last_name"
                      type="text"
                      value={props.values.last_name}
                      onChange={props.handleChange}
                      className="form-control form-control-lg"
                      placeholder="Адрес эл. почты или имя пользователя"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-label-group">
                    <label className="form-label">Эл. почта</label>
                  </div>
                  <div className="form-control-wrap">
                    <input
                      id="email"
                      name="email"
                      type="text"
                      value={props.values.email}
                      onChange={props.handleChange}
                      className="form-control form-control-lg"
                      placeholder="Адрес эл. почты или имя пользователя"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="form-label-group">
                    <label className="form-label">Пароль</label>
                  </div>
                  <div className="form-control-wrap">
                    <a
                      href="#"
                      className="form-icon form-icon-right passcode-switch lg"
                      data-target="password"
                    >
                      <em className="passcode-icon icon-show icon ni ni-eye"></em>
                      <em className="passcode-icon icon-hide icon ni ni-eye-off"></em>
                    </a>
                    <input
                      value={props.values.password}
                      onChange={props.handleChange}
                      id="password"
                      name="password"
                      type="password"
                      className="form-control form-control-lg"
                      placeholder="Пароль"
                    />
                  </div>
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-lg btn-primary btn-block"
                  >
                    Продолжить регистрацию
                  </button>
                </div>
              </form>
            )}
          </Formik>
          <div className="form-note-s2 text-center pt-4">
            {' '}
            Already have an account?
            <a onClick={() => setSessionContext('signin')} href="#">
              {' '}
              <strong>страницу входа</strong>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
