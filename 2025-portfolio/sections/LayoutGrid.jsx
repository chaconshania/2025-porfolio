import React from "react";
import SmVideoCard from "../components/Cards/SmVideoCard";
import LgVideoCard from "../components/Cards/LgVideoCard";
import SmImageCard from "../components/Cards/SmImageCard";
import { motion } from "motion/react";

function LayoutGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 m-4">
      <div className="bg-neutral-100 lg:row-span-2 rounded-lg">
        <SmVideoCard
          videoSrc="../src/assets/Videos/Lifedes_mockup.mp4"
          link=""
          alt="Local Video"
        />
      </div>
      <div className="bg-neutral-100 lg:row-span-3 rounded-lg">
        <LgVideoCard
          videoSrc="../src/assets/Videos/OasisXR_mockup.mp4"
          link=""
          alt="Local Video"
        />
      </div>
      <div className="bg-neutral-100 lg:row-span-2 rounded-lg ">3</div>
      <div className="bg-neutral-100 lg:row-span-2 lg:row-start-3 rounded-lg">
        <SmVideoCard
          videoSrc="../src/assets/Videos/FitMix_mockup.mp4"
          link=""
          alt="Local Video"
        />
      </div>
      <div className="bg-neutral-100 lg:row-span-3 lg:col-start-2 lg:row-start-4 rounded-lg">
        <LgVideoCard
          videoSrc="../src/assets/Videos/OasisXR_mockup.mp4"
          link=""
          alt="Local Video"
        />
      </div>
      <div className="bg-neutral-100 lg:row-span-2 lg:col-start-3 lg:row-start-3 rounded-lg">
        6
      </div>
      <div className="bg-neutral-100 lg:row-span-2 lg:row-start-5 rounded-lg">
        <SmVideoCard
          videoSrc="../src/assets/Videos/FitMix_mockup.mp4"
          link=""
          alt="Local Video"
        />
      </div>
      <div className="bg-neutral-100 lg:row-span-2 lg:col-start-3 lg:row-start-5 rounded-lg">
        8
      </div>
    </div>
  );
}

export default LayoutGrid;
