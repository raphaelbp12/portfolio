import React from "react";

const Presentation: React.FC = () => {
  return (
    <section
      className="bg-secondary text-primary flex flex-col md:flex-row justify-center items-center py-20 md:py-36"
      id="presentation"
    >
      <img
        className="w-48 h-48 md:w-72 md:h-auto rounded-full mx-auto md:mx-0 md:mr-6"
        src="/profile-pic.png"
        alt="Your Profile"
      />
      <div className="text-center md:text-left mt-12 md:mt-0">
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">
          Hello, I'm John Doe!
        </h1>
        <p className="text-xl lg:text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi congue
          feugiat elit vitae dapibus. Quisque aliquet ex id ex commodo, nec
          lacinia est blandit.
        </p>
      </div>
    </section>
  );
};

export default Presentation;
