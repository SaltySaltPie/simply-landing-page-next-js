"use client";
import { icons, icons_we_renovate } from "@/utils/icon";
import styles from "./WeRenoWhy.module.scss";
import { useState } from "react";

export const WeRenoWhy = () => {
   const [expand, setExpand] = useState(false);
   return (
      <div className={`${styles.contentC}`}>
         <div className={`${styles.banner}`} style={{ backgroundImage: `url(${icons_we_renovate.why.banner})` }}>
            {/* <Image src={icons_we_renovate.hero.banner.trimEnd()} alt="" width={400} height={400} /> */}
         </div>
         <div className={`${styles.content}`}>
            <h1>Why We Renovate?</h1>
            <p>
               Real estate is built on long-term commitments and stability, and our approach to renovations reflects
               this by investing in homes with a focus on lasting impact. When we invest in a house, we&apos;re not just
               buying a property—we&apos;re making a long-term commitment to a family and to a community.
            </p>
            {expand && (
               <>
                  <p>
                     We are driven by the need to value-engineer homes that exceed modern standards while still
                     affordable to those who need them the most. Through thoughtful renovations, we create homes that
                     are not just livable but desirable, fostering a sense of security, comfort, and pride among our
                     tenants. We firmly believe that this commitment to excellence brings long-lasting value and
                     rejuvenates the fabric of strong communities.
                  </p>
                  <p>
                     At the core of our renovation commitment is creating homes that provide comfort, security, and a
                     place where people can build lasting memories.
                  </p>
               </>
            )}
            <div onClick={() => setExpand(!expand)}>{expand ? "Read Less" : "Read More"}</div>
         </div>
      </div>
   );
};
