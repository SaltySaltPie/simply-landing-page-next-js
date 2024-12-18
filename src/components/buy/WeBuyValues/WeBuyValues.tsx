"use client";
import { icons_we_buy } from "@/utils/icon";
import styles from "./WeBuyValues.module.scss";
import Image from "next/image";

export const WeBuyValues = () => {
   return (
      <div className={`${styles.contentC}`}>
         <h2>What type of properties do we buy?</h2>
         <div className={`${styles.content}`}>
            <div className={`${styles.descriptionC}`}>
               <span>
                  We are mainly looking for properties that are single family - including duplexes and triplexes - that
                  have 2-5 bedrooms in the Pittsburgh, Cleveland, and Indianapolis metropolitan areas.
               </span>
               <span>
                  We consider purchasing homes in all conditions, from <b>“In need of TLC”</b> to{" "}
                  <b>
                     “Rough Around the Edges”. However, we typically avoid properties with significant structural
                     issues.
                  </b>
               </span>
            </div>
            <div className={`${styles.properties}`}>
               <div className={`${styles.type}`}>
                  <Image src={icons_we_buy.value.house_white.trimEnd()} alt="" width={37} height={37} />
                  <Image src={icons_we_buy.value.doc.trimEnd()} alt="" width={12} height={12} />
                  <b>Single family</b>
                  <Image src={icons_we_buy.value.doc.trimEnd()} alt="" width={12} height={12} />
                  <b>Duplexes</b>
                  <Image src={icons_we_buy.value.doc.trimEnd()} alt="" width={12} height={12} />
                  <b>Triplexes</b>
               </div>
               <div className={`${styles.propertyImg}`}>
                  <div className={`${styles.bedroom}`}>
                     <div className={`${styles.bedroomNumber}`}>
                        <h1>2-5 </h1> <span>Bedrooms</span>
                     </div>
                     <div className={`${styles.bedroomImg}`}>
                        <Image src={icons_we_buy.value.bedroom.trimEnd()} alt="" width={200} height={300} />
                     </div>
                  </div>
                  <div className={`${styles.locationC}`}>
                     <div className={`${styles.locationImg}`}>
                        <Image src={icons_we_buy.map.Pittsburgh.trimEnd()} alt="" width={200} height={300} />
                     </div>
                     <div className={`${styles.location}`}>
                        <div className={`${styles.item}`}>
                           <Image src={icons_we_buy.value.location.trimEnd()} alt="" width={37} height={37} />
                           <h4>Pittsburgh</h4>
                        </div>

                        <div className={`${styles.item}`}>
                           <Image src={icons_we_buy.value.location.trimEnd()} alt="" width={37} height={37} />
                           <h4>Cleveland</h4>
                        </div>
                        <div className={`${styles.item}`}>
                           <Image src={icons_we_buy.value.location.trimEnd()} alt="" width={37} height={37} />
                           <h4>Indianapolis</h4>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};
