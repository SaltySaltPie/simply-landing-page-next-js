"use client";
import { useContent } from "@/hooks/useContent";
import styles from "./WeRenoProperties.module.scss";
import Carousel, { ResponsiveType } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { icons } from "@/utils/icon";
import { CustomCarousel } from "@/components/common/customCarousel/CustomCarousel";
export const WeRenoProperties = () => {
   const { properties } = useContent().content;
   if (!properties) return null;
   // const { title, locations } = properties;

   return (
      <div className={`${styles.contentC}`} id="properties">
         <h2>Before and after</h2>
         <CustomCarousel
            responsive={responsive}
            containerClass={`${styles.carousel}`}
            arrows
            removeArrowOnDeviceType={["tablet", "mobile"]}
            showDots
            // autoPlay
            infinite
         >
            {locations.map(({ location, photo }, index) => (
               <div key={index} className={`${styles.property}`}>
                  <Carousel
                     responsive={responsives}
                     arrows={false}
                     showDots
                     infinite
                     containerClass={`${styles.compare}`}
                  >
                     <div className={`${styles.photo}`}>
                        <Image alt={location} src={photo.before} fill sizes="33vw" />
                     </div>
                     <div className={`${styles.photo}`}>
                        <Image alt={location} src={photo.after} fill sizes="33vw" />
                     </div>
                  </Carousel>
                  <div className={`${styles.location}`}>
                     <div className={`${styles.pin}`}>
                        <Image alt="pin" src={icons.properties["location"]} fill sizes="10vw" />
                     </div>
                     <h3>{location}</h3>
                  </div>
                  <span>Explain briefly exceeded standards</span>
               </div>
            ))}
         </CustomCarousel>
      </div>
   );
};

const responsive: ResponsiveType = {
   1: {
      breakpoint: { max: 3000, min: 2300 },
      items: 5,
   },
   2: {
      breakpoint: { max: 2300, min: 2000 },
      items: 4,
   },
   3: {
      breakpoint: { max: 2000, min: 1500 },
      items: 3,
   },
   4: {
      breakpoint: { max: 1500, min: 620 },
      items: 2,
   },
   5: {
      breakpoint: { max: 620, min: 0 },
      items: 1,
   },
};

const responsives: ResponsiveType = {
   2: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
   },
};

const locations = [
   { location: "Town, State", photo: { before: icons.properties["property1"], after: icons.properties["property1"] } },
   { location: "Town, State", photo: { before: icons.properties["property2"], after: icons.properties["property1"] } },
   { location: "Town, State", photo: { before: icons.properties["property3"], after: icons.properties["property1"] } },
   { location: "Town, State", photo: { before: icons.properties["property1"], after: icons.properties["property1"] } },
   { location: "Town, State", photo: { before: icons.properties["property2"], after: icons.properties["property1"] } },
   { location: "Town, State", photo: { before: icons.properties["property3"], after: icons.properties["property1"] } },
   { location: "Town, State", photo: { before: icons.properties["property1"], after: icons.properties["property1"] } },
   { location: "Town, State", photo: { before: icons.properties["property2"], after: icons.properties["property1"] } },
   { location: "Town, State", photo: { before: icons.properties["property3"], after: icons.properties["property1"] } },
];
