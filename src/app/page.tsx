"use client";
import { Landing } from "@/components/landing/Landing";
import styles from "./page.module.css";
import { Footer } from "@/components/footer/Footer";

export default function Home() {
   return (
      <div className={styles.page}>
         <main className={styles.main}>
            <Landing />
            jjjjj
         </main>
         <Footer />
      </div>
   );
}
