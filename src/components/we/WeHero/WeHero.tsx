"use client";

import Image from "next/image";
import { useContent } from "@/hooks/useContent";
import styles from "./WeHero.module.scss";
import { icons, icons_we } from "@/utils/icon";

export const WeHero = () => {
   const { content } = useContent();

   const { hero } = content;

   if (!hero) return null;
   const { subtitle, title } = hero;
   return (
      <div className={`${styles.heroC}`}>
         <div className={`${styles.title}`}>
            <div className={`${styles.heading}`}>
               <h3>{subtitle}</h3>
               <h1>{title}</h1>
            </div>
            <div className={`${styles.searchC}`}>
               <input type="text" placeholder="Enter your property address" />
               <div className={`${styles.searchIcon}`}>
                  <Image src={icons.header.arrow_forward} alt="" fill />
               </div>
            </div>
            <div className={`${styles.iconAgency}`}>
               <Image src={icons.header.hero.bigIcon["bbb"]} alt="" fill sizes="10vw" />
            </div>
         </div>
         <div className={`${styles.banner}`}>
            <Image src={icons_we.hero.banner} alt="" fill />
         </div>
      </div>
   );
};
