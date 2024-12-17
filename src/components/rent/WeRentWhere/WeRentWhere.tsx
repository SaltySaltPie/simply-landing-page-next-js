"use client";
import { icons_we_rent } from "@/utils/icon";
import styles from "./WeRentWhere.module.scss";
import Image from "next/image";
import { useState } from "react";
export const WeRentWhere = () => {
   const [show, setShow] = useState<number>(0);

   return (
      <div className={`${styles.contentC}`}>
         <h1>Where do we rent?</h1>
         <div className={`${styles.location}`}>
            {locations.map(({ location, picture }, i) => (
               <button key={i} onClick={() => setShow(i)} className={`${show === i && styles.active}`}>
                  {location}
               </button>
            ))}
         </div>
         {locations.map(({ location, picture }, i) => (
            <div key={i} className={`${styles.content} ${show === i && styles.active}`}>
               {/* <div className={`${styles.image}`}> */}
               <Image alt="" src={picture.trimEnd()} width={300} height={200} quality={100} />
            </div>
            // </div>
         ))}
      </div>
   );
};

const locations = [
   { location: "Pittsburgh", picture: icons_we_rent.map["Pittsburgh"] },
   { location: "Cleveland", picture: icons_we_rent.map["Cleveland"] },
   { location: "Indianapolis", picture: icons_we_rent.map["Indianapolis"] },
];