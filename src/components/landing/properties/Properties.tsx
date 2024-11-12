import { useContent } from "@/hooks/useContent";
import styles from "./Properties.module.scss";
import Carousel from "react-multi-carousel";
export const Properties = () => {
   const { properties } = useContent().content;
   if (!properties) return null;
   const { title, locations } = properties;
   const a = {};
   return (
      <div className={`${styles.contentC}`}>
         <h2>{title}</h2>
         <Carousel responsive={a} showDots>
            <div>a</div>
            <div>b</div>
         </Carousel>
      </div>
   );
};
