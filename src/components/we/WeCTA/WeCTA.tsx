import Image from "next/image";
import Link from "next/link";
import styles from "./WeCTA.module.scss";
import { icons_we } from "@/utils/icon";

export const WeCTA = () => {
   return (
      <div className={`${styles.contentC}`}>
         <div className={`${styles.content}`} style={{ backgroundImage: `url(${icons_we.CTA.cta_bg})` }}>
            <div className={`${styles.titleC}`}>
               {/* <h2>{CTAData.title}</h2>
               <h4>{CTAData.subTitle}</h4> */}
               <h2>Ready to Sell?</h2>
               <h4>Give us just 30 seconds and we&apos;ll give you a Simply Homes Instant Offer.</h4>
            </div>
            <Link href={""}>
               <h5>Get an Offer</h5>
            </Link>
            {/* <div className={`${styles.backgroundImg}`}>
               <Image src={icons_we.CTA.cta_bg.trimEnd()} alt="" width={200} height={20} />
            </div> */}
         </div>
      </div>
   );
};

const CTAData = {
   title: "Ready to Sell?",
   subTitle: "Give us just 30 seconds and we'll give you a Simply Homes Instant Offer.",
};
