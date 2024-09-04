'use client';
import { useState, useEffect } from 'react';
import { ReviewCardProps } from './ReviewCard.props';
import { ReactComponent as StarIcon } from './star.svg';
import styles from './ReviewCard.module.css';
import cn from 'classnames';

export const ReviewCard = ({
  isEditable = false,
  rating,
  setRating,
  className,
  ...props
}: ReviewCardProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>),
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const StarIconComponent = ({ className }: { className: string }) => {
    return <StarIcon className={className} />;
  };

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <StarIconComponent
          className={cn(styles.star, { [styles.filled]: i < currentRating })}
        />
      );
    });

    setRatingArray(updatedArray);
  };

  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
