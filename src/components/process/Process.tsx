"use client";
import styles from "./Process.module.scss";
import Image from "next/image";
import { useState } from "react";
import { icons_we } from "@/utils/icon";

type ProcessProps = {
   steps: TStep[];
   header: string;
   isPlayIcon?: boolean;
};
export const Process = ({ steps, header, isPlayIcon = false }: ProcessProps) => {
   const [show, setShow] = useState<number>(0);
   return (
      <div className={`${styles.contentC}`}>
         <h2 className={styles.title}>{header}</h2>
         <div className={styles.processC}>
            <div className={styles.process}>
               {steps.map(({ title }, i) => (
                  <div key={i} className={`${styles.stepsC}`}>
                     <button onClick={() => setShow(i)} className={`${styles.steps} ${show === i && styles.active}`}>
                        {isPlayIcon && (
                           <Image
                              alt=""
                              src={
                                 show == i
                                    ? icons_we.process.play_arrow.trimEnd()
                                    : icons_we.process.play_arrow_outline_black.trimEnd()
                              }
                              width={24}
                              height={24}
                           />
                        )}
                        <span>{title}</span>
                     </button>
                  </div>
               ))}
            </div>
            <div className={styles.stepsMobile}>
               {steps.map(({ title, content, image }, i) => (
                  <div className={`${styles.stepsC} ${show === i && styles.active}`} key={i}>
                     <button onClick={() => setShow(i)} className={`${styles.steps} ${show === i && styles.active}`}>
                        <Image
                           alt=""
                           src={
                              show == i
                                 ? icons_we.process.play_arrow.trimEnd()
                                 : icons_we.process.play_arrow_outline_black.trimEnd()
                           }
                           width={24}
                           height={24}
                        />
                        <span>{title}</span>
                     </button>

                     <div className={`${styles.description} ${show === i ? styles.active : ""}`}>
                        <span>{content}</span>
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
