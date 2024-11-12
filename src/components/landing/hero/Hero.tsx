"use client";

import { useContent } from "@/hooks/useContent";
import styles from "./Hero.module.scss";
import Image from "next/image";
import { icons } from "@/utils/icon";

export const Hero = () => {
   const { content } = useContent();

   const { hero } = content;

   if (!hero) return null;

   return (
      <div className={`${styles.contentC}`}>
         <div className={`${styles.heroC}`}>
            <div className={`${styles.title}`}>
               <h4>{content.hero.subtitle}</h4>
               <h1>{content.hero.title}</h1>
               <div className={`${styles.searchC}`}>
                  <input type="text" placeholder="Enter your property address" />
                  <div className={`${styles.searchIcon}`}>
                     <Image src={icons.header.arrow_forward} alt="" fill />
                  </div>
               </div>
               <div className={`${styles.iconAgency}`}>
                  <Image src={icons.header.hero.bigIcon["bbb"]} alt="" fill objectFit="cover" />
               </div>
            </div>
         </div>
      </div>
   );
};
