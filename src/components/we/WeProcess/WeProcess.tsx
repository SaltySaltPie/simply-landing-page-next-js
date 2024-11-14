import { useContent } from "@/hooks/useContent";
import styles from "./WeProcess.module.scss";
import Image from "next/image";
import { useState } from "react";
import { icons_we } from "@/utils/icon";
export const WeProcess = () => {
   const { content } = useContent();
   const [show, setShow] = useState<number>(0);
   const { process } = content;
   if (!process) return null;
   const { steps, title } = process;
   return (
      <div className={`${styles.contentC}`} id="process">
         <h2 className={styles.title}>{title}</h2>
         <div className={styles.processC}>
            <div className={styles.process}>
               {steps.map(({ title, image }, i) => (
                  <div key={i} className={`${styles.stepsC}`}>
                     <div onClick={() => setShow(i)} className={`${styles.steps} ${show === i && styles.active}`}>
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
                     </div>
                     <div key={i} className={`${styles.description} ${show === i && styles.active}`}>
                        <span>{title}</span>
                        <div className={styles.stepsImg}>
                           {image && <Image alt={title} src={image.trimEnd()} width={300} height={200} />}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
            <div className={styles.descriptionC}>
               {steps.map(({ title, image }, i) => (
                  <div
                     key={i}
                     // onClick={() => setShow(i)}
                     className={`${styles.description} ${show === i && styles.active}`}
                  >
                     <span>{title}</span>
                     <div className={styles.stepsImg}>
                        {image && <Image alt={title} src={image.trimEnd()} width={300} height={200} />}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};
