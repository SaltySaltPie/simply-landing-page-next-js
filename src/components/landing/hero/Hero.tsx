"use client";

import { useContent } from "@/hooks/useContent";
import styles from "./Hero.module.scss";
import { CF_CDN_URL } from "@/utils/CF_CDN_URL";
import Image from "next/image";
import { icons } from "@/utils/icon";
// import { icons } from "@/utils/icon";

export const Hero = () => {
   const { content } = useContent();

   const { hero } = content;
   if (!hero) return null;

   return (
      <div className={`${styles.contentC}`}>
         <div
            className={`${styles.heroC}`}
            style={{
               background: `url(${CF_CDN_URL("/assets/home_bg.png")}) lightgray 50% / cover no-repeat`,
            }}
         >
            <div className={`${styles.title}`}>
               <h4>{content.hero.subtitle}</h4>
               <h1>{content.hero.title}</h1>
               <div className={`${styles.searchC}`}>
                  <input type="text" placeholder="Enter your property address" />
                  <div className={`${styles.searchIcon}`}>
                     <Image src={icons.header.arrow_forward.trimEnd()} alt="" width={20} height={20} />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
