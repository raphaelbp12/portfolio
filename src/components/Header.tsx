import React from "react";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

const Header: React.FC = () => {
  return (
    <header className="fixed w-full bg-primary z-10 shadow">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center flex-shrink-0">
          <a
            className="text-sm font-semibold text-secondary lg:mx-4"
            href="#presentation"
          >
            Presentation
          </a>
          <a
            className="text-sm font-semibold text-secondary lg:mx-4"
            href="#projects"
          >
            Projects
          </a>
        </div>
        <div className="flex items-center">
          <a
            href="https://www.linkedin.com/in/raphael-parreira-911a04103/"
            className="text-secondary mx-2 lg:mx-4 flex items-center"
          >
            <AiOutlineLinkedin className="text-2xl" />
            <span className="ml-2 hidden lg:inline">LinkedIn</span>
          </a>
          <a
            href="https://github.com/raphaelbp12"
            className="text-secondary mx-2 lg:mx-4 flex items-center"
          >
            <AiOutlineGithub className="text-2xl" />
            <span className="ml-2 hidden lg:inline">GitHub</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
