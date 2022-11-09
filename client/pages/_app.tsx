import '../styles/dashlite.css';
import '../styles/theme.css';
import '../common/i18n/config';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { RouteGuard } from '../common/context/auth-check';
import { usePersistState } from '../common/context/persist-context';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps, ...appProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  if (typeof window !== 'undefined') document.body.classList.add(usePersistState('theme', 'light-mode')[0].toString());
  return getLayout(
    // @ts-expect-error: Todo
    <RouteGuard>
      <Component {...pageProps} />
    </RouteGuard>,
  );
}

export default App;
