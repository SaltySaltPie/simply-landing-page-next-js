"use client";
import { Process } from "@/components/process/Process";
import { icons_we_rent } from "@/utils/icon";

export const WeRentWhy = () => {
   return <Process steps={steps} header="Why do we rent?" type="expand" />;
};
const steps = [
   {
      title: "The Affordable housing crisis is real",
      content: (
         <div>
            <b>The affordable housing crisis</b> has left countless families struggling to find safe and stable homes
            with many <b>waiting up to seven years just to access Section 8</b> housing assistance. Right now, for every
            three extremely low-income families, two are unable to secure a rental home due to the severe shortage of
            affordable options, particularly in rapidly growing metropolitan areas (MSAs), where economic mobility is
            increasingly out of reach for many.
         </div>
      ),

      image: icons_we_rent.why["why1"],
   },
   {
      title: "7-year waiting List for HCV prospective tenants",
      content: (
         <div>
            <b>Families aren&apos;t asking for charity; they&apos;re simply seeking a fair shot at life.</b> We believe
            that everyone deserves the opportunity to live in stable, secure housing, regardless of their economic
            circumstances. By <b>making affordable homes accessible to those who need it the most,</b> we provide a
            crucial lifeline for those in need, offering them a chance to find stability, rebuild their lives, and
            create a foundation for a better future.
         </div>
      ),
      image: icons_we_rent.why["why2"],
   },
   {
      title: "HUD is pushing for more owner support",
      content: (
         <div>
            <b>The challenge of affordable housing is not just an affordability crisis but also an identity crisis.</b>{" "}
            When families are unable to find stable, affordable homes, it disrupts the very fabric of the neighborhoods
            they wish to be part of. Communities thrive when their members have secure places to live, preserving
            experiences, fostering connections, and sharing a sense of belonging. But when affordable housing is out of
            reach, it fractures this identity, leading to transience and instability that weaken the bonds that make a
            community strong.
         </div>
      ),
      image: icons_we_rent.why["why3"],
   },
   {
      title: "Stable housing for people in need",
      content: (
         <div>
            <b>
               Stable housing allows families to put down roots, become active participants in their neighborhoods, and
               contribute to thriving communities.
            </b>
            It is through this sense of permanence and belonging that communities maintain their identity, ensuring that
            they remain vibrant, diverse, and resilient places for everyone. <br />
            <b>That’s why we rent.</b>
         </div>
      ),
      image: icons_we_rent.why["why4"],
   },
];
