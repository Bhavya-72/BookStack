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

export function AppleCardsCarouselDemoAutoBio() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Best Selling AutoBio over the years
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
    author: "Paramahansa Yoganada",
    title: "Autobiography of a Yogi",
    src: "https://www.gutenberg.org/cache/epub/7452/pg7452.cover.medium.jpg",
    content: <DummyContent />,
    description:""
  },
  {
    author: "Benjamin Franklin",
    title: "Autobiography of Benjamin Franklin",
    src: "https://www.gutenberg.org/cache/epub/20203/pg20203.cover.medium.jpg",
    content: <DummyContent />,
  },
  {
    author: "Charles Darwin",
    title: "Autobiography of Charles Darwin",
    src: "https://m.media-amazon.com/images/I/61p-AtaIWaL._AC_UF1000,1000_QL80_.jpg",
    content: <DummyContent />,
  },

  {
    author: "Thomas Jefferson",
    title: "Writing of Thomas Jefferson",
    src: "https://m.media-amazon.com/images/I/91651zfqiuL._AC_UF1000,1000_QL80_.jpg",
    content: <DummyContent />,
  },
  {
    author: "Sir Seymour John Fortescue",
    title: "Looking Back",
    src: "https://m.media-amazon.com/images/I/51KWxRcmi2L.jpg",
    content: <DummyContent />,
  },
  {
    author: "Mifflin Wistar Gibbs",
    title: "Shadow and Light",
    src: "https://m.media-amazon.com/images/I/61q9KY0BzgL.jpg",
    content: <DummyContent />,
  },
];
