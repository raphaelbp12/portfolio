import React from "react";

const Presentation = () => (
  <section
    id="presentation"
    className="flex items-center justify-center h-screen bg-gray-800 text-white"
  >
    <div className="flex-1 p-10">
      <img
        src="path_to_your_image"
        alt="Your Name"
        className="h-full w-full object-cover"
      />
    </div>
    <div className="flex-1 p-10">
      <p className="text-lg leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    </div>
  </section>
);

export default Presentation;
