import styles from "./Text.module.scss";
export const Text = ({ children, type, className }: TTextProps) => {
   return <p className={`${styles.text} ${styles[type]} ${className}`}>{children}</p>;
};

type TTextProps = {
   children: React.ReactNode;
   className?: string;
   type: "f1-125" | "f1-25" | "f1";
};
