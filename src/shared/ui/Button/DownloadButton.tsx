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
      <div className={styles.rightSide}>
        <span className={styles.buttonText} data-text="Download app">Download app</span>

        {/* <svg
          width="0"
          height="0"
          aria-hidden="true"
          style={{ position: "absolute" }}
        >
          <defs>
            <linearGradient
              id="buttonGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
              gradientTransform="rotate(312)"
            >
              <stop offset="-0.21%" stopColor="#bdfff4" />
              <stop offset="100.23%" stopColor="#d93497" />
            </linearGradient>
          </defs>
        </svg> */}

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
            stroke="#808080ff"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
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
            stroke="#606060ff"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
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
            stroke="#373737ff"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </button>
  );
}
