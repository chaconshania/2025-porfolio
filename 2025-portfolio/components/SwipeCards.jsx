import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const SwipeCards = () => {
  const [cards, setCards] = useState(cardData);

  return (
    <div
      className="flex w-full flex-wrap"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke-width='2' stroke='%23d4d4d4'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
      }}
    >
      <div className="lg:w-1/2 sm:full lg:p-20 flex flex-wrap flex-col justify-center ">
        <div className="bg-gray-50 p-20 rounded-lg">
          <h1 className="text-7xl font-bold ">Hello, I'm Shania!</h1>
          <p className="mt-2 text-gray-600">
            Hey there! I'm a digital media and design student passionate about
            UI/UX and web development. I enjoy creating clean, interactive
            experiences.
          </p>
          <p className="mt-4 text-gray-600">
            I love working on projects that merge creativity and technology.
          </p>
        </div>
      </div>
      <div className="lg:w-1/2 sm:w-full flex  justify-center items-center relative ">
        <div className="relative w-[300px] h-[400px] m-10">
          {cards.map((card, index) => (
            <Card
              key={card.id}
              cards={cards}
              setCards={setCards}
              {...card}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Card = ({ id, url, setCards, cards, index }) => {
  const x = useMotionValue(0);
  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  const isFront = id === cards[cards.length - 1].id;

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : index * -2;
    return `${rotateRaw.get() + offset}deg`;
  });

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 100) {
      setCards((prev) => prev.filter((v) => v.id !== id));
    }
  };

  return (
    <motion.img
      src={url}
      alt="Placeholder alt"
      className="absolute top-0 left-0 h-96 w-72 rounded-lg bg-white object-cover hover:cursor-grab active:cursor-grabbing"
      style={{
        x,
        opacity,
        rotate,
        transition: "0.125s transform",
        boxShadow: isFront
          ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
          : "0px 10px 15px rgba(0, 0, 0, 0.3)",
      }}
      animate={{
        scale: isFront ? 1 : 0.98,
      }}
      drag={isFront ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      onDragEnd={handleDragEnd}
    />
  );
};

const cardData = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2370&auto=format&fit=crop",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b?q=80&w=2235&auto=format&fit=crop",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1539185441755-769473a23570?q=80&w=2342&auto=format&fit=crop",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?q=80&w=2224&auto=format&fit=crop",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?q=80&w=2340&auto=format&fit=crop",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1570464197285-9949814674a7?q=80&w=2273&auto=format&fit=crop",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1578608712688-36b5be8823dc?q=80&w=2187&auto=format&fit=crop",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1505784045224-1247b2b29cf3?q=80&w=2340&auto=format&fit=crop",
  },
];

export default SwipeCards;
