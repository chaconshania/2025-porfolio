import React from "react";

function SmVideoCard({ imageUrl, videoSrc, link, alt }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block transform transition duration-300 hover:scale-105"
    >
      <div className="bg-neutral-100 rounded-lg shadow-lg">
        {videoSrc ? (
          <video
            autoPlay
            loop
            muted
            className="w-full h-full object-cover rounded-lg"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src={imageUrl}
            alt={alt}
            className="w-full h-full object-cover rounded-lg"
          />
        )}
      </div>
    </a>
  );
}

export default SmVideoCard;
