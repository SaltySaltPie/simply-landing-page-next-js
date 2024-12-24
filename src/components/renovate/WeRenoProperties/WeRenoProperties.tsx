"use client";
import { useContent } from "@/hooks/useContent";
import "react-multi-carousel/lib/styles.css";
import { icons } from "@/utils/icon";
import { Properties } from "@/components/properties/Properties";
export const WeRenoProperties = () => {
   return <Properties title="Before and after" locations={locations} reasons type="comparasion" />;
};

const locations = [
   {
      location: "Town, State",
      photo: { before: icons.properties["property2"], after: icons.properties["property1"] },
      reason: "Explain briefly exceeded standards",
   },
   {
      location: "Town, State",
      photo: { before: icons.properties["property3"], after: icons.properties["property1"] },
      reason: "Explain briefly exceeded standards",
   },
   {
      location: "Town, State",
      photo: { before: icons.properties["property1"], after: icons.properties["property1"] },
      reason: "Explain briefly exceeded standards",
   },
   {
      location: "Town, State",
      photo: { before: icons.properties["property2"], after: icons.properties["property1"] },
      reason: "Explain briefly exceeded standards",
   },
   {
      location: "Town, State",
      photo: { before: icons.properties["property1"], after: icons.properties["property1"] },
      reason: "Explain briefly exceeded standards",
   },
   {
      location: "Town, State",
      photo: { before: icons.properties["property3"], after: icons.properties["property1"] },
      reason: "Explain briefly exceeded standards",
   },
   {
      location: "Town, State",
      photo: { before: icons.properties["property1"], after: icons.properties["property1"] },
      reason: "Explain briefly exceeded standards",
   },
   {
      location: "Town, State",
      photo: { before: icons.properties["property2"], after: icons.properties["property1"] },
      reason: "Explain briefly exceeded standards",
   },
   {
      location: "Town, State",
      photo: { before: icons.properties["property3"], after: icons.properties["property1"] },
      reason: "Explain briefly exceeded standards",
   },
];
