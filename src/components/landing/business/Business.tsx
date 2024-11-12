import { useContent } from "@/hooks/useContent";
import styles from "./Business.module.scss";
import { icons } from "@/utils/icon";
import Image from "next/image";

export const Business = () => {
   const { content } = useContent();

   return (
      <div className={`${styles.contentC}`}>
         <div className={`${styles.leftC}`}>
            <h2>{content.business?.title}</h2>
            <div className={`${styles.paragraphsC}`}>
               {content.business?.paragraphs.map((p, i) => (
                  <span key={i}>{p}</span>
               ))}
            </div>
         </div>
         <div className={`${styles.img}`}>
            <Image alt="soldSimply" src={icons.business.soldSimply} fill />
         </div>
      </div>
   );
};

// type TBusinessProps = {};
