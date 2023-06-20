import React from "react";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Project from "./components/Project";

const App = () => (
  <div className="App min-h-screen bg-primary text-secondary">
    <Header />
    <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
      <Presentation />
      <section id="projects">
        <Project
          title="Awedash"
          subtitle="Stack: VueJS, NodeJS, MongoDB"
          description="Awedash started to be developed at 1st of April of 2019. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          videoUrl="https://www.youtube.com/embed/EmjznB9xuo4"
        />
        <Project
          title="Skinsmine"
          subtitle="Stack: Ruby on Rails, jQuery, PostgreSQL"
          description="Skinsmine is a project developed in 2015 with a friend. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          videoUrl="https://www.youtube.com/embed/lxydKaaWu4o"
        />
        {/* Add as many Project components as you have projects, each with their own description and videoUrl props. */}
      </section>
    </main>
  </div>
);

export default App;
