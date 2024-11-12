import { useContent } from "@/hooks/useContent";
import styles from "./Hero.module.scss";
export const Hero = () => {
   const { content } = useContent();
   const { hero } = content;
   if (!hero) return null;
   return <div className={`${styles.contentC}`}>$1</div>;
};
