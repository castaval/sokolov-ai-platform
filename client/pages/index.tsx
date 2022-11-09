import { Directus } from '@directus/sdk';
import { NextPage } from 'next';
import Layout from '../common/components/layout';

import { Footer } from "../common/components/footer";
import { ASide } from "../common/components/aside";
import { Generator } from '../common/components/common/generator';

export const directus = new Directus('http://0.0.0.0:8055/', {
  auth: { mode: 'cookie' },
});

export const token = directus.auth.token;

const Home: NextPage<{ data: any }> = (props) => {
  return (
    <div className="nk-content">
      <div className="container wide-xl">
        <div className="nk-content-inner">
          <ASide />
          <div className="nk-content-body">
            <div className="nk-block-head nk-block-head-lg">
              <div className="nk-block-between-md g-4">
                <div className="nk-block-head-content">
                  <div className="nk-block-head-sub"><span><b>Добро пожаловать в SOKOLOV AI Platform</b></span></div>
                  <div className="nk-block-des text-soft">
                    <p>Это инструмент для создания описания ювелирных изделий, который использует нейронные сети для генерации художественных описаний с использованием различных параметров,
                      таких как: цвет, проба, вес и т.д.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="nk-block">
              <Generator link='/descriptions' name='Генератор описаний ювелирных изделий' description='описание передаётся в propsах компонента карточки сервиса'/>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

// @ts-expect-error: Todo
Home.getLayout = function getLayout(page: typeof Home) {
  // @ts-expect-error: Todo
  return <Layout>{page}</Layout>;
};

export default Home;
