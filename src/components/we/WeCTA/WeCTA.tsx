import Image from "next/image";
import styles from "./WeCTA.module.scss";
import { icons_we } from "@/utils/icon";

export const WeCTA = () => {
   return (
      <div className={`${styles.contentC}`}>
         <div className={`${styles.content}`}>
            <div className={`${styles.cta}`}>
               <h2>Ready to Sell?</h2>
               <span>Give us just 30 seconds and we&apos;ll give you a Simply Homes Instant Offer.</span>
               <button type="button">
                  <h5>Get an Offer</h5>
               </button>
            </div>

            <Image
               src={icons_we.CTA.cta_bg.trimEnd()}
               alt=""
               height={1098}
               width={2880}
               className={`${styles.img}`}
               sizes="100vw"
            />
         </div>
      </div>
   );
};
