"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { title } from "process";


export function AppleCardsCarouselDemoNovel() {
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
    author: "Adeline Sergeant",
    title: "A true Friend",
    src: "https://m.media-amazon.com/images/I/51Z3wy1FikL._AC_UF1000,1000_QL80_.jpg",
    description:" A heartwarming novel exploring the themes of friendship, loyalty, and sacrifice. The story delves into the complexities of human relationships and the impact of true friendship in times of adversity.",
    btnlink:"/atruefriend.pdf"
  },
  {
    author:"Charles Garvice",
    title: "A woman's Soul",
    src: "https://www.gutenberg.org/cache/epub/74103/pg74103.cover.medium.jpg",
    description:"A romantic drama that captures the emotional struggles of a woman torn between love and duty. The novel reflects the societal expectations placed on women and their quest for independence and fulfillment.",
    btnlink:"/awaomansoul's.pdf"
  },
  {
    author: "GK Chesterton",
    title: "Heretics",
    src: "https://www.gutenberg.org/cache/epub/470/pg470.cover.medium.jpg",
    description:" A collection of essays in which Chesterton critiques various modern philosophies and thinkers of his time. With wit and insight, he defends traditional Christian beliefs against what he considers the 'heresies' of contemporary thought.",
    btnlink:"/heretics.pdf"
  },

  {
    author: "Charles Dickens",
    title: "Pictures from Italy",
    src: "https://m.media-amazon.com/images/I/71v5UTDlOaL._AC_UF894,1000_QL80_.jpg",
    description:" A travelogue by Charles Dickens, documenting his journey through Italy. The book offers vivid descriptions of the country’s landscapes, cities, and cultural life, reflecting Dickens' observations and experiences.",
    btnlink:"/picturesfromitaly.pdf"
  },
  {
    author: "Fyodor Dostoyevsky",
    title: "Short Stories",
    src: "https://www.gutenberg.org/cache/epub/40745/pg40745.cover.medium.jpg",
    description:"A collection of compelling short stories by Dostoyevsky, exploring themes of morality, human suffering, and the complexities of the Russian soul. These stories showcase his deep psychological insight and narrative skill.",
    btnlink:"/shortstories.pdf"
  },
  {
    author: "L. M. Montgomery",
    title: "The blue castle",
    src: "https://www.gutenberg.org/cache/epub/67979/pg67979.cover.medium.jpg",
    description:" A romantic novel set in early 20th-century Canada, following the life of Valancy Stirling. Trapped in a stifling existence, Valancy takes a bold step to seek happiness, leading to unexpected adventures and self-discovery.",
    btnlink:"/thebluecastle.pdf"
  },
];
