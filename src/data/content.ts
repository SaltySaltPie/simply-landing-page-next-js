export const app_content: Record<string, App_Content> = {
   default: {} as App_Content,
};

export type App_Content = {
   hero: {
      title: string;
      subtitle: string;
      ratings: { icon: string; link: string; title: string; agencyName: string }[];
   };
   business?: { title?: string; paragraphs: string[]; banner: string };
   faqs?: { title?: string; qas: { question: string; answer: string; expandByDefault?: boolean }[] };
   properties?: { title?: string; properties: { photos: string[]; location: string }[] };
   process?: { title?: string; steps: { title: string; description: string }[] };
   about?: { title?: string; link: string };
};
