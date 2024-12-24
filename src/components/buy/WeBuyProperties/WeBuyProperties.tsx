"use client";
import styles from "./WeBuyProperties.module.scss";
import { ResponsiveType } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Image from "next/image";
import { icons, icons_we_buy } from "@/utils/icon";
import { CustomCarousel } from "@/components/common/customCarousel/CustomCarousel";
import { Text } from "@/components/common/text/Text";
import { Properties } from "@/components/properties/Properties";

export const WeBuyProperties = () => {
   return (
      <Properties
         title="Recently purchased homes"
         description="Still not sure if we are a fit? See here some of the properties we have bought recently"
         locations={locations}
         reasons
         user
         type="single"
      />
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
      breakpoint: { max: 2000, min: 1400 },
      items: 3,
   },
   4: {
      breakpoint: { max: 1400, min: 620 },
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
