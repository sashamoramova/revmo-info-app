import { NavigationApi } from "@/entities/navigation";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import { DesktopNavigation } from "./DesktopNavigation/DesktopNavigation";
import styles from "./Header.module.css";

export async function Header() {
  let navigationData;

  try {
    navigationData = await NavigationApi.getNavigation();
  } catch (error) {
    console.error("Failed to fetch navigation:", error);
  }

  return (
    <header className={styles.header}>
      <div className={styles.mobileTabletOnly}>
        <div className={styles.burgerButton}>
          {navigationData && <BurgerMenu navigationData={navigationData} />}
        </div>
      </div>

      <div className={styles.desktopOnly}>
        <div className={styles.desktopNav}>
          {navigationData && (
            <DesktopNavigation navigationData={navigationData} />
          )}
        </div>
      </div>
    </header>
  );
}
