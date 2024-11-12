import { useContent } from "@/hooks/useContent";
import styles from "./Business.module.scss";
import { icons } from "@/utils/icon";
import Image from "next/image";

export const Business = () => {
   const { content } = useContent();

   return (
      <div className={`${styles.contentC}`}>
         <div>
            <h4>{content.business?.title}</h4>
            <div>
               {content.business?.paragraphs.map((p, i) => (
                  <div key={i}>{p}</div>
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
