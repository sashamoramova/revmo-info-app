'use client';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import type { IReview } from '@/entities/reviews/types';
import { ReviewCard } from '@/entities/reviews/ui/reviewCard';

interface ReviewsSliderProps {
  reviews: IReview[];
}

export default function ReviewsSlider({ reviews }: ReviewsSliderProps) {
  useEffect(() => {
    const ssrBlock = document.getElementById('ssr-reviews');
    if (ssrBlock) ssrBlock.style.display = 'none';
  }, []);

  return (
    <Swiper>
      {reviews.map(review => (
        <SwiperSlide key={review.id}>
          <ReviewCard review={review} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}