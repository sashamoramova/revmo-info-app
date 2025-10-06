import DownloadButton from "@/shared/ui/downloadButton/downloadButton";
import styles from "./MainSection.module.css";
import { IMainContentData } from "@/entities/main-content/types";
// DownloadButton


interface MainSectionProps {
  data: IMainContentData;
}

export const MainSection = ({ data }: MainSectionProps) => {
  return (
    <section className={styles.mainSection}>
      <div className={styles.headerInfo}>
        <div className={styles.logo}>
          <img src="/logo.svg" alt="Revmo.info" className={styles.logoIcon} />
        </div>
        <div className={styles.downloadAnimation}>
            {/* бебра */}
            <DownloadButton />
        </div>
      </div>

      <div className={styles.container}>
        {/* Helper Content */}
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

          {data.buttons.apk.enabled && (
            <button className={styles.apkButton}>
              {data.buttons.apk.label} 📥
            </button>
          )}

          {/* Sidebar для laptop - внутри helperContent */}
          <div className={styles.sidebarLaptop}>
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

        {/* Video Block */}
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

        {/* Sidebar для mobile - только кнопка видео */}
        <div className={styles.sidebarMobile}>
          {data.sidebar.watch_video.enabled && (
            <button className={styles.watchVideoButton}>
              ▶️ {data.sidebar.watch_video.label}
            </button>
          )}
        </div>

        {/* Sidebar для tablet - кнопка видео + QR код */}
        <div className={styles.sidebarTablet}>
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

        {/* Sidebar для desktop/large - absolute позиция */}
        <div className={styles.sidebarDesktop}>
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
    </section>
  );
};

// import { IMainContentData } from '@/entities/main-content/types';
// import styles from './MainSection.module.css';

// export default function MainSection({ data }: { data: IMainContentData }) {
//   const { title, subtitle, buttons, sidebar } = data;

//   return (
//     <section className={styles.heroSection}>
//       {/* Левый блок: заголовок + кнопки */}
//       <div className={styles.heroLeft}>
//         <div className={styles.heroText}>
//           <h1 className={styles.title}>{title}</h1>
//           <p className={styles.subtitle}>{subtitle}</p>
//         </div>

//         <div className={styles.heroButtons}>
//           {buttons.ios.enabled && (
//             <a href="#" className={`${styles.btn} ${styles.btnIos}`}>
//               {buttons.ios.label}
//             </a>
//           )}
//           {buttons.android.enabled && (
//             <a href="#" className={`${styles.btn} ${styles.btnAndroid}`}>
//               {buttons.android.label}
//             </a>
//           )}
//           {buttons.apk.enabled && (
//             <a href="#" className={`${styles.btn} ${styles.btnApk}`}>
//               {buttons.apk.label}
//             </a>
//           )}
//         </div>
//       </div>

//       {/* Центр: изображение телефона */}
//       <div className={styles.heroPhone}>
//         <div className={styles.phonePlaceholder} />
//       </div>

//       {/* Правый блок: сайдбар (видео, QR) */}
//       <div className={styles.heroSidebar}>
//         {sidebar.watch_video.enabled && (
//           <a
//             href={sidebar.watch_video.url}
//             target="_blank"
//             rel="noopener noreferrer"
//             className={styles.sidebarItem}
//           >
//             ▶ {sidebar.watch_video.label}
//           </a>
//         )}
//         {sidebar.qr_code.enabled && (
//           <div className={styles.sidebarItem}>
//             📱 {sidebar.qr_code.label}
//             <img
//               src={sidebar.qr_code.url}
//               alt="QR Code"
//               className={styles.qrCode}
//             />
//           </div>
//         )}
//       </div>
//     </section>
//   );
// }
