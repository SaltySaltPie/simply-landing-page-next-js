"use client";
import { useContent } from "@/hooks/useContent";
import styles from "./WeNav.module.scss";
import Link from "next/link";
import Image from "next/image";
import { icons } from "@/utils/icon";
import { useState } from "react";

export const WeNav = () => {
   const { navItems } = useNavItems();
   const { content } = useContent();
   const [showMobileNav, setShowMobileNav] = useState(false);
   return (
      <nav className={`${styles.contentC}`}>
         <div className={`${styles.content}`}>
            <div className={`${styles.logoC}`}>
               <Image src={icons.nav.logo.trimEnd()} alt="" width={24} height={24} />
            </div>
            <ul className={`${styles.navItems} ${showMobileNav && styles.showMobileNav}`}>
               {navItems.map((item) => (
                  <li key={item.title}>
                     <Link href={item.href} onClick={() => setShowMobileNav(false)}>
                        {item.title}
                     </Link>
                  </li>
               ))}
            </ul>
         </div>
         <div className={`${styles.phone}`}>
            <div className={`${styles.phoneIcon}`}>
               <Image src={icons.nav.phone.trimEnd()} alt="" width={24} height={24} />
            </div>
            <Link href="tel:2073006144">{content.info.phone}</Link>
         </div>
         <div className={`${styles.burger}`}>
            <button type="button" title="menu" onClick={() => setShowMobileNav(!showMobileNav)}>
               <Image src={icons.nav[showMobileNav ? "close" : "menu"].trimEnd()} alt="" width={24} height={24} />
            </button>
         </div>
      </nav>
   );
};

const useNavItems = () => {
   const navItems: { title: string; href: string }[] = [
      { title: "Home", href: "/" },
      {
         title: "We Buy",
         href: "/we-buy",
      },
      {
         title: "We Rent",
         href: "/we-rent",
      },
      {
         title: "We Renovate",
         href: "/we-renovate",
      },
      {
         title: "About Us",
         href: "#about-us",
      },
   ];
   return { navItems };
};
