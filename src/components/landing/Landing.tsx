"use client";
import { useContent } from "@/hooks/useContent";
import styles from "./Landing.module.scss";
import { LaPaHero } from "./LaPaHero/LaPaHero";
import { LaPaBusiness } from "./LaPaBusiness/LaPaBusiness";
import { LaPaFaqs } from "./LaPaFaqs/LaPaFaqs";
import { LaPaProperties } from "./LaPaProperties/LaPaProperties";
import { LaPaProcess } from "./LaPaProcess/LaPaProcess";
import { LaPaAbout } from "./LaPaAbout/LaPaAbout";
export const Landing = () => {
   const { content } = useContent();

   return (
      <div className={`${styles.contentC}`}>
         <LaPaHero />
         {content["business"] && <LaPaBusiness />}
         {content["faqs"] && <LaPaFaqs />}
         {content["properties"] && <LaPaProperties />}
         {content["process"] && <LaPaProcess />}
         {content["about"] && <LaPaAbout />}
      </div>
   );
};
