import { Landing } from "@/components/landing/Landing";
import styles from "./page.module.css";
import { We } from "@/components/we/We";

export default function Home() {
   console.log(`env, ${process.env.MODE}`);
   return (
      <div className={styles.page}>
         <main className={styles.main}>
            {process.env.MODE === "landing" && <Landing />}
            {process.env.MODE === "we" && <We />}
         </main>
      </div>
   );
}
