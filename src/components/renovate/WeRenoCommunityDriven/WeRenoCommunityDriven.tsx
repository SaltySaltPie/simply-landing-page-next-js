"use client";
import styles from "./WeRenoCommunityDriven.module.scss";

import Image from "next/image";
import { useState } from "react";
import { icons_we, icons_we_renovate } from "@/utils/icon";
export const WeRenoCommunityDriven = () => {
   const [show, setShow] = useState<number>(0);
   return (
      <div className={`${styles.contentC}`}>
         <h2 className={styles.title}>Community driven</h2>
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
      title: "Increase Curb Appeal and Improve Neighborhood Outlook",
      content:
         "By enhancing the exterior and aesthetic quality of homes, value-engineered renovations uplift the appearance of both individual properties and the surrounding neighborhood. This improvement fosters community pride and encourages further investment in the area.",
      image: icons_we_renovate.community["community1"],
   },
   {
      title: "Rejuvenate the Fabric of Strong Communities",
      content:
         "By revitalizing homes and neighborhoods, value-engineered renovations strengthen the social and economic fabric of communities. This process contributes to the creation of stable, supportive environments where families can thrive.",
      image: icons_we_renovate.community["community2"],
   },
];