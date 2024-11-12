"use client";
import { useContent } from "@/hooks/useContent";
import styles from "./Nav.module.scss";
import Link from "next/link";
export const Nav = () => {
   const { navItems } = useNavItems();

   return (
      <nav className={`${styles.contentC}`}>
         <div className={`${styles.logoC}`}></div>
         <ul className={`${styles.navItems}`}>
            {navItems.map((item) => (
               <li key={item.title}>
                  <Link href={item.href}>{item.title}</Link>
               </li>
            ))}
         </ul>
         <div className={`${styles.phone}`}>
            <Link href="tel:2073006144">(207) 300-6144</Link>
         </div>
         <div className={`${styles.hamburger}`}></div>
      </nav>
   );
};

const useNavItems = () => {
   const { content } = useContent();

   const navItems: { title: string; href: string }[] = [{ title: "Home", href: "/" }];
   if (content["business"]) navItems.push({ title: "Our Business", href: "#business" });
   if (content["faqs"]) navItems.push({ title: "FAQs", href: "#faqs" });
   if (content["properties"]) navItems.push({ title: "Purchased Properties", href: "#properties" });
   if (content["process"]) navItems.push({ title: "Our Process", href: "#process" });
   if (content["about"]) navItems.push({ title: "About Simply Homes", href: content["about"].link });
   return { navItems };
};
