import { type INavigationData } from "@/entities/navigation";
import styles from "./DesktopNavigation.module.css";

interface DesktopNavigationProps {
  navigationData: INavigationData;
}

// Убираем 'use client'
export function DesktopNavigation({ navigationData }: DesktopNavigationProps) {
  return (
    <nav className={styles.desktopNav}>
      <a href={navigationData.logo.link} className={styles.backButton}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M9.57 5.93005L3.5 12.0001L9.57 18.0701"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.5 12H3.67004"
            stroke="white"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span>{navigationData.menu[0]?.label || "Назад к сайту"}</span>
      </a>

      <div className={styles.menuItems}>
        {navigationData.menu.slice(1).map((item) => (
          <a key={item.id} href={item.link} className={styles.menuItem}>
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
