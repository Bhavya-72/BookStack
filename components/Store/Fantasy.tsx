"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { title } from "process";

const books = [
  {
    title: "Takeshi Castle",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae molestias mollitia, perspiciatis perferendis vel similique exercitationem deserunt tempora blanditiis? Porro minus sit aliquam, eaque ipsa fuga voluptates expedita labore veritatis?",
    price: 20,
  },
  {
    title: "Takeshi Castle",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae molestias mollitia, perspiciatis perferendis vel similique exercitationem deserunt tempora blanditiis? Porro minus sit aliquam, eaque ipsa fuga voluptates expedita labore veritatis?",
    price: 20,
  },
  
];

export function AppleCardsCarouselDemoFantasy() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Best Selling Fantasy over the years
      </h2>

      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {books.map((book, index) => (
        <div
          key={index}
          className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
        >
          <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            <span className="font-bold text-neutral-700 dark:text-neutral-200">
            {book.title}
            </span>{" "}
            {book.description}
          </p>
          
        </div>
      ))}
    </>
  );
};

const data = [
  {
    author: "JM Barrie",
    title: "Peter Pan",
    src: "https://m.media-amazon.com/images/I/A1Y40KXiL6L._AC_UF1000,1000_QL80_.jpg",
    content: <DummyContent />,
  },
  {
    author: "JM Barrie",
    title: "Peter and Wendy",
    src: "https://www.gutenberg.org/cache/epub/26654/pg26654.cover.medium.jpg",
    content: <DummyContent />,
  },
  {
    author: "Arthur Conon Doyle",
    title: "The Lost World",
    src: "https://m.media-amazon.com/images/I/9129a0fOJQL._AC_UF1000,1000_QL80_.jpg",
    content: <DummyContent />,
  },

  {
    author: "Edgar Allen Poe",
    title: "The Raven",
    src: "https://www.gutenberg.org/cache/epub/17192/pg17192.cover.medium.jpg",
    content: <DummyContent />,
  },
  {
    author: "Kenneth Grahame",
    title: "The Wind in the Willows",
    src: "https://www.gutenberg.org/cache/epub/289/pg289.cover.medium.jpg",
    content: <DummyContent />,
  },
  {
    author: "Phillip Jose Farmer",
    title: "The Wounded",
    src: "https://www.gutenberg.org/cache/epub/74219/pg74219.cover.medium.jpg",
    content: <DummyContent />,
  },
];
