import DownloadButton from "@/shared/ui/downloadButton/downloadButton";
import styles from "./DesktopVersion.module.css";
import { IMainContentData } from "@/entities/main-content/types";
import ApkButton from "@/shared/ui/apkButton/apkButton";
import AppleButton from "@/shared/ui/platformButton/iosButton";
import AndroidButton from "@/shared/ui/platformButton/androidButton";
import Image from "next/image";
import VideoButton from "@/shared/ui/videoButton/videoButton";

interface DesktopVersionProps {
  data: IMainContentData;
}

export const DesktopVersion = ({ data }: DesktopVersionProps) => {
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

      <div className={styles.mainContent}>
        <div className={styles.helperContent}>
          {data.buttons.apk.enabled && (
            <div className={styles.apkButtonContainer}>
              <ApkButton label={data.buttons.apk.label} />
            </div>
          )}
          <div className={styles.titleSubtitle}>
            <h1 className={styles.title}>{data.title}</h1>
            <p className={styles.subtitle}>{data.subtitle}</p>
          </div>

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

        {data.sidebar.watch_video.enabled && (
          <div className={styles.watchVideoDiv}>
            {/* <VideoButton videoUrl={data.sidebar.watch_video.url} className={styles.videoButtonStyles} /> */}
            <a
              href={data.sidebar.watch_video.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.videoButtonStyles}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                border: "none",
                background: "none",
                padding: 0,
                cursor: "pointer",
                textDecoration: "none",
              }}
            >
              <span className={styles.icon}>
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="48" height="48" rx="24" fill="#9488EC" />
                  <path
                    d="M21 34H27C32 34 34 32 34 27V21C34 16 32 14 27 14H21C16 14 14 16 14 21V27C14 32 16 34 21 34Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21.1 24V22.52C21.1 20.61 22.45 19.84 24.1 20.79L25.38 21.53L26.66 22.27C28.31 23.22 28.31 24.78 26.66 25.73L25.38 26.47L24.1 27.21C22.45 28.16 21.1 27.38 21.1 25.48V24Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className={styles.text}>смотреть видео о приложении</span>
            </a>
          </div>
        )}

        {data.sidebar.qr_code.enabled && (
          <div className={styles.qrCode}>
            <div className={styles.qrLabel}>
              <Image
                src="/icons/qr-icon.svg"
                alt="QR Image"
                width={48}
                height={48}
              />
              <span>{data.sidebar.qr_code.label}</span>
            </div>
            <div>
              {data.sidebar.qr_code.url && (
                // <Image
                //   src={data.sidebar.qr_code.url}
                //   alt="QR Code"

                //   className={styles.qrLogoOnQr}
                // />

                <img src={data.sidebar.qr_code.url} alt="QR Code" className={styles.qrLogoOnQr}/>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
