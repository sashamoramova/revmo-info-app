import styles from "./DownloadButton.module.css";

export default function DownloadButton() {
  return (
    <button className={styles.downloadButton}>
      <div className={styles.iconCircle}>
        <img
          src="/icons/download-button.svg"
          alt="downloadButton"
          // width="20"
          // height="20"
          className={styles.iconSvg}
        />
      </div>
      <span className={styles.buttonText}>Download app</span>
      {/* <span className={styles.arrow}>➤</span>
      <span className={styles.arrow}>➤</span>
      <span className={styles.arrow}>➤</span> */}
      <img src="/icons/arrow.svg" alt="" className={styles.arrow} />
      <img src="/icons/arrow.svg" alt="" className={styles.arrow} />
      <img src="/icons/arrow.svg" alt="" className={styles.arrow} />
    </button>
  );
}
