import React from "react";

const Header = () => (
  <header className="fixed w-full bg-gray-800 z-10 shadow">
    <nav className="container mx-auto px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="text-xl font-semibold text-white">
          <a className="text-white lg:mx-4" href="#presentation">
            Presentation
          </a>
          <a className="text-white lg:mx-4" href="#projects">
            Projects
          </a>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
