"use client";
import { icons_we_rent } from "@/utils/icon";
import styles from "./WeRentHero.module.scss";
export const WeRentHero = () => {
   return (
      <div className={`${styles.contentC}`}>
         <div className={`${styles.banner}`} style={{ backgroundImage: `url(${icons_we_rent.hero.banner})` }}></div>
         <div className={`${styles.content}`}>
            <h1>Empowering Families with Safe, Affordable Homes</h1>
            <div className={`${styles.description}`}>
               We rent high-quality, affordable homes that emphasize safety, comfort, and community. Through our newly
               renovated, desirable homes, we empower underserved families to begin their next chapter with a solid
               foundation.
            </div>
            {/* <button>CTA</button> */}
         </div>
      </div>
   );
};
