"use client";
import { LaPaAbout } from "../landing/LaPaAbout/LaPaAbout";
import styles from "./WeReno.module.scss";
import { WeRenoAffordability } from "./WeRenoAffordability/WeRenoAffordability";
import { WeRenoCommunityDriven } from "./WeRenoCommunityDriven/WeRenoCommunityDriven";
import { WeRenoHero } from "./WeRenoHero/WeRenoHero";
import { WeRenoHighStandard } from "./WeRenoHighStandard/WeRenoHighStandard";
import { WeRenoProperties } from "./WeRenoProperties/WeRenoProperties";
import { WeRenoValueEngineer } from "./WeRenoValueEngineer/WeRenoValueEngineer";
import { WeRenoWhy } from "./WeRenoWhy/WeRenoWhy";
export const WeReno = () => {
   return (
      <div className={`${styles.contentC}`}>
         <WeRenoHero />
         <WeRenoWhy />
         <WeRenoValueEngineer />
         <WeRenoHighStandard />
         <WeRenoAffordability />
         <WeRenoCommunityDriven />
         <WeRenoProperties />
         <LaPaAbout />
      </div>
   );
};
