import { useContent } from "@/hooks/useContent";
import styles from "./LaPaBusiness.module.scss";
import { icons } from "@/utils/icon";
import Image from "next/image";

export const LaPaBusiness = () => {
   const { content } = useContent();

   return (
      <div className={`${styles.contentC}`} id="business">
         <div className={`${styles.leftC}`}>
            <h2>{content.business?.title || "We really buy houses"}</h2>
            <div className={`${styles.paragraphsC}`}>
               {content.business?.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
               ))}
            </div>
         </div>
         <div className={`${styles.img}`}>
            <Image alt="soldSimply" src={icons.business.soldSimply} fill sizes="50vw" />
         </div>
      </div>
   );
};
