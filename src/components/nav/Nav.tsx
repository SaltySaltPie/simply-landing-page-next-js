"use client";
import { useContent } from "@/hooks/useContent";
import styles from "./Nav.module.scss";
import Link from "next/link";
export const Nav = () => {
   const { content } = useContent();

   return (
      <nav className={`${styles.contentC}`}>
         <Link href="/">
            <a>Home</a>
         </Link>
         {content["business"] && (
            <Link href="#business">
               <a>Our Business</a>
            </Link>
         )}
         {content["faqs"] && (
            <Link href="#faqs">
               <a>FAQs</a>
            </Link>
         )}
         {content["properties"] && (
            <Link href="#properties">
               <a>Purchased Properties</a>
            </Link>
         )}
         {content["process"] && (
            <Link href="#process">
               <a>Our Process</a>
            </Link>
         )}
         {content["about"] && (
            <Link href={content["about"].link} target="_blank" rel="noreferrer noopener">
               <a>About Simply Homes</a>
            </Link>
         )}
      </nav>
   );
};
