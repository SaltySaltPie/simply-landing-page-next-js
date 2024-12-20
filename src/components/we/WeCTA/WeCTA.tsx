import Image from "next/image";
import styles from "./WeCTA.module.scss";
import { icons_we } from "@/utils/icon";
import { Text } from "@/components/common/text/Text";

export const WeCTA = () => {
   return (
      <div className={`${styles.contentC}`}>
         <div className={`${styles.content}`}>
            <div className={`${styles.cta}`}>
               <Text type="f2B">Ready to Sell?</Text>
               <Text type="f1-125">Give us just 30 seconds and we&apos;ll give you a Simply Homes Instant Offer.</Text>
               <button type="button">
                  <Text type="f1-125BNoScale">Get an Offer</Text>
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
