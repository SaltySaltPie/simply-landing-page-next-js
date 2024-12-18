"use client";
import styles from "./WeBuyProperties.module.scss";
import { ResponsiveType } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { icons, icons_we_buy } from "@/utils/icon";
import { CustomCarousel } from "@/components/common/customCarousel/CustomCarousel";
export const WeBuyProperties = () => {
   return (
      <div className={`${styles.contentC}`} id="properties">
         <div className={`${styles.title}`}>
            <h2>Recently purchased homes</h2>
            <span>Still not sure if we are a fit? See here some of the properties we have bought recently</span>
         </div>
         <CustomCarousel
            responsive={responsive}
            containerClass={`${styles.carousel}`}
            arrows
            removeArrowOnDeviceType={["tablet", "mobile"]}
            showDots
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
                  <div className={`${styles.user}`}>
                     <Image alt="" src={icons_we_buy.property["person"].trimEnd()} width={32} height={32} />
                     <h4>Shanta P.</h4>
                     <hr />
                     <span>Seller</span>
                  </div>
                  <div className={`${styles.reason}`}>[Showing why Simply buy this property]</div>
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

const locations = [
   {
      location: "Town, State",
      photo: icons.properties["property2"],
      name: "Shanta",
      position: "Seller",
      reason: "[Showing why Simply buy this property]",
   },
   {
      location: "Town, State",
      photo: icons.properties["property3"],
      name: "Shanta",
      position: "Seller",
      reason: "[Showing why Simply buy this property]",
   },
   {
      location: "Town, State",
      photo: icons.properties["property1"],
      name: "Shanta",
      position: "Seller",
      reason: "[Showing why Simply buy this property]",
   },
   {
      location: "Town, State",
      photo: icons.properties["property1"],
      name: "Shanta",
      position: "Seller",
      reason: "[Showing why Simply buy this property]",
   },
   {
      location: "Town, State",
      photo: icons.properties["property2"],
      name: "Shanta",
      position: "Seller",
      reason: "[Showing why Simply buy this property]",
   },
   {
      location: "Town, State",
      photo: icons.properties["property3"],
      name: "Shanta",
      position: "Seller",
      reason: "[Showing why Simply buy this property]",
   },
   {
      location: "Town, State",
      photo: icons.properties["property1"],
      name: "Shanta",
      position: "Seller",
      reason: "[Showing why Simply buy this property]",
   },
   {
      location: "Town, State",
      photo: icons.properties["property2"],
      name: "Shanta",
      position: "Seller",
      reason: "[Showing why Simply buy this property]",
   },
   {
      location: "Town, State",
      photo: icons.properties["property3"],
      name: "Shanta",
      position: "Seller",
      reason: "[Showing why Simply buy this property]",
   },
];
