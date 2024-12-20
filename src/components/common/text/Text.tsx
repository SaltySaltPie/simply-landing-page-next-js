import styles from "./Text.module.scss";
export const Text = ({ children, type }: TTextProps) => {
   return <p className={`${styles.text} ${styles[type]}`}>{children}</p>;
};

type TTextProps = {
   children: React.ReactNode;
   type: "f1-125";
};
