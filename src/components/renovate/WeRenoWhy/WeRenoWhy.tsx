"use client";
import { icons_we_renovate } from "@/utils/icon";
import styles from "./WeRenoWhy.module.scss";
import Image from "next/image";

import { useState } from "react";
import { Text } from "@/components/common/text/Text";

export const WeRenoWhy = () => {
   const [expand, setExpand] = useState(false);
   return (
      <div className={`${styles.contentC}`}>
         <h2>Why We Renovate?</h2>
         <div className={`${styles.banner}`}>
            <Image src={icons_we_renovate.why.banner.trimEnd()} alt="" width={200} height={200} sizes="100vw" />
         </div>
         <div className={`${styles.content}`}>
            <div className={`${styles.paraC}`}>
               <h2>Why We Renovate?</h2>
               <Text type="f1-125">
                  Real estate is built on long-term commitments and stability, and our approach to renovations reflects
                  this by investing in homes with a focus on lasting impact. When we invest in a house, we&apos;re not
                  just buying a property—we&apos;re making a long-term commitment to a family and to a community.
               </Text>
               {expand && (
                  <>
                     <Text type="f1-125">
                        We are driven by the need to value-engineer homes that exceed modern standards while still
                        affordable to those who need them the most. Through thoughtful renovations, we create homes that
                        are not just livable but desirable, fostering a sense of security, comfort, and pride among our
                        tenants. We firmly believe that this commitment to excellence brings long-lasting value and
                        rejuvenates the fabric of strong communities.
                     </Text>
                     <Text type="f1-125">
                        At the core of our renovation commitment is creating homes that provide comfort, security, and a
                        place where people can build lasting memories.
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
                  />
               </div>
            </div>
         </div>
      </div>
   );
};
