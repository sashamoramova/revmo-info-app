import { MobileTabletVersion } from "./MobileTabletVersion/MobileTabletVersion";
import { DesktopVersion } from "./DesktopVersion/DesktopVersion";
import styles from "./MainSection.module.css";
import { IMainContentData } from "@/entities/main-content/types";

interface MainSectionProps {
  data: IMainContentData;
}

export const MainSection = ({ data }: MainSectionProps) => {
  return (
    <section className={styles.mainSection}>
      <div className={styles.contentWrapper}>
        <div className={styles.mobileTabletContainer}>
          <MobileTabletVersion data={data} />
        </div>

        <div className={styles.desktopContainer}>
          <DesktopVersion data={data} />
        </div>
      </div>
    </section>
  );
};
