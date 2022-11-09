import { MenuItem } from "./Item";

export const ASide = () => {
    return (
        <div className="nk-aside" data-content="sideNav" data-toggle-overlay="true" data-toggle-screen="lg" data-toggle-body="true">
            <div className="nk-sidebar-menu" data-simplebar>
                <ul className="nk-menu">
                    <li className="nk-menu-heading">
                        <h6 className="overline-title">AI-генераторы</h6>
                    </li>
                    <MenuItem link='/descriptions' text='Генератор описаний' />
                    <MenuItem link='/keywords' text='Поиск ключевых слов' />
                </ul>
                <ul className="nk-menu nk-menu-sm">
                    <li className="nk-menu-heading">
                        <span>Центр помощи</span>
                    </li>
                    <MenuItem link='/support' text='Поддержка' />
                </ul>
            </div>
            <div className="nk-aside-close">
                <a href="#" className="toggle" data-target="sideNav"><em className="icon ni ni-cross" /></a>
            </div>
        </div>
    );
};
