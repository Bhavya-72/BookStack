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

export function AppleCardsCarouselDemoNovel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Best Selling Novel over the years
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
    author: "Adeline Sergeant",
    title: "A true Friend",
    src: "https://m.media-amazon.com/images/I/51Z3wy1FikL._AC_UF1000,1000_QL80_.jpg",
    content: <DummyContent />,
  },
  {
    author:"Charles Garvice",
    title: "A woman's Soul",
    src: "https://www.gutenberg.org/cache/epub/74103/pg74103.cover.medium.jpg",
    content: <DummyContent />,
  },
  {
    author: "GK Chesterton",
    title: "Heretics",
    src: "https://www.gutenberg.org/cache/epub/470/pg470.cover.medium.jpg",
    content: <DummyContent />,
  },

  {
    author: "Charles Dickens",
    title: "Pictures from Italy",
    src: "https://m.media-amazon.com/images/I/71v5UTDlOaL._AC_UF894,1000_QL80_.jpg",
    content: <DummyContent />,
  },
  {
    author: "Fyodor Dostoyevsky",
    title: "Short Stories",
    src: "https://www.gutenberg.org/cache/epub/40745/pg40745.cover.medium.jpg",
    content: <DummyContent />,
  },
  {
    author: "L. M. Montgomery",
    title: "The blue castle",
    src: "https://www.gutenberg.org/cache/epub/67979/pg67979.cover.medium.jpg",
    content: <DummyContent />,
  },
];
