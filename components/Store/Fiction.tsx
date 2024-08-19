"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";





export function AppleCardsCarouselDemoFiction() {
	const cards = books.map((card, index) => (
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

const books = [
  {
    author: "Sax Romer",
    title: "Bat wing",
    src: "https://m.media-amazon.com/images/I/41jjx9eZZnL._AC_UF1000,1000_QL80_.jpg",
    description:"A thrilling mystery novel featuring detective Paul Harley. The story revolves around a bizarre murder case involving voodoo practices, eerie settings, and a chilling atmosphere that keeps readers on edge.",
    btnlink:"/batwing.pdf"
  },
  {
    author: "E W Hornung",
    title: "Dead man tell no tales",
    src: "https://m.media-amazon.com/images/I/51fqVPkz-BL.jpg",
    description:"A suspenseful tale of adventure and intrigue on the high seas. The story follows a survivor of a shipwreck who uncovers a sinister plot involving treasure and treachery, leading to a thrilling chase for survival.",
    btnlink:"/deadmantellnotales.pdf"
  },
  {
    author: "E W Hornung",
    title: "Mr Justice Raffles",
    src: "https://m.media-amazon.com/images/I/61og-nof-XL._AC_UF1000,1000_QL80_.jpg",
    description:" A classic crime novel featuring A. J. Raffles, the gentleman thief. In this installment, Raffles turns detective to solve a murder case, blurring the lines between criminal and hero as he navigates a web of deception.",
    btnlink:"/mrjusticeraffles.pdf"
  },

  {
    author: "H Beam Piper",
    title: "Murder in Gunroom",
    src: "https://m.media-amazon.com/images/I/61CaTph8tNL._AC_UF1000,1000_QL80_.jpg",
    description:"A detective novel set in the world of antique gun collecting. When a murder occurs among a group of collectors, detective Jefferson Davis Rand is called in to unravel the mystery, uncovering hidden motives and dark secrets.",
    btnlink:"/murderingunroom.pdf"
  },
  {
    author: "Morris Leblanc",
    title: "The Crystal Stopper",
    src: "https://m.media-amazon.com/images/I/71mjQYjCKnL._AC_UF1000,1000_QL80_.jpg",
    description:"A captivating Arsène Lupin adventure, where the master thief must recover a crucial piece of evidence, the Crystal Stopper, to save an innocent man from execution. Lupin faces formidable adversaries as he races against time.",
    btnlink:"/thecrystalstopper.pdf"
  },
  {
    author: "Sax Romer",
    title: "The Devil Doctor",
    src: "https://www.gutenberg.org/cache/epub/19142/pg19142.cover.medium.jpg",
    description:"The second novel in the Fu Manchu series, where the diabolical Dr. Fu Manchu plots to overthrow Western civilization. His sinister schemes are matched against the relentless pursuit of Nayland Smith and Dr. Petrie.",
    btnlink:"/thedevildoctor.pdf"
  },
];
