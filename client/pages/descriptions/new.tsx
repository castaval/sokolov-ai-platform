import { Formik } from 'formik';
import { NextPage } from 'next';
import { Router, withRouter } from 'next/router';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ASide } from '../../common/components/aside';
import Layout from '../../common/components/layout';
import { Jewelry } from '../../common/types/types';

type Props = {
    router: Router;
};
type PropsWithRouter = Props & {
    router: Router;
};

const NewDescription: NextPage = withRouter<Props>(({ router }: PropsWithRouter) => {
    const { t } = useTranslation();
    return (
        <div className="nk-content">
            <div className="container wide-xl">
                <div className="nk-content-inner">
                    <ASide />
                    <div className="nk-content-body">
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
                            <Formik
                                initialValues={{
                                    type: "",
                                    insert: "",
                                    grade: "",
                                    weight: "",
                                    material: "",
                                    title: "",
                                }}
                                enableReinitialize={true}
                                onSubmit={async (values: any) => {
                                    // console.log(9999);
                                    // await directus
                                    //     .items('jewelry')
                                    //     .updateOne(currentItem.id, values);
                                }}
                            >
                                {(props) => (
                                    <form onSubmit={props.handleSubmit}>
                                        <div className="card card-bordered card-stretch">
                                            <div className="card-inner-group">
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
                                                                            Полное наименование ювелирного изделия.
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-7">
                                                                    <div className="form-group">
                                                                        <div className="form-control-wrap">
                                                                            <input
                                                                                type="text"
                                                                                onChange={props.handleChange}
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
                                                                            Категория изделия
                                                                        </label>
                                                                        <span className="form-note">
                                                                            Предельно общее понятие, выражающее общий набор признаков ювелирного изделия.
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-7">
                                                                    <div className="form-group">
                                                                        {/*  @ts-expect-error */}
                                                                        {NioApp.Select2('.js-select2')}
                                                                        <div className="form-control-wrap ">
                                                                            <select className="form-select js-select2"
                                                                                onChange={props.handleChange}
                                                                                id="type"
                                                                                name="type"
                                                                                required>
                                                                                <option value="none">Категория</option>
                                                                                {Object.entries(Jewelry).map(
                                                                                    (item: any) => (
                                                                                        <React.Fragment key={item}>
                                                                                            <option value={item[0]}>
                                                                                                {item[1]}
                                                                                            </option>
                                                                                        </React.Fragment>
                                                                                    ),
                                                                                )}
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row g-3 align-center">
                                                                <div className="col-lg-5">
                                                                    <div className="form-group">
                                                                        <label className="form-label">
                                                                            Основные характеристики изделия
                                                                        </label>
                                                                        <span className="form-note">
                                                                            Материал изделия, его проба и вес. Это показатели, которые больше всего отражены в генерируемом описании.
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
                                                                                autoComplete="off"
                                                                                type="text"
                                                                                onChange={props.handleChange}
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
                                                                                autoComplete="off"
                                                                                type="text"
                                                                                onChange={props.handleChange}
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
                                                                                autoComplete="off"
                                                                                type="text"
                                                                                onChange={props.handleChange}
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
                                                                            Сочетание камней или камень который есть в изделии.
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                                <div className="col-lg-7">
                                                                    <div className="form-group">
                                                                        <div className="form-control-wrap">
                                                                            <input
                                                                                autoComplete="off"
                                                                                type="text"
                                                                                onChange={props.handleChange}
                                                                                className="form-control"
                                                                                id="insert"
                                                                                name="insert"
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
    );
});

// @ts-expect-error: Todo
NewDescription.getLayout = function getLayout(page: typeof NewDescription) {
    // @ts-expect-error: Todo
    return <Layout>{page}</Layout>;
};

export default NewDescription;