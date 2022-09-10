import { FC, KeyboardEvent, useEffect, useState } from 'react';
import classNames from 'classnames';

import { RatingProps } from './Rating.props';
import styles from './Rating.module.css';
import StarIcon from './star.svg';

export const Rating:FC<RatingProps> = ({ rating, setRating, isEditable = false, ...props }) => {
    const [ratingArray, setRatinArray] = useState<JSX.Element[]>(() => new Array(5).fill(() => <></>));

    const constructRating = (currentRating: number): void => {
        const updatedArray = ratingArray.map((_, index) => {
            return (
                <span
                    key={index} 
                    className={classNames(styles.star, {
                        [styles.filled]: index < currentRating,
                        [styles.editable]: isEditable
                    })} 
                    onMouseEnter={() => changeDisplay(index + 1)}
                    onMouseLeave={() => changeDisplay(rating)}
                    onClick={() => clickHandler(index + 1)}
                >
                    <StarIcon 
                        tabIndex={isEditable ? 0 : -1}
                        onKeyDown={(event: KeyboardEvent<SVGAElement>) => {
                            isEditable && handleSpace(index + 1, event);
                        }}
                    />
                </span>
            );
        });

        setRatinArray(updatedArray);
    };

    const changeDisplay = (rating: number): void => {
        if(!isEditable) {
            return;
        }

        constructRating(rating);
    };

    const clickHandler = (rating: number) => {
        if(!isEditable || !setRating) {
            return;
        }

        setRating(rating);
    };

    const handleSpace = (rating: number, event: KeyboardEvent<SVGAElement>) => {
        if(event.key !== ' ' || !setRating) {
            return;
        }

        setRating(rating);
    };

    useEffect(() => {
        constructRating(rating);
    }, [rating]);

    return <div {...props}>{ratingArray.map((ratingELement, index) => <span key={index}>{ratingELement}</span>)}</div>;
};