"use client";
import { WeBusiness } from "@/components/we/WeBusiness/WeBusiness";
import styles from "./We.module.scss";
import { WeHero } from "./WeHero/WeHero";
import { useContent } from "@/hooks/useContent";
import { WeFaqs } from "@/components/we/WeFaqs/WeFaqs";
import { WeProcess } from "@/components/we/WeProcess/WeProcess";
export const We = () => {
   const { content } = useContent();

   return (
      <div className={`${styles.contentC}`}>
         <WeHero />
         {content["business"] && <WeBusiness />}
         {content["faqs"] && <WeFaqs />}
         {/* {content["properties"] && <WeProperties />} */}
         {content["process"] && <WeProcess />}
         {/* {content["about"] && <WeAbout />} */}
      </div>
   );
};
