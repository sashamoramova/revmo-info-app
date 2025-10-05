import { MainApi } from '@/entities/main-content/api/mainApi';
import styles from './Footer.module.css';
import Image from 'next/image';

interface FooterProps {
  className?: string;
}

export async function Footer({ className }: FooterProps) {
  const mainData = await MainApi.getMainData();
  const { socials } = mainData;

  const socialIcons = [
    { key: 'vk', enabled: socials.vk.enabled, url: socials.vk.url },
    { key: 'telegram', enabled: socials.telegram.enabled, url: socials.telegram.url },
    { key: 'dzen', enabled: socials.dzen.enabled, url: socials.dzen.url },
    { key: 'vkVideo', enabled: socials.vkVideo.enabled, url: socials.vkVideo.url },
  ];

  return (
    <footer className={`${styles.footer} ${className || ''}`}>
      <div className={styles.content}>
        <div className={styles.logo}>
          <Image 
            src="/logo.svg" 
            alt="Revmo.info app" 
            width={120} 
            height={40}
            priority
          />
        </div>
        
        <div className={styles.socials}>
          {socialIcons.map(({ key, enabled, url }) => 
            enabled && (
              <a 
                key={key} 
                href={url} 
                className={styles.socialLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className={`${styles.socialIcon} ${styles[key]}`} />
              </a>
            )
          )}
        </div>
      </div>
    </footer>
  );
}