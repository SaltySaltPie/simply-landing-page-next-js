"use client";
import { useContent } from "@/hooks/useContent";
import styles from "./Landing.module.scss";
import { Hero } from "./hero/Hero";
import { Business } from "./business/Business";
import { Faqs } from "./faqs/Faqs";
import { Properties } from "./properties/Properties";
import { Process } from "./process/Process";
import { About } from "./about/About";
export const Landing = () => {
   const { content } = useContent();

   return (
      <div className={`${styles.contentC}`}>
         <Hero />
         {content["business"] && <Business />}
         {content["faqs"] && <Faqs />}
         {content["properties"] && <Properties />}
         {content["process"] && <Process />}
         {content["about"] && <About />}
      </div>
   );
};
