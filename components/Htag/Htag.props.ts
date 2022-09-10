import { PropsWithChildren } from 'react';

export interface HtagProps extends PropsWithChildren {
    tag: 'h1' | 'h2' | 'h3', 
}