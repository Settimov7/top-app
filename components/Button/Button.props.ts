import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type HTMLButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export interface ButtonProps extends HTMLButtonProps {
    appearance: 'primary' | 'ghost';
    arrow?: 'right' | 'down';
}