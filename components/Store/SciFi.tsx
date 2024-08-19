"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";



export function AppleCardsCarouselDemoSciFi() {
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



const books = [
  {
    author: "Jules Verne",
    title: "Journey to the center of the world",
    src: "https://m.media-amazon.com/images/I/81TR1ssoUIL._AC_UF1000,1000_QL80_.jpg",
    description:"",
    btnlink:"/journeytothecenteroftheearth.pdf"
  },
  {
    author: "Lester Del Rey",
    title: "The life watch",
    src: "https://www.gutenberg.org/cache/epub/74095/pg74095.cover.medium.jpg",
    description:"",
    btnlink:"/thelifewatch.pdf"
  },
  {
    author: "Roger D. Aycock",
    title: "The man who found out",
    src: "https://www.gutenberg.org/cache/epub/74198/pg74198.cover.medium.jpg",
    description:"",
    btnlink:"/themanwhofoundout.pdf"
  },
  {
    author: "H.G Wells",
    title: "The time machine",
    src: "https://www.gutenberg.org/cache/epub/35/pg35.cover.medium.jpg",
    description:"",
    btnlink:"/thetimemachine.pdf"
  },
  {
    author: "H.G Wells",
    title: "The war of worlds",
    src: "https://www.gutenberg.org/cache/epub/36/pg36.cover.medium.jpg",
    description:"",
    btnlink:"/thewarofworld.pdf"
  },
  {
    author: "Evgenii Ivanovich Zamiatin",
    title: "We",
    src: "https://www.gutenberg.org/cache/epub/61963/pg61963.cover.medium.jpg",
    description:"",
    btnlink:"/we.pdf"
  },
];
