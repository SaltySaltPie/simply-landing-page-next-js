import styles from "./WeProcess.module.scss";
import Image from "next/image";
import { useState } from "react";
import { icons_we } from "@/utils/icon";
export const WeProcess = () => {
   const [show, setShow] = useState<number>(0);
   return (
      <div className={`${styles.contentC}`}>
         <h2 className={styles.title}>How does this process work?</h2>
         <div className={styles.processC}>
            <div className={styles.process}>
               {steps.map(({ title }, i) => (
                  <div key={i} className={`${styles.stepsC}`}>
                     <button onClick={() => setShow(i)} className={`${styles.steps} ${show === i && styles.active}`}>
                        <Image
                           alt=""
                           src={
                              show == i
                                 ? icons_we.process.play_arrow.trimEnd()
                                 : icons_we.process.play_arrow_outline_black.trimEnd()
                           }
                           width={24}
                           height={24}
                        />
                        <span>{title}</span>
                     </button>
                  </div>
               ))}
            </div>
            <div className={styles.stepsMobile}>
               {steps.map(({ title, content, image }, i) => (
                  <div className={`${styles.stepsC} ${show === i && styles.active}`} key={i}>
                     <button onClick={() => setShow(i)} className={`${styles.steps} ${show === i && styles.active}`}>
                        <Image
                           alt=""
                           src={
                              show == i
                                 ? icons_we.process.play_arrow.trimEnd()
                                 : icons_we.process.play_arrow_outline_black.trimEnd()
                           }
                           width={24}
                           height={24}
                        />
                        <span>{title}</span>
                     </button>

                     <div className={`${styles.description} ${show === i ? styles.active : ""}`}>
                        <span>{content}</span>
                        <div className={styles.stepsImg}>
                           {image && (
                              <Image
                                 alt={title}
                                 src={image.trimEnd()}
                                 width={300}
                                 height={200}
                                 quality={100}
                                 sizes="100vw"
                              />
                           )}
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
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
