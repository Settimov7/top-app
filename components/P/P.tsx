import { FC } from 'react';
import classNames from 'classnames';

import { ParagraphProps } from './P.props';
import styles from './P.module.css';

const ParagraphSizeToClassName = {
 's': styles.small,
 'm': styles.medium,
 'l': styles.large,
};

export const P:FC<ParagraphProps> = ({ className, size = 'm', children, ...props }) => {
    const paragraphClassName = classNames(className, styles.paragraph, ParagraphSizeToClassName[size]);

    return <p className={paragraphClassName} {...props}>{children}</p>;
};