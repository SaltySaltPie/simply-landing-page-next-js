import { icons_we } from "@/utils/icon";
import { Process } from "@/components/process/Process";
export const WeProcess = () => {
   return <Process steps={steps} header="How does this process work?" isPlayIcon />;
};

const steps = [
   {
      title: "1. Submit your Property Details",
      content:
         "Getting started is easy. Submit your property information through our secure online form. We’ll need your property address and some basic details about your home to get the ball rolling.",
      image: icons_we.process["process1"],
   },
   {
      title: "2. Connect with Simply Advisor",
      content:
         "Within a timely manner after your submission, a Simply Advisor will reach out to you. This step is all about understanding your needs, goals, and any specific details about your property. Our team is here to listen and provide the support you need.",
      image: icons_we.process["process2"],
   },
   {
      title: "3. Arrange a property walkthrough",
      content:
         "Next, we’ll schedule for a Simply Renovations Analyst to visit your property. This visit involves a straightforward walkthrough to assess the property’s condition, take some photos, and possibly ask a few questions. This step helps us ensure our offer is as accurate and fair as possible.",
      image: icons_we.process["process3"],
   },
   {
      title: "4. Receive your offer",
      content:
         "After the walkthrough and assessment, we’ll present you with a personalized offer for your home. You’ll receive a detailed purchase agreement to review, which can be signed electronically for your convenience. There’s no need for faxing or in-person visits—we’ve made it easy to move forward right from where you are.",
      image: icons_we.process["process4"],
   },
   {
      title: "5. Schedule your closing date",
      content:
         "You decide the closing date that works best for you, whether that’s as soon as possible or a bit further down the road. We offer the flexibility to close in as little as a few weeks, ensuring the process aligns with your timeline.",
      image: icons_we.process["process5"],
   },
];
