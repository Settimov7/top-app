import { FC } from 'react';
import classNames from 'classnames';

import { TagProps } from './Tag.props';
import styles from './Tag.module.css';

export const Tag:FC<TagProps> = ({ href, className, children, size = 's', color = 'ghost', ...props }) => {
    const content = href ? <a href={href}>{children}</a> : children;

    return <div className={classNames(styles.tag,  styles[size], styles[color])} {...props}>{content}</div>;
};