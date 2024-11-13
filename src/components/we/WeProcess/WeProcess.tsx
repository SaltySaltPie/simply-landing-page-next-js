import { useContent } from "@/hooks/useContent";
import styles from "./WeProcess.module.scss";
import Image from "next/image";
export const WeProcess = () => {
   const { content } = useContent();
   const { process } = content;
   if (!process) return null;
   const { steps, title } = process;
   return (
      <div className={`${styles.contentC}`} id="process">
         <h2 className={styles.title}>{title}</h2>
         <div className={styles.processC}>
            {steps.map(({ title, image }) => (
               <div key={title} className={styles.steps}>
                  <div></div>
                  <span>{title}</span>
               </div>
            ))}
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
