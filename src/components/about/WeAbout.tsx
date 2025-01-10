import { WeCTA } from "../we/WeCTA/WeCTA";
import styles from "./WeAbout.module.scss";
import { WeAboutContentSlides } from "./WeAboutContentSlides/WeAboutContentSlides";
import { WeAboutHero } from "./WeAboutHero/WeAboutHero";
import { WeAboutInvestors } from "./WeAboutInvestors/WeAboutInvestors";
import { WeAboutMission } from "./WeAboutMission/WeAboutMission";
import { WeAboutTeams } from "./WeAboutTeams/WeAboutTeams";
import { WeAboutValues } from "./WeAboutValues/WeAboutValues";
export const WeAbout = () => {
   return (
      <div className={`${styles.contentC}`}>
         <WeAboutHero />
         <WeAboutMission />
         <WeAboutValues />
         <WeAboutTeams />
         <WeAboutContentSlides />
         <WeAboutInvestors />
         <WeCTA />
      </div>
   );
};
