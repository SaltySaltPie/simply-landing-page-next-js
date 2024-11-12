import { useContent } from "@/hooks/useContent";
import styles from "./Business.module.scss";
import { icons } from "@/utils/icon";
import Image from "next/image";

export const Business = () => {
   const { content } = useContent();

   return (
      <div className={`${styles.contentC}`} id="business">
         <div className={`${styles.leftC}`}>
            <h4>{content.business?.title || "We really buy houses"}</h4>
            <div className={`${styles.paragraphsC}`}>
               {content.business?.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
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
