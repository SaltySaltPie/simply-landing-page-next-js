import { useContent } from "@/hooks/useContent";
import styles from "./Faqs.module.scss";
import { icons } from "@/utils/icon";
import Image from "next/image";
export const Faqs = () => {
   const { content } = useContent();
   return (
      <div className={`${styles.contentC}`}>
         <h2>FAQs</h2>
         <div className={`${styles.QAsC}`}>
            {content.faqs?.qas.map((qa, index) => (
               <div key={index} className={`${styles.groupQAs}`}>
                  <div className={`${styles.titleC}`}>
                     <h4>{qa.question}</h4>
                     {qa.expandByDefault ? (
                        <div className={`${styles.icon}`}>
                           <Image alt={qa.question} src={icons.faqs.add} fill />
                        </div>
                     ) : (
                        <div className={`${styles.icon}`}>
                           <Image alt={qa.question} src={icons.faqs.remove} fill />
                        </div>
                     )}
                  </div>
                  <span>{qa.expandByDefault ? qa.answer : ""}</span>
                  <hr />
               </div>
            ))}
            <div className={`${styles.moreQAs}`}>
               <span>More questions</span>
               <div className={`${styles.more}`}>
                  <Image alt="more" src={icons.faqs.viewMore} fill />
               </div>
            </div>
         </div>
      </div>
   );
};
