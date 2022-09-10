import { DetailedHTMLProps, HTMLAttributes } from 'react';

type HTMLDivProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export interface RatingProps extends HTMLDivProps {
    rating: number;
    setRating?: (rating: number) => void;
    isEditable?: boolean;
}