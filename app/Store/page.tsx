import React from "react";
import { AppleCardsCarouselDemoFantasy } from "@/components/Store/Fantasy";
import { AppleCardsCarouselDemoNovel } from "@/components/Store/Novel";
import { AppleCardsCarouselDemoSciFi } from "@/components/Store/SciFi";
import { AppleCardsCarouselDemoAutoBio } from "@/components/Store/AutoBio";
import { AppleCardsCarouselDemoMystry } from "@/components/Store/Mystry";
import { AppleCardsCarouselDemoFiction } from "@/components/Store/Fiction";
const page = () => {
  return (
    <div>
      <div id="fiction" className="min-h-screen">
        <AppleCardsCarouselDemoFiction />
      </div>
      <div id="scifi" className="min-h-screen">
        <AppleCardsCarouselDemoSciFi />
      </div>
      <div id="mystry" className="min-h-screen">
        <AppleCardsCarouselDemoMystry />
      </div>
      <div id="fantasy" className="min-h-screen">
        <AppleCardsCarouselDemoFantasy />
      </div>
      <div id="novel" className="min-h-screen">
        <AppleCardsCarouselDemoNovel />
      </div>
      <div id="autobio" className="min-h-screen">
        <AppleCardsCarouselDemoAutoBio />
      </div>
    </div>
  );
};

export default page;
