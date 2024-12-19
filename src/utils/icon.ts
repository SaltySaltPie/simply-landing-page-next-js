import { CF_CDN_URL } from "@/utils/CF_CDN_URL";
import { CF_CDN_URL_WE } from "./CF_CDN_URL_WE";
import { CF_CDN_URL_WE_RENOVATE } from "./CF_CND_WE_RENOVATE";
import { CF_CDN_URL_WE_RENT } from "./CF_CND_WE_RENT";
import { CF_CDN_URL_WE_BUY } from "./CF_CND_WE_BUY";

export const icons = {
   common: {
      left_arrow: CF_CDN_URL("/assets/common/left-arrow.svg"),
      right_arrow: CF_CDN_URL("/assets/common/right-arrow.svg"),
   },
   hero: {
      banner: CF_CDN_URL("/assets/hero/hero-banner.png"),
      link: CF_CDN_URL("/assets/hero/link_black.svg"),
   },
   nav: {
      logo: CF_CDN_URL("/assets/common/simply-logo.svg"),
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
            trustPilot: CF_CDN_URL("/assets/header/hero/smallIcon/TrustPilot.png"),
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

export const icons_we = {
   hero: {
      banner: CF_CDN_URL_WE("/hero/hero_bg.png"),
   },
   CTA: {
      cta_bg: CF_CDN_URL_WE("/CTA/cta_bg.png"),
   },
   process: {
      process_bg: CF_CDN_URL_WE("/process/process_man_bg.png"),
      play_arrow: CF_CDN_URL_WE("/process/play_arrow_black.svg"),
      play_arrow_outline_black: CF_CDN_URL_WE("/process/play_arrow_outline_black.svg"),
      process1: CF_CDN_URL_WE("/process/Frame 11.png"),
      process2: CF_CDN_URL_WE("/process/export.png"),
      process3: CF_CDN_URL_WE("/process/icon.png"),
      process4: CF_CDN_URL_WE("/process/Icon.png"),
      process5: CF_CDN_URL_WE("/process/Icon5.png"),
   },
};

export const icons_we_renovate = {
   hero: {
      banner: CF_CDN_URL_WE_RENOVATE("/hero/hero_bg.png"),
   },
   question: CF_CDN_URL_WE_RENOVATE("/question/question.svg"),
   why: {
      banner: CF_CDN_URL_WE_RENOVATE("/why/why_bg.png"),
      more: CF_CDN_URL_WE_RENOVATE("/why/keyboard_double_arrow_down.svg"),
      less: CF_CDN_URL_WE_RENOVATE("/why/keyboard_double_arrow_up.svg"),
   },
   high: {
      high1: CF_CDN_URL_WE_RENOVATE("/high-standard/h1.png"),
      high2: CF_CDN_URL_WE_RENOVATE("/high-standard/h2.png"),
      high3: CF_CDN_URL_WE_RENOVATE("/high-standard/h3.png"),
   },
   affordability: {
      affordability1: CF_CDN_URL_WE_RENOVATE("/affordability/a1.png"),
      affordability2: CF_CDN_URL_WE_RENOVATE("/affordability/a2.png"),
      affordability3: CF_CDN_URL_WE_RENOVATE("/affordability/a3.png"),
   },
   community: {
      community1: CF_CDN_URL_WE_RENOVATE("/community-driven/c1.png"),
      community2: CF_CDN_URL_WE_RENOVATE("/community-driven/c2.png"),
   },
   expand: {
      less: CF_CDN_URL_WE_RENOVATE("/expand_less.svg"),
      more: CF_CDN_URL_WE_RENOVATE("/expand_more.svg"),
   },
};

export const icons_we_rent = {
   hero: {
      banner: CF_CDN_URL_WE_RENT("/banner_rent.png"),
   },
   who: {
      who: CF_CDN_URL_WE_RENT("/who_family.png"),
      more: CF_CDN_URL_WE_RENOVATE("/keyboard_double_arrow_down.svg"),
      less: CF_CDN_URL_WE_RENOVATE("/keyboard_double_arrow_up.svg"),
   },
   why: {
      why1: CF_CDN_URL_WE_RENT("/w1.png"),
      why2: CF_CDN_URL_WE_RENT("/w2.png"),
      why3: CF_CDN_URL_WE_RENT("/w3.png"),
      why4: CF_CDN_URL_WE_RENT("/w4.png"),
   },
   map: {
      Pittsburgh: CF_CDN_URL_WE_RENT("/pit.png"),
      Cleveland: CF_CDN_URL_WE_RENT("/cle.png"),
      Indianapolis: CF_CDN_URL_WE_RENT("/ind.png"),
   },
   expand: {
      less: CF_CDN_URL_WE_RENOVATE("/expand_less.svg"),
      more: CF_CDN_URL_WE_RENOVATE("/expand_more.svg"),
   },
};

export const icons_we_buy = {
   hero: {
      banner: CF_CDN_URL_WE_BUY("/hero.png"),
   },
   group: {
      money: CF_CDN_URL_WE_BUY("/monetization_on.svg"),
      house_orange: CF_CDN_URL_WE_BUY("/house_orange.svg"),
      night_shelter: CF_CDN_URL_WE_BUY("/night_shelter.svg"),
   },
   value: {
      house_white: CF_CDN_URL_WE_BUY("/house_white.svg"),
      location: CF_CDN_URL_WE_BUY("/location_on.svg"),
      doc: CF_CDN_URL_WE_BUY("/circle.svg"),
      bedroom: CF_CDN_URL_WE_BUY("/Rectangle 4.png"),
   },
   map: {
      Pittsburgh: CF_CDN_URL_WE_RENT("/pit.png"),
      Cleveland: CF_CDN_URL_WE_BUY("/Cleveland.png"),
      Indianapolis: CF_CDN_URL_WE_BUY("/Indianapolis.png"),
   },
   property: {
      person: CF_CDN_URL_WE_BUY("/person.svg"),
   },
};
