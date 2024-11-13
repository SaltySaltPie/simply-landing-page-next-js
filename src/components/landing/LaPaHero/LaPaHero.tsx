"use client";

import { useContent } from "@/hooks/useContent";
import styles from "./LaPaHero.module.scss";
import Image from "next/image";
import { icons } from "@/utils/icon";
import { CustomCarousel } from "@/components/common/customCarousel/CustomCarousel";
import { ResponsiveType } from "react-multi-carousel";
import Link from "next/link";

export const LaPaHero = () => {
   const { content } = useContent();

   const { hero } = content;

   if (!hero) return null;
   const { ratings, subtitle, title } = hero;

   return (
      <div className={`${styles.heroC}`}>
         <div className={`${styles.title}`}>
            <h3>{subtitle}</h3>
            <h1>{title}</h1>
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
         <CustomCarousel
            arrows
            infinite
            autoPlay
            responsive={responsive}
            className={`${styles.carousel}`}
            removeArrowOnDeviceType={["tablet", "mobile"]}
         >
            {ratings.map(({ agencyName, bigIcon, link, smallIcon, title }, index) => (
               <div key={index} className={`${styles.rating}`}>
                  <div className={`${styles.top}`}>
                     <div className={`${styles.bigIcon}`}>
                        <Image src={bigIcon} alt="" fill sizes="10vw" />
                     </div>
                     {link && (
                        <Link href={link} className={`${styles.linkIcon}`}>
                           <Image src={icons.hero["link"]} alt="" fill sizes="10vw" />
                        </Link>
                     )}
                  </div>
                  <b>{title}</b>
                  <div className={`${styles.bot}`}>
                     <div className={`${styles.smallIcon}`}>
                        <Image src={smallIcon} alt="" fill sizes="10vw" />
                     </div>
                     <p className={`t2`}>{agencyName}</p>
                  </div>
               </div>
            ))}
         </CustomCarousel>
      </div>
   );
};
const responsive: ResponsiveType = {
   1: {
      breakpoint: { max: 3000, min: 2300 },
      items: 6,
   },
   2: {
      breakpoint: { max: 2300, min: 2000 },
      items: 5,
   },
   3: {
      breakpoint: { max: 2000, min: 1600 },
      items: 4,
   },
   4: {
      breakpoint: { max: 1600, min: 1260 },
      items: 3,
   },
   5: {
      breakpoint: { max: 1260, min: 800 },
      items: 2,
   },
   6: {
      breakpoint: { max: 800, min: 0 },
      items: 1,
   },
};
