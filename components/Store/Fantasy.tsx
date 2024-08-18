"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import qrcode from "@/assets/qrcode.png";

// const books = [
//   {
//     title: "Takeshi Castle",
//     description:
//       "",
//     price: 20,
//   },

// ];

export function AppleCardsCarouselDemoFantasy() {
  const cards = books.map((card, index) => (
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
    <div className="bg-[#F5F5F7] flex flex-col-reverse md:flex-row dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <div className="flex flex-col justify-center items-center gap-5">
        <Image className="rounded-3xl" src={qrcode} alt="qrcode" />
        <h3 className="text-xl font-medium text-center">Donate Above</h3>
      </div>
     {
      books.map(() =>{
        return(
          <div>
            <h1>hello</h1>
          </div>
        )
      })
     }
    </div>
  );
};

const books = [
  {
    id: 0,
    author: "JM Barrie",
    title: "Peter Pan",
    src: "https://m.media-amazon.com/images/I/A1Y40KXiL6L._AC_UF1000,1000_QL80_.jpg",
    content: <DummyContent />,
    description:
      "The timeless tale of a boy who never grows up, Peter Pan takes Wendy, John, and Michael Darling on an unforgettable adventure to Neverland, where they encounter fairies, pirates, and the lost boys. Full of magic, whimsy, and themes of innocence, this story has captured the imagination of readers for generations.",
  },
  {
    id: 1,
    author: "JM Barrie",
    title: "Peter and Wendy",
    src: "https://www.gutenberg.org/cache/epub/26654/pg26654.cover.medium.jpg",
    content: <DummyContent />,
    description:
      "A novelized version of Barrie’s play Peter Pan, Peter and Wendy further explores the adventures of Peter Pan, Wendy Darling, and the boys in Neverland. This story delves into themes of youth, fantasy, and the bittersweet nature of growing up.",
  },
  {
    id: 2,
    author: "Arthur Conon Doyle",
    title: "The Lost World",
    src: "https://m.media-amazon.com/images/I/9129a0fOJQL._AC_UF1000,1000_QL80_.jpg",
    content: <DummyContent />,
    description:
      " In this thrilling adventure, Professor Challenger leads an expedition to a remote plateau in the Amazon where prehistoric creatures still roam. Filled with dinosaurs, danger, and discovery, The Lost World is a landmark in science fiction and adventure literature.",
  },

  {
    id: 3,
    author: "Edgar Allen Poe",
    title: "The Raven",
    src: "https://www.gutenberg.org/cache/epub/17192/pg17192.cover.medium.jpg",
    content: <DummyContent />,
    description:
      "One of Poe's most famous poems, The Raven tells the haunting story of a man tormented by a mysterious raven who speaks only the word 'Nevermore'. The poem explores themes of grief, loss, and madness, set against the backdrop of a melancholic atmosphere.",
  },
  {
    id: 4,
    author: "Kenneth Grahame",
    title: "The Wind in the Willows",
    src: "https://www.gutenberg.org/cache/epub/289/pg289.cover.medium.jpg",
    content: <DummyContent />,
    description:
      ": A classic of children’s literature, The Wind in the Willows follows the adventures of Mole, Ratty, Badger, and the impulsive Mr. Toad. Set in the English countryside, this tale is filled with themes of friendship, nature, and the changing seasons.",
  },
  {
    id: 5,
    author: "Phillip Jose Farmer",
    title: "The Wounded",
    src: "https://www.gutenberg.org/cache/epub/74219/pg74219.cover.medium.jpg",
    content: <DummyContent />,
    description:
      "This science fiction novella by Phillip Jose Farmer explores the conflict between man and machine, delving into themes of identity, survival, and the human condition. The Wounded is a thought-provoking narrative that questions the boundaries of humanity.",
  },
];
