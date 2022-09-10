import { FC } from 'react';
import classNames from 'classnames';

import ArrowIcon from './arrow.svg';
import { ButtonProps } from './Button.props';
import styles from './Button.module.css';

export const Button:FC<ButtonProps> = ({ className, appearance, arrow, children, ...otherProps }) => {
    const hasArrow = !!arrow;

    return (
        <button className={classNames(styles.button, className, {
            [styles.primary]: appearance === 'primary',
            [styles.ghost]: appearance === 'ghost',
        })} {...otherProps}>
            {children}
            {hasArrow && <span className={classNames(styles.arrow, { 
                [styles.down]: arrow === 'down',
                [styles.right]: arrow === 'right',
             })}>
                <ArrowIcon />
            </span>}
        </button>
    );
};