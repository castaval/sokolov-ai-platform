import Link from 'next/link';
import { directus } from '../../pages';
import { persistItem } from '../context/persist-context';

async function SessionLogout() {
  directus.auth.logout().then(() => {
    const mode = localStorage.getItem('theme') || 'light-mode';
    localStorage.clear()
    localStorage.setItem('theme', mode);
    window.location.replace('/signin')
  })
}

function SwithcMode() {
  switch (localStorage.getItem('theme')) {
    case 'dark-mode':
      persistItem('theme', 'light-mode')
      break;
    case 'light-mode':
      persistItem('theme', 'dark-mode')
      break;
  }
  window.location.reload()
}

export const AppBarHeader = ({
  currentUserMeta,
}: any): JSX.Element => {
  const role = 'Оператор AI';
  const email = currentUserMeta?.email;
  const full_name = `${currentUserMeta?.first_name} ${currentUserMeta?.last_name}`;
  return (
    <div className="nk-header nk-header-fixed is-light">
      <div className="container-lg wide-xl">
        <div className="nk-header-wrap">
          <div className="nk-header-brand">
            <a href="/" className="logo-link">
              <svg className='logo-dark logo-img' xmlns="http://www.w3.org/2000/svg" width="145" height="20" viewBox="0 0 145 20" fill="none">
                <path d="M30 16.7847C26.3521 16.7847 23.4949 13.9238 23.4949 10.0504C23.4949 6.17676 26.3521 3.24036 30 3.24036C33.6479 3.24036 36.5051 6.17676 36.5051 10.0504C36.5051 13.9238 33.6479 16.7847 30 16.7847ZM30 -0.000244141C24.3877 -0.000244141 20 4.45526 20 10.0504C20 15.62 24.3877 20 30 20C35.6123 20 40 15.62 40 10.0504C40 4.45526 35.6123 -0.000244141 30 -0.000244141Z" fill="#2B2B2A" />
                <path d="M73 16.7847C69.3521 16.7847 66.4949 13.9238 66.4949 10.0504C66.4949 6.17676 69.3521 3.24036 73 3.24036C76.6479 3.24036 79.5051 6.17676 79.5051 10.0504C79.5051 13.9238 76.6479 16.7847 73 16.7847ZM73 -0.000244141C67.3877 -0.000244141 63 4.45526 63 10.0504C63 15.62 67.3877 20 73 20C78.6123 20 83 15.62 83 10.0504C83 4.45526 78.6123 -0.000244141 73 -0.000244141Z" fill="#2B2B2A" />
                <path d="M113 16.7847C109.352 16.7847 106.495 13.9238 106.495 10.0504C106.495 6.17676 109.352 3.24036 113 3.24036C116.648 3.24036 119.505 6.17676 119.505 10.0504C119.505 13.9238 116.648 16.7847 113 16.7847ZM113 -0.000244141C107.388 -0.000244141 103 4.45526 103 10.0504C103 15.62 107.388 20 113 20C118.612 20 123 15.62 123 10.0504C123 4.45526 118.612 -0.000244141 113 -0.000244141Z" fill="#2B2B2A" />
                <path d="M90.648 0H87V20H101V16.7631H90.648V0Z" fill="#2B2B2A" />
                <path d="M141.198 0L134.987 14.1315L128.802 0H125L133.847 20H136.153L145 0H141.198Z" fill="#2B2B2A" />
                <path d="M60.3425 0H55.8015L47.568 8.56V0H44V20H47.568V11.1085L56.1203 20H61L50.8074 9.6667L60.3425 0Z" fill="#2B2B2A" />
                <path d="M0 14.1935C0.2263 16.7215 2.3052 20 8.3495 20C12.9468 20 16 17.64 16 13.9658C16 10.1877 12.9809 8.85096 10.2524 8.50076C9.1011 8.35306 7.7267 8.17896 6.6796 8.04536C4.8223 7.80836 3.9612 7.07116 3.9612 5.76836C3.9612 4.08176 5.7115 2.99786 7.8447 2.99786C10.0233 2.99786 11.4653 3.75446 12.1164 5.50266H15.6117C15.1997 3.21946 13.3442 -0.000244141 7.8447 -0.000244141C3.2129 -0.000244141 0.3883 2.85916 0.3883 5.99606C0.3883 10.0089 3.7219 10.9704 6.4562 11.3282C7.5087 11.4659 8.5769 11.6078 9.5146 11.7267C11.3721 11.9621 12.4272 12.7888 12.4272 14.1935C12.4272 15.5981 11.3234 16.9639 8.2718 16.9639C5.3157 16.9639 3.7891 15.6079 3.5339 14.1935H0Z" fill="#2B2B2A" />
              </svg>
              <svg className='logo-light logo-img' xmlns="http://www.w3.org/2000/svg" width="145" height="20" viewBox="0 0 145 20" fill="none">
                <path d="M30 16.7847C26.3521 16.7847 23.4949 13.9238 23.4949 10.0504C23.4949 6.17676 26.3521 3.24036 30 3.24036C33.6479 3.24036 36.5051 6.17676 36.5051 10.0504C36.5051 13.9238 33.6479 16.7847 30 16.7847ZM30 -0.000244141C24.3877 -0.000244141 20 4.45526 20 10.0504C20 15.62 24.3877 20 30 20C35.6123 20 40 15.62 40 10.0504C40 4.45526 35.6123 -0.000244141 30 -0.000244141Z" fill="#ffff" />
                <path d="M73 16.7847C69.3521 16.7847 66.4949 13.9238 66.4949 10.0504C66.4949 6.17676 69.3521 3.24036 73 3.24036C76.6479 3.24036 79.5051 6.17676 79.5051 10.0504C79.5051 13.9238 76.6479 16.7847 73 16.7847ZM73 -0.000244141C67.3877 -0.000244141 63 4.45526 63 10.0504C63 15.62 67.3877 20 73 20C78.6123 20 83 15.62 83 10.0504C83 4.45526 78.6123 -0.000244141 73 -0.000244141Z" fill="#ffff" />
                <path d="M113 16.7847C109.352 16.7847 106.495 13.9238 106.495 10.0504C106.495 6.17676 109.352 3.24036 113 3.24036C116.648 3.24036 119.505 6.17676 119.505 10.0504C119.505 13.9238 116.648 16.7847 113 16.7847ZM113 -0.000244141C107.388 -0.000244141 103 4.45526 103 10.0504C103 15.62 107.388 20 113 20C118.612 20 123 15.62 123 10.0504C123 4.45526 118.612 -0.000244141 113 -0.000244141Z" fill="#ffff" />
                <path d="M90.648 0H87V20H101V16.7631H90.648V0Z" fill="#ffff" />
                <path d="M141.198 0L134.987 14.1315L128.802 0H125L133.847 20H136.153L145 0H141.198Z" fill="#ffff" />
                <path d="M60.3425 0H55.8015L47.568 8.56V0H44V20H47.568V11.1085L56.1203 20H61L50.8074 9.6667L60.3425 0Z" fill="#ffff" />
                <path d="M0 14.1935C0.2263 16.7215 2.3052 20 8.3495 20C12.9468 20 16 17.64 16 13.9658C16 10.1877 12.9809 8.85096 10.2524 8.50076C9.1011 8.35306 7.7267 8.17896 6.6796 8.04536C4.8223 7.80836 3.9612 7.07116 3.9612 5.76836C3.9612 4.08176 5.7115 2.99786 7.8447 2.99786C10.0233 2.99786 11.4653 3.75446 12.1164 5.50266H15.6117C15.1997 3.21946 13.3442 -0.000244141 7.8447 -0.000244141C3.2129 -0.000244141 0.3883 2.85916 0.3883 5.99606C0.3883 10.0089 3.7219 10.9704 6.4562 11.3282C7.5087 11.4659 8.5769 11.6078 9.5146 11.7267C11.3721 11.9621 12.4272 12.7888 12.4272 14.1935C12.4272 15.5981 11.3234 16.9639 8.2718 16.9639C5.3157 16.9639 3.7891 15.6079 3.5339 14.1935H0Z" fill="#ffff" />
              </svg>
            </a>
          </div>
          <div className="nk-header-tools">
            <ul className="nk-quick-nav">
              <li className="dropdown user-dropdown">
                <a className="dropdown-toggle" data-bs-toggle="dropdown" >
                  <div className="user-toggle">
                    <div className="user-info d-none d-md-block">
                      <div className="user-status">
                        <strong>{role}</strong>
                      </div>
                      <div className="user-name dropdown-indicator">
                        {full_name}
                      </div>
                    </div>
                  </div>
                </a>
                <div className="dropdown-menu dropdown-menu-md dropdown-menu-end dropdown-menu-s1">
                  <div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                    <div className="user-card">
                      <div className="user-info">
                        <span className="lead-text">{full_name}</span>
                        <span className="sub-text">{email}</span>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown-inner">
                    <ul className="link-list">
                      <li><a href="html/subscription/profile.html"><span>Управление характеристиками</span></a></li>
                      <li><a href="html/subscription/profile-activity.html"><span>Настроки текстовых генераторов</span></a></li>
                      <li><a onClick={() => { SwithcMode() }}><span>Тёмная тема</span></a></li>
                    </ul>
                  </div>
                  <div className="dropdown-inner">
                    <ul className="link-list">
                      <li>
                        <a href='#' onClick={async () => await SessionLogout()}>Выход</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="d-lg-none">
                <a href="/" className="toggle nk-quick-nav-icon me-n1" data-target="sideNav"><em className="icon ni ni-menu" /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
