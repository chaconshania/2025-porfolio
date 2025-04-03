import React from "react";

function SmImageCard({ imageUrl, link, alt }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block transform transition duration-300 hover:scale-105"
    >
      <div className="bg-neutral-100 rounded-lg shadow-lg">
        <img
          src={imageUrl}
          alt={alt}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
    </a>
  );
}

export default SmImageCard;
