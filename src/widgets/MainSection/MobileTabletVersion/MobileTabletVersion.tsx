import styles from "./MobileTabletVersion.module.css";
import { IMainContentData } from "@/entities/main-content/types";
import DownloadButton from "@/shared/ui/downloadButton/downloadButton";
import AndroidButton from "@/shared/ui/platformButton/androidButton";
import AppleButton from "@/shared/ui/platformButton/iosButton";
import ApkButton from "@/shared/ui/apkButton/apkButton";

interface MobileTabletVersionProps {
  data: IMainContentData;
}

export const MobileTabletVersion = ({ data }: MobileTabletVersionProps) => {
  return (
    <div className={styles.container}>
      {/* Хедер для tablet - показывается только на планшете */}
      <div className={styles.headerInfo}>
        <div className={styles.logo}>
          <img src="/logo.svg" alt="Revmo.info" className={styles.logoIcon} />
        </div>
        <div className={styles.downloadAnimation}>
          <DownloadButton />
        </div>
      </div>

      {/* Основной контент */}
      <div className={styles.mainContent}>
        {/* Заголовок и подзаголовок */}
        <div className={styles.helperContent}>
          {/* ApkButton с grid-area для позиционирования */}
          {data.buttons.apk.enabled && (
            <div className={styles.apkButtonContainer}>
              <ApkButton label={data.buttons.apk.label} />
            </div>
          )}

          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.subtitle}>{data.subtitle}</p>

          {/* Кнопки скачивания */}
          <div className={styles.downloadButtons}>
            {data.buttons.ios.enabled && (
              <AppleButton label={data.buttons.ios.label} />
            )}
            {data.buttons.android.enabled && (
              <AndroidButton label={data.buttons.android.label} />
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
          {/* QR код - только для tablet */}
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
