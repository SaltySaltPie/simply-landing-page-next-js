"use client";
import { icons_we_renovate } from "@/utils/icon";
import styles from "./WeRenoValueEngineer.module.scss";

import Image from "next/image";
import { Text } from "@/components/common/text/Text";

export const WeRenoValueEngineer = () => {
   return (
      <div className={`${styles.contentC}`}>
         <div>
            <Image alt="" src={icons_we_renovate.question.trimEnd()} width={300} height={200} quality={100} />
         </div>
         <h2>What is Value-Engineered Renovation?</h2>
         <Text type="f1-25">
            Value-Engineered Renovation is a proprietary approach to property improvement that prioritizes both
            affordability and high standards while maximizing the long-term impact on communities.
         </Text>
      </div>
   );
};
