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

















// import styles from "./downloadButton.module.css";

// // Статический SVG как JSX (не как компонент)
// const ArrowIcon = ({ color }: { color: string }) => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="8"
//     height="12"
//     viewBox="0 0 8 12"
//     fill="none"
//   >
//     <path
//       d="M1.57007 0.75L5.96231 4.91107C6.58682 5.50271 6.58682 6.49729 5.96231 7.08893L1.57007 11.25"
//       stroke={color}
//       strokeWidth="1.5"
//       strokeLinecap="round"
//     />
//   </svg>
// );

// // Preload иконку
// export default function DownloadButton() {
//   return (
//     <>
//       {/* Preload критически важные ресурсы */}
//       <link rel="preload" href="/icons/download-button.svg" as="image" />
      
//       <button className={styles.downloadButton}>
//         <div className={styles.iconCircle}>
//           <img
//             src="/icons/download-button.svg"
//             alt="downloadButton"
//             className={styles.iconSvg}
//             loading="eager" // Загружать сразу
      
//           />
//         </div>
//         <div className={styles.rightSide}>
//           <span className={styles.buttonText} data-text="Download app">
//             Download app
//           </span>
          
//           {/* Статические SVG */}
//           <ArrowIcon color="#808080ff" />
//           <ArrowIcon color="#606060ff" />
//           <ArrowIcon color="#373737ff" />
//         </div>
//       </button>
//     </>
//   );
// }













// import styles from "./downloadButton.module.css";

// const Arrows = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     width="28"
//     height="12"
//     viewBox="0 0 28 12"
//     fill="none"
//     className={styles.arrowsSvg}
//     aria-hidden="true"
//   >
//     <defs>
//       <linearGradient id="btnArrowGradient" x1="0" y1="0" x2="28" y2="0" gradientUnits="userSpaceOnUse">
//         <stop offset="0%" stopColor="#bdfff4" />
//         <stop offset="100%" stopColor="#d93497" />
//       </linearGradient>
//     </defs>

//     {/* Серые стрелки (по умолчанию) */}
//     <g className={styles.arrowsBase}>
//       <path d="M1.57 0.75L5.962 4.911C6.587 5.503 6.587 6.497 5.962 7.089L1.57 11.25" stroke="#808080" strokeWidth="1.5" strokeLinecap="round" />
//       <path transform="translate(10 0)" d="M1.57 0.75L5.962 4.911C6.587 5.503 6.587 6.497 5.962 7.089L1.57 11.25" stroke="#606060" strokeWidth="1.5" strokeLinecap="round" />
//       <path transform="translate(20 0)" d="M1.57 0.75L5.962 4.911C6.587 5.503 6.587 6.497 5.962 7.089L1.57 11.25" stroke="#373737" strokeWidth="1.5" strokeLinecap="round" />
//     </g>

//     {/* Градиентные стрелки (появляются при ховере) */}
//     <g className={styles.arrowsGradient}>
//       <path d="M1.57 0.75L5.962 4.911C6.587 5.503 6.587 6.497 5.962 7.089L1.57 11.25" stroke="url(#btnArrowGradient)" strokeWidth="1.5" strokeLinecap="round" />
//       <path transform="translate(10 0)" d="M1.57 0.75L5.962 4.911C6.587 5.503 6.587 6.497 5.962 7.089L1.57 11.25" stroke="url(#btnArrowGradient)" strokeWidth="1.5" strokeLinecap="round" />
//       <path transform="translate(20 0)" d="M1.57 0.75L5.962 4.911C6.587 5.503 6.587 6.497 5.962 7.089L1.57 11.25" stroke="url(#btnArrowGradient)" strokeWidth="1.5" strokeLinecap="round" />
//     </g>
//   </svg>
// );

// export default function DownloadButton() {
//   return (
//     <button className={styles.downloadButton}>
//       <div className={styles.iconCircle}>
//         <img
//           src="/icons/download-button.svg"
//           alt="downloadButton"
//           className={styles.iconSvg}
//           loading="lazy"
//         />
//       </div>
//       <div className={styles.rightSide}>
//         <span className={styles.buttonText} data-text="Download app">Download app</span>
//         <Arrows />
//       </div>
//     </button>
//   );
// }