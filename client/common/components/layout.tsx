import React, { useEffect, useState } from 'react';
import { AppBarHeader } from './app-header';
import { CommunityHead } from './header';
import { directus } from '../../pages';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [currentUserMeta, setCurrentUserMeta] = useState<any>();
  useEffect(() => {
    const getCurrentUser = async () => {
      const user = await directus.users.me.read();
      setCurrentUserMeta(user);
    };
    getCurrentUser();
  }, [setCurrentUserMeta]);
  return (
    <>
      <CommunityHead />
      <AppBarHeader currentUserMeta={currentUserMeta} />
      {children}
    </>
  );
};

export default Layout;
