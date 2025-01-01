import styles from "./Text.module.scss";
export const Text = ({ children, type, className }: TTextProps) => {
   return <p className={`${styles.text} ${styles[type]} ${className}`}>{children}</p>;
};

type TTextProps = {
   children: React.ReactNode;
   className?: string;
   type: "f1-125" | "f1-125BNoScale" | "f1-25" | "f1" | "f1-25B" | "f1-5B" | "f1-65B" | "f1-5" | "f2B" | "f2-5B";
};
