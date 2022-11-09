import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';
import { directus, token } from '../../pages';

export { RouteGuard };

function RouteGuard({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);
  
  useEffect(() => {
    authCheck(router.asPath);
    const hideContent = () => setAuthorized(false);
    router.events.on('routeChangeStart', hideContent);
    router.events.on('routeChangeComplete', authCheck);
    return () => {
      router.events.off('routeChangeStart', hideContent);
      router.events.off('routeChangeComplete', authCheck);
    };
  }, []);

  async function authCheck(url: string) {
    await directus.auth.refreshIfExpired()
    const publicPaths = ['/signin'];
    const path = url.split('?')[0];
    if (!token && !publicPaths.includes(path)) {
      setAuthorized(false);
      router.push({
        pathname: '/signin',
      });
    } else {
      setAuthorized(true);
    }
  }
  return authorized && children;
}
