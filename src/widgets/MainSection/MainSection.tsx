import styles from './MainSection.module.css';
import { IMainContentData } from '@/entities/main-content/types';
import { MobileVersion } from './MobileVersion/MobileVersion';
import { TabletVersion } from './TabletVersion/TabletVersion';
import { DesktopVersion } from './DesktopVersion/DesktopVersion';

interface MainSectionProps {
  data: IMainContentData;
}

export const MainSection = ({ data }: MainSectionProps) => {
  return (
    <section className={styles.mainSection}>
      {/* Mobile версия */}
      <div className={styles.mobileContainer}>
        <MobileVersion data={data} />
      </div>

      {/* Tablet версия */}
      <div className={styles.tabletContainer}>
        <TabletVersion data={data} />
      </div>

      {/* Desktop/Large версия */}
      <div className={styles.desktopContainer}>
        <DesktopVersion data={data} />
      </div>
    </section>
  );
};