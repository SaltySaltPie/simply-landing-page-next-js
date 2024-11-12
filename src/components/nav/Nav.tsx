"use client";
import { useContent } from "@/hooks/useContent";
import styles from "./Nav.module.scss";
import Link from "next/link";
export const Nav = () => {
   const { content } = useContent();

   return (
      <nav className={`${styles.contentC}`}>
         <div className={`${styles.logoC}`}></div>
         <div className={`${styles.navItems}`}>
            <Link href="/">Home</Link>
            {content["business"] && <Link href="#business">Our Business</Link>}
            {content["faqs"] && <Link href="#faqs">FAQs</Link>}
            {content["properties"] && <Link href="#properties">Purchased Properties</Link>}
            {content["process"] && <Link href="#process">Our Process</Link>}
            {content["about"] && (
               <Link href={content["about"].link} target="_blank" rel="noreferrer noopener">
                  About Simply Homes
               </Link>
            )}
         </div>
         <div className={`${styles.phone}`}>
            <Link href="tel:2073006144">(207) 300-6144</Link>
         </div>
      </nav>
   );
};
