import styles from "./WeCTA.module.scss";

export const WeCTA = () => {
   return (
      <div className={`${styles.contentC}`}>
         <h2>{CTAData.title}</h2>
         <h4>{CTAData.subTitle}</h4>
      </div>
   );
};

const CTAData = {
   title: "Ready to Sell?",
   subTitle: "Give us just 30 seconds and we'll give you a Simply Homes Instant Offer.",
};
