"use client";
import { icons_we_rent } from "@/utils/icon";
import styles from "./WeRentHero.module.scss";
import { Text } from "@/components/common/text/Text";
import Image from "next/image";

export const WeRentHero = () => {
   return (
      <div className={`${styles.contentC}`}>
         <div className={`${styles.banner}`}>
            <Image src={icons_we_rent.hero.banner} alt="" fill sizes="100vw" />
         </div>
         <div className={`${styles.content}`}>
            <h1>Empowering Families with Safe, Affordable Homes</h1>
            <Text type="f1-25" className={`${styles.description}`}>
               We rent high-quality, affordable homes that emphasize safety, comfort, and community. Through our newly
               renovated, desirable homes, we empower underserved families to begin their next chapter with a solid
               foundation.
            </Text>
            {/* <button>CTA</button> */}
         </div>
      </div>
   );
};
