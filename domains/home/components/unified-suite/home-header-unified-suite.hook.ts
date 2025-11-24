import { useState, useCallback } from "react";

export const useHomeHeaderUnifiedSuite = () => {
  const [activeId, setActiveId] = useState(questions.at(0)?.id);
  const [activeItemId, setActiveItemId] = useState(
    questions.at(0)?.items?.at(0)?.id,
  );
  const [image, setImage] = useState(questions.at(0)?.items?.at(0)?.image);

  const onChangeActive = useCallback((item: Question) => {
    setActiveId(item.id);
    setActiveItemId(item.items.at(0)?.id);
    setImage(item.items.length ? item.items.at(0)?.image : item.image);
  }, []);

  const onChangeActiveItem = useCallback((item: QuestionItem) => {
    setActiveItemId(item.id);
    setImage(item.image);
  }, []);

  return {
    questions,
    activeId,
    activeItemId,
    image,
    onChangeActive,
    onChangeActiveItem,
  };
};

type Question = {
  id: number;
  title: string;
  description: string;
  items: QuestionItem[];
  image?: string;
};

type QuestionItem = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const questions: Question[] = [
  {
    id: 1,
    title: "Access to primary care",
    description: "Citizens can communicate with their family doctor through:",
    items: [
      {
        id: 1,
        title: "Secure communication",
        description: "Private, encrypted messaging with your doctor.",
        image: "/images/home/unified-suite/secure-communication.webp",
      },
      {
        id: 2,
        title: "1-to-1 phone calls",
        description: "Direct phone consultations with your family doctor.",
        image: "/images/home/unified-suite/1-to-1-phone calls.webp",
      },
      {
        id: 3,
        title: "HD video consultations",
        description: "High-quality video calls for detailed medical advice.",
        image: "/images/home/unified-suite/secure-communication.webp",
      },
    ],
  },
  {
    id: 2,
    title: "Smart appointment scheduling",
    description: "No queues, no repeated visits. The system provides:",
    items: [
      {
        id: 1,
        title: "Real-time availability",
        description: "See when your doctor is online and ready to assist.",
        image: "/images/home/unified-suite/slide_1_1.webp",
      },
      {
        id: 2,
        title: "Booking and rescheduling",
        description: "Easily book or change your appointment with your doctor.",
        image: "/images/home/unified-suite/slide_2_2.webp",
      },
      {
        id: 3,
        title: "Automatic reminders",
        description: "Receive timely reminders for visits, vaccinations, etc.",
        image: "/images/home/unified-suite/slide_2_2.webp",
      },
    ],
  },
  {
    id: 3,
    title: "Integrated documentation",
    description:
      "Every diagnosis, medical note, and prescription is automatically stored in the Digital Health Record, ensuring continuity of care and complete transparency.",
    image: "/images/home/unified-suite/integrated_documentation.webp",
    items: [],
  },
];
