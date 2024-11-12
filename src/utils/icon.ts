import { CF_CDN_URL } from "@/utils/CF_CDN_URL";

export const icons = {
   logo: CF_CDN_URL("/assets/simply_logo.svg"),
   nav: {
      phone: CF_CDN_URL("/assets/header/phone_black.svg"),
      menu: CF_CDN_URL("/assets/header/menu_black.svg"),
      close: CF_CDN_URL("/assets/header/close_black.svg"),
   },
   header: {
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
         open_in_new: CF_CDN_URL("/assets/header/phone_black.svg"),
      },
   },
   business: {
      soldSimply: CF_CDN_URL("/assets/business/sold_simply.png"),
   },
   faqs: {
      add: CF_CDN_URL("/assets/faqs/add_black.svg"),
      remove: CF_CDN_URL("/assets/faqs/remove_black.svg"),
      viewMore: CF_CDN_URL("/assets/faqs/keyboard_double_arrow_down_black.svg"),
   },
   properties: {
      location: CF_CDN_URL("/assets/property/location_on_black.svg"),
      property1: CF_CDN_URL("/assets/property/property1.jpeg"),
      property2: CF_CDN_URL("/assets/property/property2.jpeg"),
      property3: CF_CDN_URL("/assets/property/property3.jpeg"),
   },
   process: {
      process1: CF_CDN_URL("/assets/process/process1.png"),
      process2: CF_CDN_URL("/assets/process/process2.png"),
      process3: CF_CDN_URL("/assets/process/process3.png"),
      process4: CF_CDN_URL("/assets/process/process4.png"),
      process5: CF_CDN_URL("/assets/process/process5.png"),
   },
};
