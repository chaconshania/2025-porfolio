import React from "react";

function Card() {
  return (
    <div className="card-xl bg-base-100 w-96 m-3 shadow-sm relative rounded-lg">
      <div className="relative">
        <figure>
          <img
            className="rounded-lg"
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>

        <div className="absolute top-4 right-4 flex gap-2">
          <div className="badge  bg-stone-50">Fashion</div>
          <div className="badge  bg-stone-50">Products</div>
        </div>
      </div>

      <div className="card-body">
        <h2 className="card-title">Card Title</h2>
        <p>
          A card component has a figure, a body part, and inside the body, there
          are title and actions parts
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
