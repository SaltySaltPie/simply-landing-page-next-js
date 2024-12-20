"use client";
import { icons_we_renovate } from "@/utils/icon";
import styles from "./WeRenoHero.module.scss";
import { Text } from "@/components/common/text/Text";

export const WeRenoHero = () => {
   return (
      <div className={`${styles.contentC}`}>
         <div className={`${styles.content}`}>
            <Text type="f2-5B">Transforming Communities with Quality, Affordable Renovations</Text>
            <Text type="f1-25">
               We bring positive change to families and neighborhoods by providing value-engineered upgrades that exceed
               standards. Our renovations ensure safe, clean, and affordable rentals that respect the unique character
               and history of each community we serve.
            </Text>
         </div>
         <div className={`${styles.banner}`} style={{ backgroundImage: `url(${icons_we_renovate.hero.banner})` }}></div>
      </div>
   );
};
