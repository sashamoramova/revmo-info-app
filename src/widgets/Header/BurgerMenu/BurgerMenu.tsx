import { type INavigationData } from "@/entities/navigation";
import Image from "next/image";
import styles from "./BurgerMenu.module.css";

interface BurgerMenuProps {
  navigationData: INavigationData;
}

export function BurgerMenu({ navigationData }: BurgerMenuProps) {
  return (
    <>
      <input type="checkbox" id="burger-toggle" className={styles.menuToggle} />

      <label
        htmlFor="burger-toggle"
        className={styles.burgerButton}
        aria-label="Toggle menu"
      >
        <div className={styles.mobileIcon}>
          <Image
            src="/icons/burger-menu-mobile.svg"
            alt="Open menu"
            width={48}
            height={48}
            className={styles.menuIcon}
            priority
          />
        </div>
        <div className={styles.tabletIcon}>
          <Image
            src="/icons/burger-menu-tablet.svg"
            alt="Open menu"
            width={60}
            height={60}
            className={styles.menuIcon}
            priority
          />
        </div>
      </label>

      <label htmlFor="burger-toggle" className={styles.overlay}></label>

      <div className={styles.menu}>
        <nav className={styles.nav}>
          {navigationData.menu.map((item) => (
            <a key={item.id} href={item.link} className={styles.menuItem}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}
