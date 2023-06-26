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
      <h1 className="text-2xl font-bold mb-4">Hello!</h1>
      <p className="text-lg leading-relaxed">
        I'm Raphael, a Software Developer based in Copenhagen. My passion is the
        process of developing new products, no matter what. My current side
        project is an{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.sacerdosidle.com/"
        >
          Idle Game
        </a>
        .
      </p>
    </div>
  </section>
);

export default Presentation;
