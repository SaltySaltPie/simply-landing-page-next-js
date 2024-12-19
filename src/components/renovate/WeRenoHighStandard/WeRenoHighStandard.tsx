"use client";
import styles from "./WeRenoHighStandard.module.scss";

import Image from "next/image";
import { useState } from "react";
import { icons_we, icons_we_renovate } from "@/utils/icon";
export const WeRenoHighStandard = () => {
   const [show, setShow] = useState<number>(0);

   return (
      <div className={`${styles.contentC}`}>
         <h2 className={styles.title}>High standards</h2>
         <div className={styles.processC}>
            <div className={styles.process}>
               {steps.map(({ title, content, image }, i) => (
                  <div key={i} className={`${styles.stepsC}`}>
                     <button onClick={() => setShow(i)} className={`${styles.steps} ${show === i && styles.active}`}>
                        <span>{title}</span>
                     </button>
                  </div>
               ))}
            </div>
            <div className={styles.stepsMobile}>
               {steps.map(({ title, content, image }, i) => (
                  <div key={i}>
                     <button onClick={() => setShow(i)} className={`${styles.steps} ${show === i && styles.active}`}>
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
                     </button>
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
         "Ensuring that homes meet and exceed safety, cleanliness, and habitability of housing. This includes adhering to and surpassing HUD's nSpire checklist, which sets the benchmark for livability and safety in affordable housing.",
      image: icons_we_renovate.high["high1"],
   },
   {
      title: "Renovate Above Market Standards",
      content:
         "Exceeding typical renovation standards ensures that homes are not just functional but desirable. This approach often involves using higher-quality materials and finishes, which provide long-term durability and reduce maintenance costs, making the homes more attractive to tenants.",
      image: icons_we_renovate.high["high2"],
   },
   {
      title: "Long-Term Focus for Livability and Safety",
      content:
         "Value engineering emphasizes creating homes that are not just suitable for today but built to last. This long-term focus on livability and safety ensures that the properties remain viable and desirable for years to come.",
      image: icons_we_renovate.high["high3"],
   },
];
