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

export function AppleCardsCarouselDemoMystry() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Best Selling Mystry over the years
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
    author: "Arthur Conon Doyle",
    title: "A study in scarlet",
    src: "https://www.gutenberg.org/cache/epub/244/pg244.cover.medium.jpg",
    content: <DummyContent />,
  },
  {
    author: "Bram Stoker",
    title: "Dracula",
    src: "https://www.gutenberg.org/cache/epub/345/pg345.cover.medium.jpg",
    content: <DummyContent />,
  },
  {
    author: "Agatha Christie",
    title: "Poirot Investigates",
    src: "https://www.gutenberg.org/cache/epub/61262/pg61262.cover.medium.jpg",
    content: <DummyContent />,
  },

  {
    author: "Agatha Christie",
    title: "The man in the Brown Suit",
    src: "https://www.gutenberg.org/cache/epub/61168/pg61168.cover.medium.jpg",
    content: <DummyContent />,
  },
  {
    author: "Agatha Christie",
    title: "The Murder on the links",
    src: "https://www.gutenberg.org/cache/epub/58866/pg58866.cover.medium.jpg",
    content: <DummyContent />,
  },
  {
    author: "Arthur Conon Doyle",
    title: "The Return of Sherlock Holmes",
    src: "https://www.gutenberg.org/cache/epub/108/pg108.cover.medium.jpg",
    content: <DummyContent />,
  },
];
