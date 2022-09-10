import { DetailedHTMLProps, HTMLAttributes } from 'react';

type HTMLDivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface TagProps extends HTMLDivProps {
    size?: 's' | 'm';
    color?: 'ghost' | 'red' | 'grey' | 'green' | 'primary';
    href?: string;
}