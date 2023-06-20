import React from "react";

const Presentation: React.FC = () => (
  <section
    id="presentation"
    className="flex flex-col md:flex-row items-center justify-center my-12"
  >
    <img
      src="/profile-pic.png"
      alt="Raphael Parreira"
      className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full mb-4 md:mb-0 md:mr-8"
    />
    <div>
      <h1 className="text-2xl font-bold mb-4">Hello, I'm Raphael</h1>
      <p className="text-lg leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </div>
  </section>
);

export default Presentation;
