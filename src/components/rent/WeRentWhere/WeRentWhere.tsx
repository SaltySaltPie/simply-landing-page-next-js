"use client";
import { icons_we_rent } from "@/utils/icon";
import styles from "./WeRentWhere.module.scss";
import Image from "next/image";
import { useState } from "react";
import { Text } from "@/components/common/text/Text";
export const WeRentWhere = () => {
   const [show, setShow] = useState<number>(0);

   return (
      <div className={`${styles.contentC}`}>
         <h2>Where do we rent?</h2>
         <div className={`${styles.location}`}>
            {locations.map(({ location }, i) => (
               <button type="button" key={i} onClick={() => setShow(i)} className={`${show === i && styles.active}`}>
                  <Text type="f1">{location}</Text>
               </button>
            ))}
         </div>
         <div key={show} className={`${styles.content}`}>
            <Image
               alt=""
               src={locations[show].picture.trimEnd()}
               width={300}
               height={200}
               quality={100}
               sizes="100vw"
            />
         </div>
      </div>
   );
};

const locations = [
   { location: "Pittsburgh", picture: icons_we_rent.map["Pittsburgh"] },
   { location: "Cleveland", picture: icons_we_rent.map["Cleveland"] },
   { location: "Indianapolis", picture: icons_we_rent.map["Indianapolis"] },
];
