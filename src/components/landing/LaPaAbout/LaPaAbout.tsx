import styles from "./LaPaAbout.module.scss";
import Link from "next/link";
import Image from "next/image";
import { CF_CDN_URL } from "@/utils/CF_CDN_URL";
export const LaPaAbout = () => {
   return (
      <div className={`${styles.contentC}`} id="about-us">
         <div>
            <div className={`${styles.content}`}>
               <div>
                  <h2>Learn more about our&nbsp;</h2>
                  <h2>Simply mission at</h2>
               </div>
               <Link href={"/about"}>
                  <h5>About Us</h5>
               </Link>
            </div>
            <div className={`${styles.banner}`}>
               <Image alt="logo" src={CF_CDN_URL("/assets/about/about_us.png")} fill sizes="100vw" />
            </div>
         </div>
      </div>
   );
};
