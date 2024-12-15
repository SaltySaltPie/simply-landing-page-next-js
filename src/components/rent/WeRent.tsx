"use client";
import { LaPaAbout } from "../landing/LaPaAbout/LaPaAbout";
import styles from "./WeRent.module.scss";
import { WeRentHero } from "./WeRentHero/WeRentHero";
import { WeRentWhere } from "./WeRentWhere/WeRentWhere";
import { WeRentWho } from "./WeRentWho/WeRentWho";
import { WeRentWhy } from "./WeRentWhy/WeRentWhy";
export const WeRent = () => {
   return (
      <div className={`${styles.contentC}`}>
         <WeRentHero />
         <WeRentWhere />
         <WeRentWho />
         <WeRentWhy />
         <LaPaAbout />
      </div>
   );
};
