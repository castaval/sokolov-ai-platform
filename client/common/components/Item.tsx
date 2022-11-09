export const MenuItem = ({
    link,
    text
}: any): JSX.Element => {
    return (
        <li className="nk-menu-item">
            <a href={link} className="nk-menu-link">
                <span className="nk-menu-text">{text}</span>
            </a>
        </li>
    )
}