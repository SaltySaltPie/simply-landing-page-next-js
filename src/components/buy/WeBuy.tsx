"use client";
import { WeCTA } from "../we/WeCTA/WeCTA";
import { WeProcess } from "../we/WeProcess/WeProcess";
import styles from "./WeBuy.module.scss";
import { WeBuyHero } from "./WeBuyHero/WeBuyHero";
import { WeBuyProperties } from "./WeBuyProperties/WeBuyProperties";
import { WeBuyValues } from "./WeBuyValues/WeBuyValues";

export const WeBuy = () => {
   return (
      <div className={`${styles.contentC}`}>
         <WeBuyHero />
         <WeBuyValues />
         <WeBuyProperties />
         <WeProcess />
         <WeCTA />
      </div>
   );
};
