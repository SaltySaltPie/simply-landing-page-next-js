"use client";
import { useContent } from "@/hooks/useContent";
import styles from "./Properties.module.scss";
import Carousel, { DotProps, ResponsiveType } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { icons } from "@/utils/icon";
export const Properties = () => {
   const { properties } = useContent().content;
   if (!properties) return null;
   const { title, locations } = properties;
   const responsive: ResponsiveType = {
      1: {
         breakpoint: { max: 3000, min: 2300 },
         items: 6,
      },
      2: {
         breakpoint: { max: 2300, min: 2000 },
         items: 5,
      },
      3: {
         breakpoint: { max: 2000, min: 1600 },
         items: 4,
      },
      4: {
         breakpoint: { max: 1600, min: 0 },
         items: 3,
      },
   };
   return (
      <div className={`${styles.contentC}`} id="properties">
         <h2>{title}</h2>
         <Carousel
            responsive={responsive}
            containerClass={`${styles.carousel}`}
            arrows
            removeArrowOnDeviceType={["tablet", "mobile"]}
            showDots
            customDot={<CustomDot />}
            autoPlay
            infinite
         >
            {locations.map(({ location, photo }, index) => (
               <div key={index} className={`${styles.property}`}>
                  <div className={`${styles.photo}`}>
                     <Image alt={location} src={photo} fill sizes="33vw" />
                  </div>
                  <div className={`${styles.location}`}>
                     <div className={`${styles.pin}`}>
                        <Image alt="pin" src={icons.properties["location"]} fill sizes="10vw" />
                     </div>
                     <h3>{location}</h3>
                  </div>
               </div>
            ))}
         </Carousel>
      </div>
   );
};
const CustomDot = ({ onMove, index, onClick, active }: DotProps) => {
   return (
      <li className={`${styles.customDot} ${active ? styles.active : ""}`} onClick={onClick}>
      </li>
   );
};
