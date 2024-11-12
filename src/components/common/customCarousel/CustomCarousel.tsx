import { icons } from "@/utils/icon";
import styles from "./CustomCarousel.module.scss";
import Carousel, { ArrowProps, CarouselProps, DotProps } from "react-multi-carousel";
import Image from "next/image";
export const CustomCarousel = (props: TCustomCarouselProps) => {
   return (
      <Carousel
         customDot={<CustomDot />}
         customLeftArrow={<CustomLeft />}
         customRightArrow={<CustomRight />}
         {...props}
      />
   );
};

type TCustomCarouselProps = CarouselProps;
const CustomDot = ({ onClick, active }: DotProps) => (
   <li className={`${styles.customDot} ${active ? styles.active : ""}`} onClick={onClick}></li>
);
const CustomRight = ({ onClick }: ArrowProps) => (
   <button className={`${styles.arrowBtn} ${styles.right}`} type="button" title="arrow" onClick={onClick}>
      <div>
         <Image alt="arrow" src={icons.common["right_arrow"]} fill sizes="10vw" />
      </div>
   </button>
);
const CustomLeft = ({ onClick }: ArrowProps) => (
   <button className={`${styles.arrowBtn} ${styles.left}`} type="button" title="arrow" onClick={onClick}>
      <div>
         <Image alt="arrow" src={icons.common["left_arrow"]} fill sizes="10vw" />
      </div>
   </button>
);
