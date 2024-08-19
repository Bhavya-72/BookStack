"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { title } from "process";


export function AppleCardsCarouselDemoMystry() {
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
    author: "Arthur Conon Doyle",
    title: "A study in scarlet",
    src: "https://www.gutenberg.org/cache/epub/244/pg244.cover.medium.jpg",
    description:"The first novel introducing Sherlock Holmes and Dr. John Watson. The story begins with a mysterious murder in London, leading Holmes to unravel a complex tale of love, revenge, and intrigue across two continents.",
    btnlink:"/astudyinscarlet.pdf"
  },
  {
    author: "Bram Stoker",
    title: "Dracula",
    src: "https://www.gutenberg.org/cache/epub/345/pg345.cover.medium.jpg",
    description:"A Gothic horror classic that tells the story of Count Dracula's attempt to move from Transylvania to England to spread the undead curse. The novel is an epistolary work, narrated through letters, diary entries, and newspaper articles.",
    btnlink:"/dracula.pdf"
  },
  {
    author: "Agatha Christie",
    title: "Poirot Investigates",
    src: "https://www.gutenberg.org/cache/epub/61262/pg61262.cover.medium.jpg",
    description:"A collection of short stories featuring the brilliant Belgian detective, Hercule Poirot. Each story presents a new mystery, showcasing Poirot's methodical and logical approach to solving crimes.",
    btnlink:"/poirotinvestigates.pdf"
  },

  {
    author: "Agatha Christie",
    title: "The man in the Brown Suit",
    src: "https://www.gutenberg.org/cache/epub/61168/pg61168.cover.medium.jpg",
    description:" A gripping mystery novel where a young woman, Anne Beddingfeld, stumbles upon a murder and becomes embroiled in a web of international intrigue and danger, all linked to a mysterious man in a brown suit.",
    btnlink:"/maninbrownsuit.pdf"
  },
  {
    author: "Agatha Christie",
    title: "The Murder on the links",
    src: "https://www.gutenberg.org/cache/epub/58866/pg58866.cover.medium.jpg",
    description:"In this Hercule Poirot mystery, the detective is called to France to solve the murder of a wealthy businessman. The case involves a complex web of lies, deceit, and secret identities, challenging Poirot’s deductive skills.",
    btnlink:"/murderonthelinks.pdf"
  },
  {
    author: "Arthur Conon Doyle",
    title: "The Return of Sherlock Holmes",
    src: "https://www.gutenberg.org/cache/epub/108/pg108.cover.medium.jpg",
    description:" A collection of thirteen detective stories that mark the return of Sherlock Holmes after his apparent death. The stories include some of Holmes' most famous cases, such as 'The Adventure of the Empty House' and 'The Adventure of the Dancing Men.'",
    btnlink:"/returnofsherlock.pdf"
  },
];
