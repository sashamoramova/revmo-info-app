/* filepath: c:\Users\Пользователь\Desktop\test\revmo-info-app\src\widgets\Header\Header.tsx */
import { NavigationApi } from "@/entities/navigation";
import { BurgerMenu } from "./BurgerMenu/BurgerMenu";
import { DesktopNavigation } from "./DesktopNavigation/DesktopNavigation";
import styles from "./Header.module.css";

// const FALLBACK_NAVIGATION = {
//   logo: { link: "/", src: "", alt: "Revmo Logo" },
//   menu: [
//     { id: "1", label: "Назад к сайту", link: "https://revmo.info" },
//     { id: "2", label: "О приложении", link: "/about" },
//     { id: "3", label: "Возможности", link: "/features" },
//     { id: "4", label: "Общение", link: "/chat" },
//     { id: "5", label: "Отзывы", link: "/reviews" },
//   ],
// };

export async function Header() {
  let navigationData;

  try {
    navigationData = await NavigationApi.getNavigation();
  } catch (error) {
    console.error("Failed to fetch navigation:", error);
    // navigationData = FALLBACK_NAVIGATION;
  }

  return (
    <header className={styles.header}>
      {/* Mobile + Tablet: Только кнопка в fixed контейнере */}
      <div className={styles.mobileTabletOnly}>
        <div className={styles.burgerButton}>
          {/* BurgerMenu сам управляет позиционированием меню */}
          {navigationData && <BurgerMenu navigationData={navigationData} />}
        </div>
      </div>

      {/* Desktop: Navigation Bar */}
      <div className={styles.desktopOnly}>
        <div className={styles.desktopNav}>
          {navigationData && <DesktopNavigation navigationData={navigationData}/>}
          {/* <DesktopNavigation navigationData={navigationData} /> */}
        </div>
      </div>
    </header>
  );
}
