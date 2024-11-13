import { useContent } from "@/hooks/useContent";
import styles from "./WeBusiness.module.scss";
import { icons } from "@/utils/icon";
import Image from "next/image";

export const WeBusiness = () => {
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
