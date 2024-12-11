"use client";
// import { WeBusiness } from "@/components/we/WeBusiness/WeBusiness";
import styles from "./We.module.scss";
import { WeHero } from "./WeHero/WeHero";
import { useContent } from "@/hooks/useContent";
import { LaPaBusiness } from "@/components/landing/LaPaBusiness/LaPaBusiness";
import { LaPaAbout } from "@/components/landing/LaPaAbout/LaPaAbout";
import { LaPaProperties } from "@/components/landing/LaPaProperties/LaPaProperties";
import { LaPaFaqs } from "@/components/landing/LaPaFaqs/LaPaFaqs";
import { WeProcess } from "./WeProcess/WeProcess";
import { WeCTA } from "./WeCTA/WeCTA";
export const We = () => {
   const { content } = useContent();

   return (
      <div className={`${styles.contentC}`}>
         <WeHero />
         {content["business"] && <LaPaBusiness />}
         {content["faqs"] && <LaPaFaqs />}
         {content["properties"] && <LaPaProperties />}
         {content["process"] && <WeProcess />}
         {content["about"] && <WeCTA />}
         {content["about"] && <LaPaAbout />}
      </div>
   );
};
