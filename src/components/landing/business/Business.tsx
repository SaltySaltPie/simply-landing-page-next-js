import { useContent } from "@/hooks/useContent";
import styles from "./Business.module.scss";
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
         <div>
            <img src={content.business?.banner} alt="" />
            {/* <Image src/> */}
         </div>
      </div>
   );
};

// type TBusinessProps = {};
