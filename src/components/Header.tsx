import React from "react";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full z-10 shadow bg-secondary text-primary">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center flex-shrink-0">
          <a className="text-sm font-semibold lg:mx-4" href="#presentation">
            About
          </a>
          <a className="text-sm font-semibold mx-4 lg:mx-4" href="#projects">
            Projects
          </a>
        </div>
        <div className="flex items-center">
          <a
            rel="noreferrer"
            href="/cv-jun-2023.pdf"
            target="_blank"
            className="mx-2 lg:mx-4 flex items-center"
          >
            <span className="ml-2">Career</span>
          </a>
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/raphael-parreira-911a04103/"
            target="_blank"
            className="mx-2 lg:mx-4 flex items-center"
          >
            <AiOutlineLinkedin className="text-2xl" />
            <span className="ml-2 hidden lg:inline">LinkedIn</span>
          </a>
          <a
            rel="noreferrer"
            href="https://github.com/raphaelbp12"
            target="_blank"
            className="mx-2 lg:mx-4 flex items-center"
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
