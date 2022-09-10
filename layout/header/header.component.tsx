import classNames from 'classnames';

import { HeaderProps } from './header.props';
import styles from './header.module.css';

export function Header(props: HeaderProps): JSX.Element {
    return (
        <div {...props}>
            Header
        </div>
    );
}