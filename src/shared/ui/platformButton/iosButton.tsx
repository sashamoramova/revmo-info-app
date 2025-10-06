import styles from './styles.module.css';

interface AppleButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

export const AppleButton = ({ label, onClick, className }: AppleButtonProps) => {
  return (
    <button 
      className={`${styles.platformButton} ${className || ''}`}
      onClick={onClick}
    >
      <img
        src="/icons/apple-icon.svg"
        alt="Apple"
        className={styles.platformIcon}
      />
      {/* <span className={styles.textWithIcon}> */}
        <span className={styles.buttonText}>{label}</span>
        <img
          src="/icons/download-arrow.svg"
          alt="Download"
          className={styles.downloadIcon}
          id='apple-icon'
        />
      {/* </span> */}
    </button>
  );
};

export default AppleButton;