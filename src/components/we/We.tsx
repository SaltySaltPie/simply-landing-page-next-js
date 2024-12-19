"use client";
import styles from "./We.module.scss";
import { WeHero } from "./WeHero/WeHero";
import { LaPaBusiness } from "@/components/landing/LaPaBusiness/LaPaBusiness";
import { LaPaAbout } from "@/components/landing/LaPaAbout/LaPaAbout";
import { LaPaProperties } from "@/components/landing/LaPaProperties/LaPaProperties";
import { LaPaFaqs } from "@/components/landing/LaPaFaqs/LaPaFaqs";
import { WeProcess } from "./WeProcess/WeProcess";
import { WeCTA } from "./WeCTA/WeCTA";
export const We = () => {
   return (
      <div className={`${styles.contentC}`}>
         <WeHero />
         <LaPaBusiness />
         <LaPaFaqs />
         <LaPaProperties />
         <WeProcess />
         <WeCTA />
         <LaPaAbout />
      </div>
   );
};
