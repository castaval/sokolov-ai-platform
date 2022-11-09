import React, { SetStateAction, useState } from 'react';
import { CommunityHead } from '../../common/components/header';
import { LogIn } from '../../common/components/session/login';
import { ResetPassword } from '../../common/components/session/reset-password';
import { SignUp } from '../../common/components/session/sign-up';

export type SessionContextProps = {
  setSessionContext: React.Dispatch<SetStateAction<string>>;
  errorMessage: string | undefined;
  setErrorMessage: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const SignIn = () => {
  const [sessionContext, setSessionContext] = useState('signin');
  const [errorMessage, setErrorMessage] = useState<string>();
  return (
    <div className="nk-app-root">
      <CommunityHead />
      <div className="nk-main ">
        <div className="nk-wrap nk-wrap-nosidebar">
          <div className="nk-content ">
            {sessionContext === 'signin' ? (
              <LogIn
                setSessionContext={setSessionContext}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
              />
            ) : sessionContext === 'signup' ? (
              <SignUp
                setSessionContext={setSessionContext}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
              />
            ) : (
              <ResetPassword
                setSessionContext={setSessionContext}
                errorMessage={errorMessage}
                setErrorMessage={setErrorMessage}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
