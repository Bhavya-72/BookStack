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

export function AppleCardsCarouselDemoFiction() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Best Selling Fiction over the years
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
    author: "Sax Romer",
    title: "Bat wing",
    src: "https://m.media-amazon.com/images/I/41jjx9eZZnL._AC_UF1000,1000_QL80_.jpg",
    content: <DummyContent />,
  },
  {
    author: "E D Hornung",
    title: "Dead man tell no tales",
    src: "https://m.media-amazon.com/images/I/51fqVPkz-BL.jpg",
    content: <DummyContent />,
  },
  {
    author: "E D Hornung",
    title: "Mr Justice Raffles",
    src: "https://m.media-amazon.com/images/I/61og-nof-XL._AC_UF1000,1000_QL80_.jpg",
    content: <DummyContent />,
  },

  {
    author: "H Beam Piper",
    title: "Murder in Gunroom",
    src: "https://m.media-amazon.com/images/I/61CaTph8tNL._AC_UF1000,1000_QL80_.jpg",
    content: <DummyContent />,
  },
  {
    author: "Morris Leblanc",
    title: "The Crystal Stopper",
    src: "https://m.media-amazon.com/images/I/71mjQYjCKnL._AC_UF1000,1000_QL80_.jpg",
    content: <DummyContent />,
  },
  {
    author: "Sax Romer",
    title: "The Devil Doctor",
    src: "https://www.gutenberg.org/cache/epub/19142/pg19142.cover.medium.jpg",
    content: <DummyContent />,
  },
];
