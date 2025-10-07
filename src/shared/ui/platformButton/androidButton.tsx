import styles from './styles.module.css';

interface AndroidButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

export const AndroidButton = ({ label, onClick, className }: AndroidButtonProps) => {
  return (
    <button 
      className={`${styles.platformButton} ${className || ''}`}
      onClick={onClick}
    >
      <img
        src="/icons/google-icon.svg"
        alt="Google"
        className={styles.platformIcon}
      />
      <span className={styles.buttonText}>
        {label}
      </span>
      <img
        src="/icons/download-arrow.svg"
        alt="Download"
        className={styles.downloadIcon}
        id='android-icon'
      />
    </button>
  );
};

export default AndroidButton;