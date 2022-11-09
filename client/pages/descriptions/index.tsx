import { Directus } from '@directus/sdk';
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Layout from '../../common/components/layout';

import { Footer } from "../../common/components/footer";
import { ASide } from "../../common/components/aside";

import ProjectsOverview from '../../common/components/descriptions';

export const directus = new Directus('http://0.0.0.0:8055/', {
  auth: { mode: 'cookie' },
});

export const token = directus.auth.token;

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const data = await directus.items('jewelry').readByQuery({ limit: -1 });
    return {
      props: { data },
    };
  } catch {
    return {
      props: { data: undefined },
    };
  }
};

const Descriptions: NextPage<{ data: any }> = (props) => {
  const [currentUserId, setCurrentUserId] = useState<any>();
  const [currentUserMeta, setCurrentUserMeta] = useState<any>();

  useEffect(() => {
    const getCurrentUser = async () => {
      const user = await directus.users.me.read();
      window.localStorage.setItem('uid', user.id);
      setCurrentUserId(user.id);
      setCurrentUserMeta(user);
    };
    getCurrentUser();
  }, [setCurrentUserId, setCurrentUserMeta]);

  return (
    <div className="nk-content">
      <div className="container wide-xl">
        <div className="nk-content-inner">
          <ASide />
          <div className="nk-content-body">
              <ProjectsOverview
                currentUserMeta={currentUserMeta}
                currentUserId={currentUserId}
                data={props.data.data}
              />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

// @ts-expect-error: Todo
Descriptions.getLayout = function getLayout(page: typeof Descriptions) {
  // @ts-expect-error: Todo
  return <Layout>{page}</Layout>;
};

export default Descriptions;
