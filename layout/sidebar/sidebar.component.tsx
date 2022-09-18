import classNames from 'classnames';

import { Menu } from '../menu/menu';
import { SidebarProps } from './sidebar.props';
import styles from './sidebar.module.css';

export function Sidebar(props: SidebarProps): JSX.Element {
    return (
        <div {...props}>
            <Menu/>
        </div>
    );
}