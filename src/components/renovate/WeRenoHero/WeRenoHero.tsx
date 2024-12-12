"use client";
import { icons, icons_we_renovate } from "@/utils/icon";
import styles from "./WeRenoHero.module.scss";

export const WeRenoHero = () => {
   return (
      <div className={`${styles.contentC}`}>
         <div className={`${styles.content}`}>
            <h1>Transforming Communities with Quality, Affordable Renovations</h1>
            <p>
               We bring positive change to families and neighborhoods by providing value-engineered upgrades that exceed
               standards. Our renovations ensure safe, clean, and affordable rentals that respect the unique character
               and history of each community we serve.
            </p>
         </div>
         <div className={`${styles.banner}`} style={{ backgroundImage: `url(${icons_we_renovate.hero.banner})` }}>
            {/* <Image src={icons_we_renovate.hero.banner.trimEnd()} alt="" width={400} height={400} /> */}
         </div>
      </div>
   );
};
