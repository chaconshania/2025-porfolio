import React from "react";

function LayoutGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4 m-4">
      <div className="bg-neutral-100 lg:row-span-2">1</div>
      <div className="bg-neutral-100 lg:row-span-3">2</div>
      <div className="bg-neutral-100 lg:row-span-2">3</div>
      <div className="bg-neutral-100 lg:row-span-2 lg:row-start-3">4</div>
      <div className="bg-neutral-100 lg:row-span-3 lg:col-start-2 lg:row-start-4">
        5
      </div>
      <div className="bg-neutral-100 lg:row-span-2 lg:col-start-3 lg:row-start-3">
        6
      </div>
      <div className="bg-neutral-100 lg:row-span-2 lg:row-start-5">7</div>
      <div className="bg-neutral-100 lg:row-span-2 lg:col-start-3 lg:row-start-5">
        8
      </div>
    </div>
  );
}

export default LayoutGrid;
