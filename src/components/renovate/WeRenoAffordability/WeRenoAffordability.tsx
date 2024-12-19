"use client";
import styles from "./WeRenoAffordability.module.scss";

import Image from "next/image";
import { useState } from "react";
import { icons_we, icons_we_renovate } from "@/utils/icon";
export const WeRenoAffordability = () => {
   const [show, setShow] = useState<number>(0);
   return (
      <div className={`${styles.contentC}`}>
         <h2 className={styles.title}>Affordability</h2>
         <div className={styles.processC}>
            <div className={styles.process}>
               {steps.map(({ title, content, image }, i) => (
                  <div key={i} className={`${styles.stepsC}`}>
                     <div onClick={() => setShow(i)} className={`${styles.steps} ${show === i && styles.active}`}>
                        <span>{title}</span>
                     </div>
                  </div>
               ))}
            </div>
            <div className={styles.stepsMobile}>
               {steps.map(({ title, content, image }, i) => (
                  <div key={i}>
                     <div onClick={() => setShow(i)} className={`${styles.steps} ${show === i && styles.active}`}>
                        <span>{title}</span>
                        <Image
                           alt=""
                           src={
                              show == i
                                 ? icons_we_renovate.expand.less.trimEnd()
                                 : icons_we_renovate.expand.more.trimEnd()
                           }
                           width={24}
                           height={24}
                        />
                     </div>
                     <div key={i} className={`${styles.description} ${show === i ? styles.active : ""}`}>
                        <span>{content}</span>
                        <div className={styles.stepsImg}>
                           {image && (
                              <Image alt={title} src={image.trimEnd()} width={300} height={200} sizes={"100vw"} />
                           )}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

const steps = [
   {
      title: "Create Safe and Clean Homes",
      content:
         "Value-engineered renovations aim to make homes accessible and comfortable for tenants, easing their transition and making the spaces more attractive to live in. This approach includes thoughtful design choices that enhance the quality of life for residents.",
      image: icons_we_renovate.affordability["affordability1"],
   },
   {
      title: "Increasing Density through Procurement and Renovation",
      content:
         "As urban density increases, value-engineered renovations help optimize space while maintaining affordability. By procuring and renovating properties with this focus, we contribute to sustainable urban development that benefits both tenants and communities.",
      image: icons_we_renovate.affordability["affordability2"],
   },
   {
      title: "Affordability and Section 8 Program Focus",
      content:
         "Value engineering is particularly critical within the Section 8 housing program, where balancing affordability with quality is essential. Driving efficiencies in construction and renovation allows us to keep costs down while still delivering homes that exceed HUD standards.",
      image: icons_we_renovate.affordability["affordability3"],
   },
];
