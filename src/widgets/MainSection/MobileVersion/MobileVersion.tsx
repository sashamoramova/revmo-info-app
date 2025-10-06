import styles from './MobileVersion.module.css';
import { IMainContentData } from '@/entities/main-content/types';

interface MobileVersionProps {
  data: IMainContentData;
}

export const MobileVersion = ({ data }: MobileVersionProps) => {
  return (
    <div className={styles.container}>
      {/* Основной контент */}
      <div className={styles.mainContent}>
        {/* Заголовок и подзаголовок */}
        <div className={styles.helperContent}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.subtitle}>{data.subtitle}</p>
          
          {/* Кнопки скачивания */}
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
          
          {/* APK кнопка */}
          {data.buttons.apk.enabled && (
            <button className={styles.apkButton}>
              {data.buttons.apk.label} 📥
            </button>
          )}
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

        {/* Нижний блок - только кнопка видео */}
        <div className={styles.bottomActions}>
          {data.sidebar.watch_video.enabled && (
            <button className={styles.watchVideoButton}>
              ▶️ {data.sidebar.watch_video.label}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};