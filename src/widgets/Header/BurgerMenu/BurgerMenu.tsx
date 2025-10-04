/* filepath: c:\Users\Пользователь\Desktop\test\revmo-info-app\src\widgets\Header\BurgerMenu\BurgerMenu.tsx */
import { type INavigationData } from "@/entities/navigation";
import styles from "./BurgerMenu.module.css";

interface BurgerMenuProps {
  navigationData: INavigationData;
}

export function BurgerMenu({ navigationData }: BurgerMenuProps) {
  return (
    <>
      {/* Скрытый чекбокс для состояния */}
      <input type="checkbox" id="burger-toggle" className={styles.menuToggle} />

      {/* Кнопка-лейбл для чекбокса */}
      <label
        htmlFor="burger-toggle"
        className={styles.burgerButton}
        aria-label="Toggle menu"
      >
        {/* Разные иконки для mobile/tablet */}
        <div className={styles.mobileIcon}>
          <img src="/icons/burger-menu-mobile.svg" alt="Open menu" />
        </div>
        <div className={styles.tabletIcon}>
          <img src="/icons/burger-menu-tablet.svg" alt="Open menu" />
        </div>
      </label>

      {/* Оверлей для закрытия */}
      <label htmlFor="burger-toggle" className={styles.overlay}></label>

      {/* Меню */}
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
