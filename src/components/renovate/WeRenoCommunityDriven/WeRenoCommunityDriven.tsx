"use client";

import { icons_we_renovate } from "@/utils/icon";
import { Process } from "@/components/process/Process";
export const WeRenoCommunityDriven = () => {
   return <Process steps={steps} header="Community driven" type="expand" />;
};
const steps = [
   {
      title: "Increase Curb Appeal and Improve Neighborhood Outlook",
      content:
         "By enhancing the exterior and aesthetic quality of homes, value-engineered renovations uplift the appearance of both individual properties and the surrounding neighborhood. This improvement fosters community pride and encourages further investment in the area.",
      image: icons_we_renovate.community["community1"],
   },
   {
      title: "Rejuvenate the Fabric of Strong Communities",
      content:
         "By revitalizing homes and neighborhoods, value-engineered renovations strengthen the social and economic fabric of communities. This process contributes to the creation of stable, supportive environments where families can thrive.",
      image: icons_we_renovate.community["community2"],
   },
];
