
import React from "react";
import styles from "./videoButton.module.css";
import classNames from "classnames"; // или clsx
// className={styles.videoButton}
interface VideoButtonProps {
	// text?: string;
	videoUrl?: string;
	className?: string;
}

export const VideoButton: React.FC<VideoButtonProps> = ({videoUrl, className }) => (
	<a
		href={videoUrl}
		target="_blank"
		rel="noopener noreferrer"
		// className={classNames(styles.videoButton, className)}
		className={`${styles.videoButton} ${className || ''}`}
		style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", border: "none", background: "none", padding: 0, cursor: "pointer", textDecoration: "none" }}
	>
		<span className={styles.icon}>
			<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect width="48" height="48" rx="24" fill="#9488EC"/>
				<path d="M21 34H27C32 34 34 32 34 27V21C34 16 32 14 27 14H21C16 14 14 16 14 21V27C14 32 16 34 21 34Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
				<path d="M21.1 24V22.52C21.1 20.61 22.45 19.84 24.1 20.79L25.38 21.53L26.66 22.27C28.31 23.22 28.31 24.78 26.66 25.73L25.38 26.47L24.1 27.21C22.45 28.16 21.1 27.38 21.1 25.48V24Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
			</svg>
		</span>
		<span className={styles.text}>смотреть видео о приложении</span>
	</a>
);

export default VideoButton;
