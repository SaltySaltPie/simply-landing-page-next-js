import styles from "./We.module.scss";
import { WeHero } from "./WeHero/WeHero";
export const We = () => {
   return (
      <div className={`${styles.contentC}`}>
         <WeHero />
      </div>
   );
};
