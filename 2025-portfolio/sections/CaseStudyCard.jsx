import React from "react";

function CaseStudyCard() {
  return (
    <div className="flex justify-center items-center bg-gray-100">
      <div className="flex h-dvh flex-col md:flex-row items-center justify-center mt-20 p-6 md:p-20 bg-amber-300 rounded-3xl">
        <div className="lg:w-1/4 sm:w-1/2">
          <img
            src={""}
            alt="Example"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-3/4 md:w-1/2 mt-6 md:mt-0 md:pl-8 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Responsive Image & Text Layout
          </h2>
          <p className=" text-gray-600">
            This is a simple example of a responsive layout with an image on the
            left and text on the right. Resize your screen to see it in action!
          </p>
        </div>
      </div>
    </div>
  );
}

export default CaseStudyCard;
