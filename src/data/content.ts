import { icons } from "@/utils/icon";

export const app_content: Record<string, App_Content> = {
   default: {
      info: {
         market: "",
         phone: "(207) 300-6144",
      },

      hero: {
         title: `We’re buying houses for cash in [Market]`,
         subtitle: "Sell your home - the Simply way",
         ratings: [
            {
               smallIcon: icons.header.hero.smallIcon["bbb"],
               bigIcon: icons.header.hero.bigIcon["bbb"],
               link: "",
               title: "Simply Homes, Inc. | Better Business Bureau® Profile",
               agencyName: "Better Business Bureau",
            },
            {
               smallIcon: icons.header.hero.smallIcon["trustPilot"],
               bigIcon: icons.header.hero.bigIcon["trustPilot"],
               link: "",
               title: 'Simply Homes, Inc. is rated "Great" with 3.8 / 5 on Trustpilot',
               agencyName: "Trust  Pilot",
            },
            {
               smallIcon: icons.header.hero.smallIcon["techCrunch"],
               bigIcon: icons.header.hero.bigIcon["techCrunch"],
               link: "",
               title: "Here are the newly minted fintech unicorns | TechCrunch",
               agencyName: "TechCrunch",
            },
            {
               smallIcon: icons.header.hero.smallIcon["sofi"],
               bigIcon: icons.header.hero.bigIcon["sofi"],
               link: "",
               title: "Simply Homes Wants to Revive Low-Income Neighborhoods | SoFi",
               agencyName: "SoFi",
            },
            {
               smallIcon: icons.header.hero.smallIcon["medium"],
               bigIcon: icons.header.hero.bigIcon["medium"],
               link: "",
               title: "Our Investment in Simply Homes | James Gettinger",
               agencyName: "Medium",
            },
            {
               smallIcon: icons.header.hero.smallIcon["mainbiz"],
               bigIcon: icons.header.hero.bigIcon["mainbiz"],
               link: "",
               title: "Not so simple: Simply Homes uses AI tools to boost affordable housing",
               agencyName: "mainbiz",
            },
         ],
      },
      business: {
         title: "We really buy houses",
         paragraphs: [
            "At Simply Homes we are the final buyer —no tricks, no middlemen. Unlike other so-called “investors,” we actually purchase homes directly, with a proven track record of buying numerous properties in your neighborhood (just look around!). Once we acquire a home, we revitalize it to create safe, affordable living spaces for families.",
            "We primarily serve everyday homeowners who need a reliable, straightforward solution to sell their homes as-is.",
         ],
         banner: "",
      },
      faqs: {
         title: "FAQs",
         qas: [
            {
               question: "What type of properties do you buy?",
               answer:
                  "We buy homes as-is in the Pittsburgh and Cleveland Metropolitan areas, specializing in single-family homes and 2-4 unit properties. Our straightforward process welcomes homes in any condition.",
               expandByDefault: true,
            },
            {
               question: "Are you buying my home or selling it for me?",
               answer:
                  "We are the Buyer of your Home, your contract may reflect the specific entity to the market you are in. Unlike the stress of traditional listings or the risks of predatory wholesaling, Simply Homes buys your home directly, offering a personalized closing process tailored to your needs—without the hassle or added cost of a middleman. With Simply Homes, you maintain control over your timeline and maximize your earnings from the sale.",
               expandByDefault: false,
            },
            {
               question: "How quickly can you close?",
               answer:
                  "While the timeline varies based on your county, property, and circumstances, we can often close in as little as 18 days—or even sooner. We’re flexible and committed to meeting your needs and situation as much as possible. Want to get a head start?  Click here to download our Selling Simply Checklist",
               expandByDefault: false,
            },
            {
               question: "Where do you buy?",
               answer: [
                  "We are currently buying properties located in:",
                  "Allegheny County, PA",
                  "Westmoreland County, PA ",
                  "Washington County, PA ",
                  "Cuyahoga County, OH ",
               ],
               expandByDefault: false,
            },
            {
               question: "Do I need any seller representation?",
               answer:
                  "At Simply Homes, we believe in complete financial transparency and fairness. You won’t need representation—we’re committed to guiding you through an honest and straightforward process. Our goal is to work with you, offering the best advice for your situation, even if it means placing your needs above our own. Founded on principles of speed, simplicity, and integrity, we’re here to support you through every step of selling your home, especially during a challenging or significant moment in your life.  If you feel you need outside representation, you are welcome to find an agent to work with you, at your own expense.",
               expandByDefault: false,
            },
            {
               question: "Do you buy homes in foreclosure?",
               answer:
                  "Absolutely, and we handle much more. We will work through pre-foreclosure, short sales, probate, code violations, REO sales, bank-owned properties, bankruptcy, tax lien sales, and foreclosure. While some situations may take longer, you won’t need to worry or lift a finger—we’re here to take care of everything for you!",
               expandByDefault: false,
            },
            {
               question:
                  "I submitted my property details a few days ago but haven't heard back. What should I do next?",
               answer:
                  "You should have received an email from your Simply Homes advisor on the day you submitted your property. Please contact your advisor to check on the status. If you didn’t receive an email, try resubmitting your property with the correct email address [link], and be sure to check your spam folder too! Please allow us 24 business hours to reach out for next steps! ",
               expandByDefault: false,
            },
         ],
      },
      properties: {
         title: "Look familiar? These are properties we have bought in your neighborhood",
         locations: [
            { location: "Town, State", photo: icons.properties["property1"] },
            { location: "Town, State", photo: icons.properties["property2"] },
            { location: "Town, State", photo: icons.properties["property3"] },
            { location: "Town, State", photo: icons.properties["property1"] },
            { location: "Town, State", photo: icons.properties["property2"] },
            { location: "Town, State", photo: icons.properties["property3"] },
            { location: "Town, State", photo: icons.properties["property1"] },
            { location: "Town, State", photo: icons.properties["property2"] },
            { location: "Town, State", photo: icons.properties["property3"] },
         ],
      },
      process: {
         title: "What our process is",
         steps: [
            { title: "1. Submit your Property Details", image: icons.process["process1"] },
            { title: "2. Connect with Simply Advisor", image: icons.process["process2"] },
            { title: "3. Arrange a property walkthrough", image: icons.process["process3"] },
            { title: "4. Receive your offer", image: icons.process["process4"] },
            { title: "5. Schedule your closing date", image: icons.process["process5"] },
         ],
      },
      about: { title: "Learn more about our Simply mission at", link: "" },
   },
};

export type App_Content = {
   info: {
      market: string;
      phone: string;
   };
   hero: {
      title: string;
      subtitle: string;
      ratings: { bigIcon: string; smallIcon: string; link: string; title: string; agencyName: string }[];
   };
   business?: { title?: string; paragraphs: string[]; banner: string };
   faqs?: { title?: string; qas: { question: string; answer: string | string[]; expandByDefault?: boolean }[] };
   properties?: { title?: string; locations: { photo: string; location: string }[] };
   process?: { title?: string; steps: { title: string; image: string }[] };
   about?: { title?: string; link: string };
};
