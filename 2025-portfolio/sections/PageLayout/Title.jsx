import React from "react";

function Title({ heading, subtitle, description }) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 m-4">
        <div className="h-30 flex items-start justify-center flex-col">
          <h1 className=" text-black rounded-lg text-6xl ">{heading}</h1>
        </div>
        <div className="">
          <p>{}</p>
        </div>
        <div className="w-full text-black p-4 rounded-lg h-30 flex  items-center justify-center">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Title;
