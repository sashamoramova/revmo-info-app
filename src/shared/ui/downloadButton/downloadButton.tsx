import styles from "./downloadButton.module.css";

const ArrowIcon = ({ color }: { color: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="8"
    height="12"
    viewBox="0 0 8 12"
    fill="none"
    className={styles.arrowSvg}
  >
    <path
      d="M1.57007 0.75L5.96231 4.91107C6.58682 5.50271 6.58682 6.49729 5.96231 7.08893L1.57007 11.25"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

export default function DownloadButton() {
  return (
    <button className={styles.downloadButton}>
      <div className={styles.iconCircle}>
        <img
          src="/icons/download-button.svg"
          alt="downloadButton"
          className={styles.iconSvg}
          loading="lazy"
        />
      </div>
      <div className={styles.rightSide}>
        <span className={styles.buttonText} data-text="Download app">Download app</span>
        
        <ArrowIcon color="#808080ff" />
        <ArrowIcon color="#606060ff" />
        <ArrowIcon color="#373737ff" />
      </div>
    </button>
  );
}











