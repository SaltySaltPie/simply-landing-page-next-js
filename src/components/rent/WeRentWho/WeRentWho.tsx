"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./WeRentWho.module.scss";
import { icons_we_renovate, icons_we_rent } from "@/utils/icon";
import { Text } from "@/components/common/text/Text";

export const WeRentWho = () => {
   const [expand, setExpand] = useState(false);
   return (
      <div className={`${styles.contentC}`}>
         <h2>Who do we rent to?</h2>
         <div className={`${styles.content}`}>
            <h2>Who do we rent to?</h2>

            <div className={`${styles.paraC}`}>
               <Text type="f1-125">
                  We rent to individuals and families who are looking for more than just a place to live—they seek a
                  home where they can build a better future.
               </Text>
               {expand && (
                  <>
                     <Text type="f1-125">
                        We believe everyone deserves a fair chance, and we do not discriminate based on income,
                        background, or circumstance. While rent price and affordability are important, they are not our
                        main criteria, as our properties and administrative processes are optimized to comply with the
                        requirements of many affordable housing programs, including HUD’s Section 8, in order to
                        accommodate a pool of tenants as diverse as possible.
                     </Text>
                     <Text type="f1-125">
                        What truly matters to us is finding tenants who value stability, community, and the opportunity
                        to thrive in a safe, well-maintained environment. We welcome working-class families, underserved
                        individuals, and anyone in need of stable, supportive housing. Our goal is to support those who
                        are ready to become part of a community, contribute positively, and make the most of the strong
                        foundation we provide.
                     </Text>
                  </>
               )}
               <div className={`${styles.expand}`} onClick={() => setExpand(!expand)}>
                  <Text type="f1-125">{expand ? "Read Less" : "Read More"}</Text>
                  <Image
                     src={expand ? icons_we_renovate.why.less.trimEnd() : icons_we_renovate.why.more.trimEnd()}
                     alt=""
                     width={18}
                     height={18}
                     sizes="100vw"
                  />
               </div>
            </div>
         </div>
         <div className={`${styles.banner}`}>
            <Image src={icons_we_rent.who.who.trimEnd()} alt="" width={200} height={200} sizes="100vw" />
         </div>
      </div>
   );
};
