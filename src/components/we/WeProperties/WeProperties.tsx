"use client";
import { useContent } from "@/hooks/useContent";
import "react-multi-carousel/lib/styles.css";
import { icons } from "@/utils/icon";
import { Properties } from "@/components/properties/Properties";

export const WeProperties = () => {
   return (
      <Properties
         title="Look familiar? These are properties we have bought in your neighborhood"
         locations={locations}
         type="single"
      />
   );
};

const locations = [
   { location: "Town, State", photo: icons.properties["property1"] },
   { location: "Town, State", photo: icons.properties["property2"] },
   { location: "Town, State", photo: icons.properties["property3"] },
   { location: "Town, State", photo: icons.properties["property1"] },
   { location: "Town, State", photo: icons.properties["property2"] },
   { location: "Town, State", photo: icons.properties["property3"] },
   { location: "Town, State", photo: icons.properties["property1"] },
   { location: "Town, State", photo: icons.properties["property2"] },
   { location: "Town, State", photo: icons.properties["property3"] },
];
