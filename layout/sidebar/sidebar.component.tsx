import classNames from 'classnames';

import { SidebarProps } from './sidebar.props';
import styles from './sidebar.module.css';

export function Sidebar(props: SidebarProps): JSX.Element {
    return (
        <div {...props}>
            Sidebar
        </div>
    );
}