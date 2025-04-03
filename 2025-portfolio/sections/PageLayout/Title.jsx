import React from "react";

function Title({ heading, description }) {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mx-4">
        <div className="w-full text-black p-4 rounded-lg text-7xl">
          <h1>{heading}</h1>
        </div>
        <div className="w-full  text-black p-4 rounded-lg ">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default Title;
