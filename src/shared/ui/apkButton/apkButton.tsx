import styles from "./apkButton.module.css";

interface ApkButtonProps {
  label: string;
}

export default function ApkButton({ label }: ApkButtonProps) {
  return (
    <button className={styles.apkButton}>
      {label}
      <img src="/icons/apk-button.svg" alt="Download APK" />
    </button>
  );
}