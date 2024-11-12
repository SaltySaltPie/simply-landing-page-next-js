"use client";
import { useContent } from "@/hooks/useContent";
import styles from "./Nav.module.scss";
import Link from "next/link";
import Image from "next/image";
import { icons } from "@/utils/icon";
export const Nav = () => {
   const { navItems } = useNavItems();
   const { content } = useContent();

   return (
      <nav className={`${styles.contentC}`}>
         <div className={`${styles.logoC}`}>
            <Image src={icons.nav.logo.trimEnd()} alt="" width={24} height={24} />
         </div>
         <ul className={`${styles.navItems}`}>
            {navItems.map((item) => (
               <li key={item.title}>
                  <Link href={item.href}>{item.title}</Link>
               </li>
            ))}
         </ul>
         <div className={`${styles.phone}`}>
            <div className={`${styles.phoneIcon}`}>
               <Image src={icons.nav.phone.trimEnd()} alt="" width={24} height={24} />
            </div>

            <Link href="tel:2073006144">{content.info.phone}</Link>
         </div>
         <div className={`${styles.burger}`}></div>
      </nav>
   );
};

const useNavItems = () => {
   const { content } = useContent();

   const navItems: { title: string; href: string }[] = [{ title: "Home", href: "/" }];
   if (content["business"]) navItems.push({ title: "Our Business", href: "#business" });
   if (content["faqs"]) navItems.push({ title: "FAQs", href: "#faqs" });
   if (content["properties"]) navItems.push({ title: "Properties", href: "#properties" });
   if (content["process"]) navItems.push({ title: "Our Process", href: "#process" });
   if (content["about"]) navItems.push({ title: "About", href: content["about"].link });
   return { navItems };
};
