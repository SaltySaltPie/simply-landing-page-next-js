"use client";
import styles from "./Properties.module.scss";
import Image from "next/image";
import { useState } from "react";
import { icons, icons_we_buy } from "@/utils/icon";
import { CustomCarousel } from "@/components/common/customCarousel/CustomCarousel";
import { Text } from "@/components/common/text/Text";
import Carousel, { ResponsiveType } from "react-multi-carousel";

type PropertiesProps = {
   title: string;
   description?: string;
   locations: TLocations[];
   user?: boolean;
   reasons?: boolean;
   type: "comparasion" | "single";
};
export const Properties = ({ title, description, locations, user, reasons, type }: PropertiesProps) => {
   return (
      <div className={`${styles.contentC}`} id="properties">
         <div className={`${styles.title}`}>
            <h2>{title}</h2>
            <Text type="f1-125">{description}</Text>
         </div>
         <CustomCarousel
            responsive={responsive}
            containerClass={`${styles.carousel}`}
            arrows
            removeArrowOnDeviceType={["tablet", "mobile"]}
            showDots
            infinite
         >
            {locations.map(({ location, photo, name, position, reason }, index) => (
               <div key={index} className={`${styles.property}`}>
                  {type === "comparasion" ? (
                     <Carousel
                        responsive={responsivePhoto}
                        arrows={false}
                        showDots
                        infinite
                        containerClass={`${styles.compare}`}
                     >
                        <div className={`${styles.photo}`}>
                           {typeof photo === "object" && <Image alt={location} src={photo.after} fill sizes="33vw" />}
                        </div>
                        <div className={`${styles.photo}`}>
                           {typeof photo === "object" && <Image alt={location} src={photo.before} fill sizes="33vw" />}
                        </div>
                     </Carousel>
                  ) : (
                     <div className={`${styles.photo}`}>
                        {typeof photo === "string" && <Image alt={location} src={photo} fill sizes="33vw" />}
                     </div>
                  )}

                  <div className={`${styles.location}`}>
                     <div className={`${styles.pin}`}>
                        <Image alt="pin" src={icons.properties["location"]} fill sizes="10vw" />
                     </div>
                     <h3>{location}</h3>
                  </div>
                  {user && (
                     <div className={`${styles.user}`}>
                        <div className={`${styles.userIcon}`}>
                           <Image alt="" src={icons_we_buy.property["person"].trimEnd()} width={32} height={32} />
                        </div>
                        <Text type="f1-25B">{name}</Text>
                        <hr />
                        <Text type="f1-25">{position}</Text>
                     </div>
                  )}
                  {reasons && (
                     <Text type="f1" className={`${styles.reason}`}>
                        {reason}
                     </Text>
                  )}
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
      breakpoint: { max: 2300, min: 1800 },
      items: 4,
   },
   3: {
      breakpoint: { max: 1800, min: 1100 },
      items: 3,
   },
   4: {
      breakpoint: { max: 1100, min: 620 },
      items: 2,
   },
   5: {
      breakpoint: { max: 620, min: 0 },
      items: 1,
   },
};
const responsivePhoto: ResponsiveType = {
   2: {
      breakpoint: { max: 3000, min: 0 },
      items: 1,
   },
};
type TLocations = {
   location: string;
   photo: string | TPhoto;
   name?: string;
   position?: string;
   reason?: string;
};

type TPhoto = {
   before: string;
   after: string;
};
