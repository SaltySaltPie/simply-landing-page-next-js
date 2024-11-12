import Image from "next/image";
import styles from "./Footer.module.scss";
import { CF_CDN_URL } from "@/utils/CF_CDN_URL";
export const Footer = () => {
   return (
      <footer className={`${styles.contentC}`}>
         <div className={`${styles.logoC}`}>
            <Image alt="logo" src={CF_CDN_URL("/assets/common/simply-logo.svg")} fill sizes="10vw" />
         </div>
         <span>© 2024 Simply Homes. All rights reserved.</span>
      </footer>
   );
};
