import classNames from 'classnames';
import { format } from 'date-fns';

import { FooterProps } from './footer.props';
import styles from './footer.module.css';

export function Footer({ className, ...otherProps }: FooterProps): JSX.Element {
    return (
        <footer className={classNames(className, styles.footer)} {...otherProps}>
            <p className={classNames(styles.copyright)}>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</p>

            <a className={classNames(styles.link)} href="#" target="_blank">Пользовательское соглашение</a>
            <a className={classNames(styles.link)} href="#" target="_blank">Политика конфиденциальности</a>
        </footer>
    );
}