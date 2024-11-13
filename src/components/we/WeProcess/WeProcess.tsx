import { useContent } from "@/hooks/useContent";
import styles from "./WeProcess.module.scss";
import Image from "next/image";
import { useState } from "react";
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
               {steps.map(({ title }, i) => (
                  <div key={i} onClick={() => setShow(i)} className={`${styles.steps} ${show === i && styles.active}`}>
                     <div></div>
                     <span>{title}</span>
                  </div>
               ))}
            </div>
            <div className={styles.descriptionC}>
               {steps.map(({ title, image }, i) => (
                  <div
                     key={i}
                     onClick={() => setShow(i)}
                     className={`${styles.description} ${show === i && styles.active}`}
                  >
                     <span>{title}</span>
                     <div className={styles.stepsImg}>{image && <Image alt={title} src={image} fill />}</div>
                  </div>
               ))}
            </div>
         </div>

         {/* <ul className={styles.steps}>
            {steps.map(({ title, image }) => (
               <li key={title} className={styles.step}>
                  <h3>{title}</h3>
                  {image && (
                     <div>
                        <Image alt={title} src={image} fill sizes="30vw" />
                     </div>
                  )}
               </li>
            ))}
         </ul> */}
      </div>
   );
};
