"use client";
import { useContent } from "@/hooks/useContent";
import styles from "./WeFaqs.module.scss";
import { icons } from "@/utils/icon";
import Image from "next/image";
import { App_Content_Faqs_QA } from "@/data/content";
import { useState } from "react";
export const WeFaqs = () => {
   const { faqs } = useContent().content;
   if (!faqs) return null;
   return (
      <div className={`${styles.contentC}`} id="faqs">
         <h2>FAQs</h2>
         <div className={`${styles.QAsC}`}>
            {faqs.qas.map((qa, index) => (
               <QA key={index} qa={qa} />
            ))}
         </div>
      </div>
   );
};
const QA = ({ qa }: { qa: App_Content_Faqs_QA }) => {
   const [isOpen, setIsOpen] = useState(qa.expandByDefault);
   return (
      <div className={`${styles.groupQAs}`}>
         <div className={`${styles.question}`}>
            <h4>{qa.question}</h4>
            <button type="button" title="toggle" className={`${styles.icon}`} onClick={() => setIsOpen(!isOpen)}>
               <Image alt={qa.question} src={icons.faqs[isOpen ? "remove" : "add"]} fill />
            </button>
         </div>
         {isOpen && (
            <div className={`${styles.answer}`}>
               {Array.isArray(qa.answer) ? qa.answer.map((a, i) => <h4 key={i}>{a}</h4>) : <h4>{qa.answer}</h4>}
            </div>
         )}
         <hr />
      </div>
   );
};
