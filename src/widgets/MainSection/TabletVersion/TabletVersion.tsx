import DownloadButton from "@/shared/ui/Button/DownloadButton";
import styles from "./TabletVersion.module.css";
import { IMainContentData } from "@/entities/main-content/types";

interface TabletVersionProps {
  data: IMainContentData;
}

export const TabletVersion = ({ data }: TabletVersionProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.headerInfo}>
        <div className={styles.logo}>
          <img src="/logo.svg" alt="Revmo.info" className={styles.logoIcon} />
        </div>
        <div className={styles.downloadAnimation}>
          <DownloadButton />
        </div>
      </div>

      {/* Основной контент по центру */}
      <div className={styles.mainContent}>
        <div className={styles.helperContent}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.subtitle}>{data.subtitle}</p>

          <div className={styles.downloadButtons}>
            {data.buttons.ios.enabled && (
              <button className={styles.iosButton}>
                🍎 {data.buttons.ios.label}
              </button>
            )}
            {data.buttons.android.enabled && (
              <button className={styles.androidButton}>
                📱 {data.buttons.android.label}
              </button>
            )}
          </div>
        </div>

        {/* Видео */}
        <div className={styles.videoBlock}>
          <div className={styles.phoneFrame}>
            <video
              src={data.videoUrl}
              autoPlay
              muted
              loop
              className={styles.video}
            />
          </div>
        </div>

        {/* Нижний блок с действиями */}
        <div className={styles.bottomActions}>
          {data.sidebar.watch_video.enabled && (
            <button className={styles.watchVideoButton}>
              ▶️ {data.sidebar.watch_video.label}
            </button>
          )}
          {data.sidebar.qr_code.enabled && (
            <div className={styles.qrCode}>
              <img src={data.sidebar.qr_code.url} alt="QR Code" />
              <span>{data.sidebar.qr_code.label}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
