
import styles from "./apkButton.module.css";
import Image from "next/image";

interface ApkButtonProps {
  label: string;
}

export default function ApkButton({ label }: ApkButtonProps) {
  return (
    <button className={styles.apkButton}>
      {label}
      <Image src="/icons/apk-button.svg" alt="Download APK" width={24} height={24} />
    </button>
  );
}