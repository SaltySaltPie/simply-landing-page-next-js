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
         <ul className={styles.steps}>
            {steps.map(({ title, image }) => (
               <li key={title} className={styles.step}>
                  <h3>{title}</h3>
                  {/* {image && (
                     <div>
                        <Image alt={title} src={image} fill sizes="30vw" />
                     </div>
                  )} */}
               </li>
            ))}
         </ul>
      </div>
   );
};
