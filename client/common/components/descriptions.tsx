import React from 'react';

import moment from 'moment';
import 'moment/locale/ru';

import { ProjectCard } from './project-card/project-card';

import { StatusInformation } from '../types/types';
import { directus } from '../../pages';

type ProjectsOverviewProps = {
  currentUserMeta: any;
  currentUserId: string;
  data: any;
};

const ProjectsOverview = ({ currentUserId, data }: ProjectsOverviewProps) => {
  return (
    <div className="nk-content-wrap">
      <div className="nk-content-wrap">
        <div className="nk-block-head nk-block-head-lg">
          <div className="nk-block-between">
            <div className="nk-block-head-content">
              <div className="nk-block-head-sub"><span><b>Генератор описаний ювелирных изделий</b></span></div>
              <div className="nk-block-des text-soft">
                <p>Это инструмент для создания описания ювелирных изделий, который использует нейронные сети для генерации художественных описаний с использованием различных параметров,
                  таких как: цвет, проба, вес и т.д.</p>
              </div>
            </div>
            <div className="nk-block-head-content">
              <div className="toggle-wrap nk-block-tools-toggle">
                <a href="#" className="btn btn-icon btn-trigger toggle-expand me-n1" data-target="pageMenu"><em className="icon ni ni-more-v" /></a>
                <div className="toggle-expand-content" data-content="pageMenu">
                  <ul className="nk-block-tools g-3">
                    <li className="nk-block-tools-opt">
                      <a href="/descriptions/new" className="btn btn-white btn-dim btn-outline-primary">
                        <span className="d-none d-sm-inline-block">Добавить</span></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nk-block">
          {data.lenght > 0 ? (
            <div className="card card-bordered card-stretch">
              <div className="card-inner-group">
                <div className="card-inner p-0">
                  <div className="nk-tb-list nk-tb-ulist is-compact">
                    <div className="nk-tb-item nk-tb-head">
                      <div className="nk-tb-col">
                        <span className="sub-text">Наименование</span>
                      </div>
                      <div className="nk-tb-col tb-col-md">
                        <span className="sub-text">Вид изделия</span>
                      </div>
                      <div className="nk-tb-col tb-col-sm">
                        <span className="sub-text">Вставка</span>
                      </div>
                      <div className="nk-tb-col tb-col-sm">
                        <span className="sub-text">Проба</span>
                      </div>
                      <div className="nk-tb-col tb-col-xxl">
                        <span className="sub-text">Примерный вес</span>
                      </div>
                      <div className="nk-tb-col tb-col-lg">
                        <span className="sub-text">Материал</span>
                      </div>
                      <div className="nk-tb-col tb-col-xxl">
                        <span className="sub-text">Дата создания</span>
                      </div>
                      <div className="nk-tb-col">
                        <span className="sub-text">Статус</span>
                      </div>
                      <div className="nk-tb-col nk-tb-col-tools text-end">
                        <span className="sub-text">Арена</span>
                      </div>
                    </div>
                    {data
                      .slice(0)
                      .reverse()
                      .map((item: any) => (
                        <React.Fragment key={item.id}>
                          {currentUserId !== item.user_created && (
                            <div className="nk-tb-item">
                              <div className="nk-tb-col">
                                <div className="user-card">
                                  <div className="user-name">
                                    <span className="tb-lead">
                                      {item.title}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="nk-tb-col tb-col-md">
                                <span>
                                  {/* {TypeInformation(item.type)}{' '} */}
                                </span>
                              </div>
                              <div className="nk-tb-col tb-col-sm">
                                <span>
                                  {item.insert.replace(
                                    /штук?./g,
                                    'шт.',
                                  )}
                                </span>
                              </div>
                              <div className="nk-tb-col tb-col-md">
                                <span>{item.grade}</span>
                              </div>
                              <div className="nk-tb-col tb-col-xxl">
                                <span>
                                  {item.approximate_weight} гр.
                                </span>
                              </div>
                              <div className="nk-tb-col tb-col-lg">
                                <span>{item.material}</span>
                              </div>
                              <div className="nk-tb-col tb-col-xxl">
                                <span>
                                  {moment(item.date_created).format(
                                    'LL',
                                  )}
                                </span>
                              </div>
                              <div className="nk-tb-col">
                                <span className={"tb-status text-" + StatusInformation(item.status)[1]}>
                                  {StatusInformation(item.status)[0]}
                                </span>
                              </div>
                              <div className="nk-tb-col nk-tb-col-tools">
                                <ul className="text-center">
                                  <li>
                                    <div className="drodown">
                                      <a
                                        href="#"
                                        className="btn btn-icon btn-sm btn-primary dropdown-toggle"
                                        data-bs-toggle="dropdown"
                                      >
                                        <em className="icon ni ni-list-thumb-alt-fill"></em>
                                      </a>
                                      <div className="dropdown-menu dropdown-menu-end">
                                        <ul className="link-list-opt no-bdr">
                                          <li>
                                            <a
                                              href={`/descriptions/${item.id}`}
                                            >
                                              <span>
                                                Детали генерации
                                              </span>
                                            </a>
                                          </li>
                                          <li>
                                            <a
                                              onClick={async () => {
                                                console.log(item);
                                              }}
                                              href="#"
                                            >
                                              <span>
                                                Повторная генерация
                                              </span>
                                            </a>
                                          </li>
                                          <li className="divider" />
                                          <li>
                                            <a
                                              onClick={async () => {
                                                await directus
                                                  .items('jewelry')
                                                  .deleteOne(item.id);
                                                window.location.href =
                                                  '/';
                                              }}
                                              href="#"
                                            >
                                              <span>Удалить</span>
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          )}
                        </React.Fragment>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="alert alert-primary">
              На данный момент в базе данных <strong className='text-danger'>не содержится</strong> записей о ранее сгенерированных изделииях.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsOverview;
