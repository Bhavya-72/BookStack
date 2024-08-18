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
  
];

export function AppleCardsCarouselDemoSciFi() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Best Selling SciFi over the years
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
    author: "Jules Verne",
    title: "Journey to the center of the world",
    src: "https://m.media-amazon.com/images/I/81TR1ssoUIL._AC_UF1000,1000_QL80_.jpg",
    content: <DummyContent />,
  },
  {
    author: "Lester Del Rey",
    title: "The life watch",
    src: "https://www.gutenberg.org/cache/epub/74095/pg74095.cover.medium.jpg",
    content: <DummyContent />,
  },
  {
    author: "Roger D. Aycock",
    title: "The man who found out",
    src: "https://www.gutenberg.org/cache/epub/74198/pg74198.cover.medium.jpg",
    content: <DummyContent />,
  },
  {
    author: "H.G Wells",
    title: "The time machine",
    src: "https://www.gutenberg.org/cache/epub/35/pg35.cover.medium.jpg",
    content: <DummyContent />,
  },
  {
    author: "H.G Wells",
    title: "The war of worlds",
    src: "https://www.gutenberg.org/cache/epub/36/pg36.cover.medium.jpg",
    content: <DummyContent />,
  },
  {
    author: "Evgenii Ivanovich Zamiatin",
    title: "We",
    src: "https://www.gutenberg.org/cache/epub/61963/pg61963.cover.medium.jpg",
    content: <DummyContent />,
  },
];
