import { ID } from '@directus/sdk';
import { Formik } from 'formik';
import { NextPage } from 'next';
import { Router, withRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { directus } from '..';
import Layout from '../../common/components/layout';

type Props = {
  router: Router;
};

type PropsWithRouter = Props & {
  router: Router;
};

const Projects: NextPage = withRouter<Props>(({ router }: PropsWithRouter) => {
  const { t } = useTranslation();

  const itemId = router.asPath.split('/').at(-1);
  const [currentItem, setcurrentItem] = useState<any>([]);

  useEffect(() => {
    const fetchMyProjects = async () => {
      if (itemId !== '[id]') {
        setcurrentItem(await directus.items('jewelry').readOne(itemId as ID));
      }
    };
    fetchMyProjects();
  }, [setcurrentItem, itemId]);

  return (
    <div className="nk-content ">
      <div className="container-fluid">
        <div className="nk-content-inner">
          <div className="nk-content-body">
            <div className="wide-lg mx-auto">
              <div className="nk-block">
                <Formik
                  initialValues={{
                    // status: 'ss',
                    type: currentItem.type,
                    insert: currentItem.insert,
                    grade: currentItem.grade,
                    approximate_weight: currentItem.approximate_weight,
                    material: currentItem.material,
                    description: currentItem.description,
                    title: currentItem.title,
                  }}
                  enableReinitialize={true}
                  onSubmit={async (values: any) => {
                    await directus
                      .items('jewelry')
                      .updateOne(currentItem.id, values);
                  }}
                >
                  {(props) => (
                    <form onSubmit={props.handleSubmit}>
                      <div className="card card-bordered card-stretch">
                        <div className="card-inner-group">
                          <div className="card-inner position-relative card-tools-toggle">
                            <div className="card-title-group">
                              <div className="card-tools">
                                <div className="form-inline flex-nowrap gx-3">
                                  <h5 className="ff-base fw-medium">
                                    Генератор описаний ювелирных
                                    изделий{' '}
                                    <small className="text-soft">
                                      <i>Sokolov-ML.Rev-2.</i>
                                    </small>
                                  </h5>
                                </div>
                              </div>
                              <div className="card-tools me-n1">
                                <ul className="btn-toolbar gx-1">
                                  <li>
                                    <button
                                      onClick={() => {
                                        console.log(1);
                                      }}
                                      className="dropdown-toggle btn btn-dim btn-secondary"
                                    >
                                      Запустить генерацию повторно
                                    </button>
                                  </li>
                                  <li>
                                    <button
                                      type="submit"
                                      onClick={() => {
                                        window.location.reload();
                                      }}
                                      className="dropdown-toggle btn btn-dim btn-info"
                                    >
                                      Сохранить
                                    </button>
                                  </li>
                                  <li className="btn-toolbar-sep" />
                                  <li>
                                    <div className="toggle-wrap">
                                      <a
                                        href="#"
                                        className="btn btn-icon btn-trigger toggle"
                                        data-target="cardTools"
                                      >
                                        <em className="icon ni ni-menu-right" />
                                      </a>
                                      <div
                                        className="toggle-content"
                                        data-content="cardTools"
                                      >
                                        <ul className="btn-toolbar gx-1">
                                          <li>
                                            <button
                                              onClick={async () => {
                                                await directus
                                                  .items('jewelry')
                                                  .deleteOne(currentItem.id);
                                                window.location.href = '/';
                                              }}
                                              className="btn-dim btn btn-danger"
                                            >
                                              Удалить
                                            </button>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div className="card-inner p-0">
                            <div className="card-inner">
                              <div className="gy-3">
                                <div className="row g-3 align-center">
                                  <div className="col-lg-5">
                                    <div className="form-group">
                                      <label
                                        className="form-label"
                                        htmlFor="title"
                                      >
                                        Наименовании изделия
                                      </label>
                                      <span className="form-note">
                                        Specify the name of your website.
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-lg-7">
                                    <div className="form-group">
                                      <div className="form-control-wrap">
                                        <input
                                          type="text"
                                          onChange={props.handleChange}
                                          defaultValue={currentItem.title}
                                          className="form-control"
                                          id="title"
                                          name="title"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="row g-3 align-center">
                                  <div className="col-lg-5">
                                    <div className="form-group">
                                      <label className="form-label">
                                        Вид изделия
                                      </label>
                                      <span className="form-note">
                                        Specify the email address of your
                                        website.
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-lg-7">
                                    <div className="form-group">
                                      <div className="form-control-wrap">
                                        <div className="form-control-wrap">
                                          <select
                                            className="form-select js-select2"
                                            onChange={props.handleChange}
                                            id="type"
                                            name="type"
                                            defaultValue={currentItem.type}
                                          >
                                            <option value="option_select_name">
                                              Option select name
                                            </option>
                                            <option value="ring">Кольцо</option>
                                            <option value="option_select_name">
                                              Option select name
                                            </option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="row g-3 align-center">
                                  <div className="col-lg-5">
                                    <div className="form-group">
                                      <label className="form-label">
                                        Материал изделия, его проба и вес
                                      </label>
                                      <span className="form-note">
                                        Copyright information of your website.
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-lg-2">
                                    <div className="form-group">
                                      <label
                                        className="form-label"
                                        htmlFor="default-textarea"
                                      >
                                        Проба
                                      </label>
                                      <div className="form-control-wrap">
                                        <input
                                          type="text"
                                          onChange={props.handleChange}
                                          defaultValue={currentItem.grade}
                                          className="form-control"
                                          id="grade"
                                          name="grade"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-3">
                                    <div className="form-group">
                                      <label
                                        className="form-label"
                                        htmlFor="default-textarea"
                                      >
                                        Материал
                                      </label>
                                      <div className="form-control-wrap">
                                        <input
                                          type="text"
                                          onChange={props.handleChange}
                                          defaultValue={currentItem.material}
                                          className="form-control"
                                          id="material"
                                          name="material"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-lg-2">
                                    <div className="form-group">
                                      <label
                                        className="form-label"
                                        htmlFor="default-textarea"
                                      >
                                        Вес (в граммах)
                                      </label>
                                      <div className="form-control-wrap">
                                        <input
                                          type="text"
                                          onChange={props.handleChange}
                                          defaultValue={
                                            currentItem.approximate_weight
                                          }
                                          className="form-control"
                                          id="approximate_weight"
                                          name="approximate_weight"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="row g-3 align-center">
                                  <div className="col-lg-5">
                                    <div className="form-group">
                                      <label className="form-label">
                                        Текстовое перечисление вставок
                                      </label>
                                      <span className="form-note">
                                        Specify the URL if your main website is
                                        external.
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-lg-7">
                                    <div className="form-group">
                                      <div className="form-control-wrap">
                                        <input
                                          type="text"
                                          onChange={props.handleChange}
                                          defaultValue={currentItem.insert}
                                          className="form-control"
                                          id="insert"
                                          name="insert"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="row g-3 align-center">
                                  <div className="col-lg-5">
                                    <div className="form-group">
                                      <label
                                        className="form-label"
                                        htmlFor="site-off"
                                      >
                                        Maintanance Mode
                                      </label>
                                      <span className="form-note">
                                        Enable to make website make offline.
                                      </span>
                                    </div>
                                  </div>
                                  <div className="col-lg-7">
                                    <div className="form-group">
                                      <label
                                        className="form-label"
                                        htmlFor="default-textarea"
                                      >
                                        Описание
                                      </label>
                                      <div className="form-control-wrap">
                                        <textarea
                                          style={{ height: '200px' }}
                                          disabled={true}
                                          onChange={props.handleChange}
                                          defaultValue={currentItem.description}
                                          className="form-control no-resize"
                                          id="description"
                                          name="description"
                                        />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

// @ts-expect-error: Todo
Projects.getLayout = function getLayout(page: typeof Projects) {
  // @ts-expect-error: Todo
  return <Layout>{page}</Layout>;
};

export default Projects;
