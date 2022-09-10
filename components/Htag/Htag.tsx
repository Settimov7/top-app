import { createElement, FC } from 'react';
import { HtagProps } from './Htag.props';

import styles from './Htag.module.css';


export const Htag: FC<HtagProps> = ({ tag, children }) => {
    return createElement(tag, { className: styles[tag] }, children);
};