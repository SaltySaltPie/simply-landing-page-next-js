import { useContent } from "@/hooks/useContent";
import styles from "./About.module.scss";
import Link from "next/link";
import Image from "next/image";
import { CF_CDN_URL } from "@/utils/CF_CDN_URL";
export const About = () => {
   const { content } = useContent();
   const { about } = content;
   if (!about) return null;
   return (
      <div className={`${styles.contentC}`}>
         <div>
            <div className={`${styles.content}`}>
               {about?.title && <h2>{about.title}</h2>}
               <Link href={about.link}>
                  <h5>About Us</h5>
               </Link>
            </div>
            <div className={`${styles.banner}`}>
               <Image alt="logo" src={CF_CDN_URL("/assets/about/banner.svg")} fill sizes="50vw" />
            </div>
         </div>
      </div>
   );
};
