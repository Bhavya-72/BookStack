"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";


export function AppleCardsCarouselDemoAutoBio() {
	const cards = books.map((card, index) => (
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


const books = [
  {
    author: "Paramahansa Yoganada",
    title: "Autobiography of a Yogi",
    src: "https://www.gutenberg.org/cache/epub/7452/pg7452.cover.medium.jpg",
    description:"A spiritual classic that details the life of Paramahansa Yogananda, his experiences with his guru, and his journey of spiritual awakening. The book introduces readers to the science of Kriya Yoga and offers insights into Eastern philosophy and spirituality.",
    btnlink:"/autobioofyogi.pdf"
  },
  {
    author: "Benjamin Franklin",
    title: "Autobiography of Benjamin Franklin",
    src: "https://www.gutenberg.org/cache/epub/20203/pg20203.cover.medium.jpg",
    description:"A firsthand account of the life of one of America's Founding Fathers, Benjamin Franklin. The autobiography covers his early life, career, and contributions to the founding of the United States, highlighting his wit, wisdom, and industrious nature.",
    btnlink:"/autobioofbenjamin.pdf"
  },
  {
    author: "Charles Darwin",
    title: "Autobiography of Charles Darwin",
    src: "https://m.media-amazon.com/images/I/61p-AtaIWaL._AC_UF1000,1000_QL80_.jpg",
    description:" In this autobiography, Charles Darwin reflects on his life, from his early education to the development of his groundbreaking theory of evolution. The book offers personal insights into his thoughts, scientific discoveries, and the challenges he faced.",
    btnlink:"/autobioofcharles.pdf"
  },

  {
    author: "Thomas Jefferson",
    title: "Writing of Thomas Jefferson",
    src: "https://m.media-amazon.com/images/I/91651zfqiuL._AC_UF1000,1000_QL80_.jpg",
    description:" A collection of writings from the third President of the United States, Thomas Jefferson. These documents include letters, essays, and public papers that shed light on his political philosophy, views on liberty, and contributions to American democracy.",
    btnlink:"/writingofthomasjefferson.pdf"
  },
  {
    author: "Sir Seymour John Fortescue",
    title: "Looking Back",
    src: "https://m.media-amazon.com/images/I/51KWxRcmi2L.jpg",
    description:"An autobiography by Sir Seymour John Fortescue, reflecting on his life and career as a British naval officer. The book provides a glimpse into the British Navy's history and Fortescue's personal experiences during his service.",
    btnlink:"/lookingback.pdf"
  },
  {
    author: "Mifflin Wistar Gibbs",
    title: "Shadow and Light",
    src: "https://m.media-amazon.com/images/I/61q9KY0BzgL.jpg",
    description:" The autobiography of Mifflin Wistar Gibbs, an African American lawyer, politician, and civil rights advocate. Gibbs chronicles his journey from slavery to becoming a successful businessman and influential political figure in the 19th century.",
    btnlink:"/shadowandlight.pdf"
  },
];
