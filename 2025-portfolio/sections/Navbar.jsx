import React from "react";

function Navbar() {
  return (
    <div>
      <div>
        <div className="grid lg:grid-cols-3 m-4 grid-cols-3">
          <div className="h-30 flex items-start justify-center flex-col">
            <img src="../src/assets/Images/Logo.png" alt="" className="h-20" />
          </div>
          <div className="">
            <p></p>
          </div>
          <div className="w-full text-black p-4 rounded-lg h-30 flex items-center gap-10 justify-end">
            <a>About</a>
            <a>Resume</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
