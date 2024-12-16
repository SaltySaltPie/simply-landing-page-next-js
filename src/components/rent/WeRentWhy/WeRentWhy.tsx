"use client";
import styles from "./WeRentWhy.module.scss";
import { icons_we_renovate, icons_we_rent } from "@/utils/icon";
import Image from "next/image";

import { useState } from "react";

export const WeRentWhy = () => {
   const [show, setShow] = useState<number>(0);

   return (
      <div className={`${styles.contentC}`}>
         <h2 className={styles.title}>High standards</h2>
         <div className={styles.processC}>
            <div className={styles.process}>
               {steps.map(({ title, content, image, backgroundColor }, i) => (
                  <div key={i} className={`${styles.stepsC}`}>
                     <div onClick={() => setShow(i)} className={`${styles.steps} ${show === i && styles.active}`}>
                        <span>{title}</span>
                        <Image
                           alt=""
                           src={
                              show == i
                                 ? icons_we_renovate.expand.less.trimEnd()
                                 : icons_we_renovate.expand.more.trimEnd()
                           }
                           width={24}
                           height={24}
                        />
                     </div>
                     <div key={i} className={`${styles.description} ${show === i && styles.active}`}>
                        <span>{content}</span>
                        <div className={styles.stepsImg} style={{ backgroundColor: `${backgroundColor}` }}>
                           {image && <Image alt={title} src={image.trimEnd()} width={300} height={200} quality={100} />}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
            <div className={styles.descriptionC}>
               {steps.map(({ title, content, image, backgroundColor }, i) => (
                  <div
                     key={i}
                     // onClick={() => setShow(i)}
                     className={`${styles.description} ${show === i ? styles.active : ""}`}
                  >
                     <span>{content}</span>
                     <div className={styles.stepsImg} style={{ backgroundColor: `${backgroundColor}` }}>
                        {image && <Image alt={title} src={image.trimEnd()} width={300} height={200} quality={100} />}
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};
const steps = [
   {
      title: "7-year waiting list on section 8",
      content: (
         <div>
            <b>The affordable housing crisis</b> has left countless families struggling to find safe and stable homes
            with many <b>waiting up to seven years just to access Section 8</b> housing assistance. Right now, for every
            three extremely low-income families, two are unable to secure a rental home due to the severe shortage of
            affordable options, particularly in rapidly growing metropolitan areas (MSAs), where economic mobility is
            increasingly out of reach for many.
         </div>
      ),

      image: icons_we_rent.why["why1"],
      backgroundColor: "#FFDCC9",
   },
   {
      title: "Renovate Above Market Standards",
      content: (
         <div>
            <b>Families aren't asking for charity; they're simply seeking a fair shot at life.</b> We believe that
            everyone deserves the opportunity to live in stable, secure housing, regardless of their economic
            circumstances. By <b>making affordable homes accessible to those who need it the most,</b> we provide a
            crucial lifeline for those in need, offering them a chance to find stability, rebuild their lives, and
            create a foundation for a better future.
         </div>
      ),
      image: icons_we_rent.why["why2"],
      backgroundColor: "#E0F1FF",
   },
   {
      title: "Long-Term Focus for Livability and Safety",
      content: (
         <div>
            <b>The challenge of affordable housing is not just an affordability crisis but also an identity crisis.</b>{" "}
            When families are unable to find stable, affordable homes, it disrupts the very fabric of the neighborhoods
            they wish to be part of. Communities thrive when their members have secure places to live, preserving
            experiences, fostering connections, and sharing a sense of belonging. But when affordable housing is out of
            reach, it fractures this identity, leading to transience and instability that weaken the bonds that make a
            community strong.
         </div>
      ),
      image: icons_we_rent.why["why3"],
      backgroundColor: "#FFECBF",
   },
   {
      title: "Long-Term Focus for Livability and Safety",
      content: (
         <div>
            <b>
               Stable housing allows families to put down roots, become active participants in their neighborhoods, and
               contribute to thriving communities.
            </b>
            It is through this sense of permanence and belonging that communities maintain their identity, ensuring that
            they remain vibrant, diverse, and resilient places for everyone. <br />
            <b>That’s why we rent.</b>
         </div>
      ),
      image: icons_we_rent.why["why4"],
      backgroundColor: "#D2F9E1",
   },
];
