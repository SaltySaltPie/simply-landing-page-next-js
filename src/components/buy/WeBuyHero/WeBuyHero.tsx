"use client";
import { icons, icons_we_buy } from "@/utils/icon";
import styles from "./WeBuyHero.module.scss";
import Image from "next/image";
import { Text } from "@/components/common/text/Text";

export const WeBuyHero = () => {
   return (
      <div className={`${styles.contentC}`}>
         <div className={`${styles.headingC}`}>
            <div className={`${styles.heading}`}>
               <div className={`${styles.content}`}>
                  <div className={`${styles.description}`}>
                     <h1>Because selling as-is should be simple.</h1>
                     <Text type="f1-125">
                        We purchase single-family homes in strong communities from people who deserve fairness,
                        transparency, and respect, especially during challenging times.
                     </Text>
                  </div>
                  <div className={`${styles.searchBox}`}>
                     <input type="text" placeholder="Enter your property address" />
                     <div className={`${styles.searchBtn}`}>
                        <Image src={icons.header.arrow_forward.trimEnd()} alt="" width={20} height={20} />
                     </div>
                  </div>
                  <div className={`${styles.discover}`}>Discover if we&rsquo;re in your neighborhood!</div>
               </div>
               <div className={`${styles.background}`}>
                  <Image src={icons_we_buy.hero.banner} alt="" fill sizes="100vw" />
               </div>
            </div>
         </div>
         <div className={`${styles.itemC}`}>
            {items.map((item, index) => (
               <div key={index} className={`${styles.item}`}>
                  <Image src={item.icon.trimEnd()} alt="" width={32} height={32} />
                  <h3>{item.title}</h3>
                  <Text type="f1-125">{item.description}</Text>
               </div>
            ))}
         </div>
         <div className={`${styles.desC}`}>
            <div className={`${styles.des}`}>
               <h2>Putting People First</h2>
               <Text type="f1-125">
                  At Simply Homes, we understand that selling a home as-is often comes from significant life changes.
                  <b>We approach each transaction with the respect and sensitivity these situations deserve.</b>
               </Text>
            </div>
            <div className={`${styles.des}`}>
               <h2>Straight-forward</h2>
               <Text type="f1-125">
                  We strive to make your home-selling process as straightforward as possible, prioritizing your needs
                  and convenience from initial contact to closing.
                  <b>With no showings, cleaning, or repairs required, we offer a fair and competitive price</b> tailored
                  to your unique circumstances and timeline.
               </Text>
            </div>
            <div className={`${styles.des}`}>
               <h2>Fair cash offer</h2>
               <Text type="f1-125">
                  While not every situation may be a perfect fit for us, we believe that{" "}
                  <b>a fair cash offer, coupled with a convenient and transparent process</b>, can foster a business
                  relationship based on trust, respect, and mutual benefit.
               </Text>
            </div>
         </div>
      </div>
   );
};

const items = [
   {
      title: "Zero fees",
      description: " to sell your home",
      icon: icons_we_buy.group.money,
   },
   {
      title: "Sell as-is",
      description: "No repairs. No cleanup",
      icon: icons_we_buy.group.house_orange,
   },
   {
      title: "Free",
      description: "home assessment",
      icon: icons_we_buy.group.night_shelter,
   },
];
