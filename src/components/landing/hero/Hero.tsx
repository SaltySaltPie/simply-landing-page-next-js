"use client";

import { useContent } from "@/hooks/useContent";
import styles from "./Hero.module.scss";

import { icons } from "@/data/icon";
export const Hero = () => {
   const { content } = useContent();

   const { hero } = content;
   if (!hero) return null;

   return (
      <div className={`${styles.contentC}`}>
         <img src={icons.phone} alt="phone" />
      </div>
   );
};
