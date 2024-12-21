"use client";
import styles from "./Process.module.scss";
import Image from "next/image";
import { useState } from "react";
import { icons_we, icons_we_renovate } from "@/utils/icon";
import { Text } from "../common/text/Text";

type ProcessProps = {
   steps: TStep[];
   header: string;
   type: "expand" | "collapse";
};
export const Process = ({ steps, header, type }: ProcessProps) => {
   const [show, setShow] = useState<number>(0);
   return (
      <div className={`${styles.contentC}`}>
         <h2 className={styles.title}>{header}</h2>
         <div className={`${styles.processC} ${type === "collapse" ? styles.collapseC : styles.expandC}`}>
            <div className={styles.process}>
               {steps.map(({ title }, i) => (
                  <div key={i} className={`${styles.stepsC}`}>
                     <button onClick={() => setShow(i)} className={`${styles.steps} ${show === i && styles.active}`}>
                        {type === "collapse" && (
                           <div className={`${styles.icon}`}>
                              <Image
                                 alt=""
                                 src={
                                    show == i
                                       ? icons_we.process.play_arrow.trimEnd()
                                       : icons_we.process.play_arrow_outline_black.trimEnd()
                                 }
                                 fill
                              />
                           </div>
                        )}
                        <Text type="f1-125">{title}</Text>
                     </button>
                  </div>
               ))}
            </div>
            <div className={styles.stepsMobile}>
               {steps.map(({ title, content, image }, i) => (
                  <div className={`${styles.stepsC} ${show === i && styles.active} `} key={i}>
                     <button
                        onClick={() => setShow(i)}
                        className={`${styles.steps} ${type === "collapse" && styles.collapse} ${
                           show === i && styles.active
                        }`}
                     >
                        {type === "collapse" && (
                           <div className={`${styles.icon}`}>
                              <Image
                                 alt=""
                                 src={
                                    show == i
                                       ? icons_we.process.play_arrow.trimEnd()
                                       : icons_we.process.play_arrow_outline_black.trimEnd()
                                 }
                                 fill
                              />
                           </div>
                        )}
                        <Text type="f1-125">{title}</Text>
                        {type === "expand" && (
                           <div className={`${styles.icon}`}>
                              <Image
                                 alt=""
                                 src={
                                    show == i
                                       ? icons_we_renovate.expand.less.trimEnd()
                                       : icons_we_renovate.expand.more.trimEnd()
                                 }
                                 fill
                              />
                           </div>
                        )}
                     </button>
                     <div className={`${styles.description} ${show === i ? styles.active : ""}`}>
                        <Text type="f1-125">{content}</Text>
                        <div className={styles.stepsImg}>
                           {image && <Image alt={title} src={image.trimEnd()} width={300} height={200} sizes="100vw" />}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

type TStep = {
   title: string;
   content: React.ReactNode;
   image: string;
};
