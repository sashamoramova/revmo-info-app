import DownloadButton from "@/shared/ui/downloadButton/downloadButton";
import styles from "./DesktopVersion.module.css";
import { IMainContentData } from "@/entities/main-content/types";

interface DesktopVersionProps {
  data: IMainContentData;
}

export const DesktopVersion = ({ data }: DesktopVersionProps) => {
  return (
    <div className={styles.container}>
      {/* APK кнопка и логотип вверху */}
      {/* <div className={styles.topBar}> */}
        <div className={styles.headerInfo}>
          <div className={styles.logo}>
            <img src="/logo.svg" alt="Revmo.info" className={styles.logoIcon} />
          </div>
          <div className={styles.downloadAnimation}>
            {/* бебра */}
            <DownloadButton />
          </div>
        </div>


      {/* Основной контент */}
      <div className={styles.mainContent}>
        {/* Верхняя часть для laptop (контент + видео в ряд) */}
        <div className={styles.topContent}>
          {/* Левая часть - текст и кнопки */}

          <div className={styles.helperContent}>
          {data.buttons.apk.enabled && (
            <button className={styles.apkButton}>
              {data.buttons.apk.label} 📥
            </button>
          )}
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

          {/* Центр - видео */}
          <div className={styles.videoBlock}>
            <div className={styles.phoneFrame}>
              <video src={data.videoUrl} autoPlay muted loop />
            </div>
          </div>
        </div>

        {/* Сайдбар (внизу для laptop, справа для desktop/large) */}
        <div className={styles.sidebar}>
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
