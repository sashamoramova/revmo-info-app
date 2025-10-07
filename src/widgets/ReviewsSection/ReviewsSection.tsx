// ReviewsSection.tsx
import { ReviewsApi } from "@/entities/reviews/api/reviewsApi";
import styles from "./ReviewsSection.module.css";
import { ReviewCard } from "@/entities/reviews/ui/reviewCard";

export default async function ReviewsSection() {
  const reviews = await ReviewsApi.getReviews();

  return (
    <section className={styles.reviewsSection}>
      <div className={styles.descriptionSection}>
        <h2 className={styles.title}>{reviews.title}</h2>
        <div className={styles.description}>{reviews.description}</div>
      </div>
      
      {/* Контейнер для центрирования карточек */}
      <div className={styles.sliderContainer}>
        <ul className={styles.reviewsList}>
          {(reviews.data ?? []).slice(0, 5).map((review) => (
            <li key={review.id} className={styles.reviewItem}>
              <ReviewCard review={review} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}