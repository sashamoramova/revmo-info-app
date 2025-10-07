import React from 'react';
import styles from './reviewCard.module.css';
import type { IReview } from '../types';

interface ReviewCardProps {
  review: IReview;
}

export const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        {review.photo && (
          <img src={review.photo} alt={review.name} className={styles.avatar} />
        )}
        <span className={styles.name}>{review.name}</span>
        <span className={styles.date}>
          {review.date}
          <img src="/icons/calendar.svg" alt="calendar" className={styles.calendarIcon} />
        </span>
      </div>
      <div className={styles.text}>{review.text}</div>
    </div>
  );
};
