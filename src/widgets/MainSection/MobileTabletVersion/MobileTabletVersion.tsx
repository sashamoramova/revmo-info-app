import styles from "./MobileTabletVersion.module.css";
import { IMainContentData } from "@/entities/main-content/types";
import DownloadButton from "@/shared/ui/downloadButton/downloadButton";
import AndroidButton from "@/shared/ui/platformButton/androidButton";
import AppleButton from "@/shared/ui/platformButton/iosButton";
import ApkButton from "@/shared/ui/apkButton/apkButton";
import { VideoButton } from "@/shared/ui/videoButton/videoButton";
import Image from "next/image";

interface MobileTabletVersionProps {
  data: IMainContentData;
}

export const MobileTabletVersion = ({ data }: MobileTabletVersionProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.headerInfo}>
        <div className={styles.logo}>
          <Image
            src="/logo.svg"
            alt="Revmo.info"
            width={199}
            height={60}
            className={styles.logoIcon}
          />
        </div>
        <div className={styles.downloadAnimation}>
          <DownloadButton />
        </div>
      </div>

      <div className={styles.mainContent}>
        <div className={styles.helperContent}>
          {data.buttons.apk.enabled && (
            <div className={styles.apkButtonContainer}>
              <ApkButton label={data.buttons.apk.label} />
            </div>
          )}

          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.subtitle}>{data.subtitle}</p>

          <div className={styles.downloadButtons}>
            {data.buttons.ios.enabled && (
              <AppleButton label={data.buttons.ios.label} />
            )}
            {data.buttons.android.enabled && (
              <AndroidButton label={data.buttons.android.label} />
            )}
          </div>
        </div>

        <div className={styles.videoBlock}>
          <div className={styles.phoneFrame}>
            <video
              src={data.videoUrl}
              autoPlay
              muted
              loop
              preload="auto"
              poster="/icons/video-poster.jpg"
              className={styles.video}
            />
          </div>
        </div>

        <div className={styles.bottomActions}>
          {data.sidebar.watch_video.enabled && (
            <div className={styles.watchVideoDiv}>
              <VideoButton videoUrl={data.sidebar.watch_video.url} />
            </div>
          )}

          {data.sidebar.qr_code.enabled && (
            <div className={styles.qrCode}>
              <Image
                src="/icons/qr-icon.svg"
                alt="QR Image"
                width={48}
                height={48}
              />
              <span>{data.sidebar.qr_code.label}</span>
              {data.sidebar.qr_code.url && (
                <Image
                  src={data.sidebar.qr_code.url}
                  alt="QR Code"
                  width={140}
                  height={140}
                  className={styles.qrLogoOnQr}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
