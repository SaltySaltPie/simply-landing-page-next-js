import { CF_CDN_URL } from "@/utils/CF_CDN_URL";

export const icons = {
   logo: CF_CDN_URL("/assets/simply_logo.svg"),
   nav: {
      phone: CF_CDN_URL("/assets/header/phone_black.svg"),
      menu: CF_CDN_URL("/assets/header/menu_black.svg"),
      close: CF_CDN_URL("/assets/header/close_black.svg"),
   },
   header: {
      open_in_new: CF_CDN_URL("/assets/header/phone_black.svg"),
      home_bg: CF_CDN_URL("/assets/home_bg.png"),
      arrow_forward: CF_CDN_URL("/assets/header/arrow_forward_black.svg"),
      hero: {
         bigIcon: {
            bbb: CF_CDN_URL("/assets/header/hero/bigIcon/BetterBusinessBureau.png"),
            mainbiz: CF_CDN_URL("/assets/header/hero/bigIcon/mainbiz.png"),
            medium: CF_CDN_URL("/assets/header/hero/bigIcon/Medium.png"),
            sofi: CF_CDN_URL("/assets/header/hero/bigIcon/SoFi.png"),
            techCrunch: CF_CDN_URL("/assets/header/hero/bigIcon/TechCrunch.png"),
            trustPilot: CF_CDN_URL("/assets/header/hero/bigIcon/trustPilot.png"),
         },
         smallIcon: {
            bbb: CF_CDN_URL("/assets/header/hero/smallIcon/bbb.png"),
            mainbiz: CF_CDN_URL("/assets/header/hero/smallIcon/mainbiz.png"),
            medium: CF_CDN_URL("/assets/header/hero/smallIcon/Medium.png"),
            sofi: CF_CDN_URL("/assets/header/hero/smallIcon/SoFi.png"),
            techCrunch: CF_CDN_URL("/assets/header/hero/smallIcon/TechCrunch.png"),
            trustPilot: CF_CDN_URL("/assets/header/hero/smallIcon/trustPilot.png"),
         },
      },
   },
};
