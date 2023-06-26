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
        <h1 className="text-2xl font-bold mb-4">Personal Projects</h1>
        <Project
          title="Sacerdos Idle Game"
          subtitle="Stack: ReactJS, Tailwind, Typescript, .Net Core, PostgreSQL"
          description="I needed to improve my skills on .Net Core. Because of that, I started to create this game. It was a way of having fun and developing myself simultaneously. Then, I got passionate about the project and kept growing it. Check it live."
          imageUrl="/sacerdos.png"
          liveUrl="https://www.sacerdosidle.com/"
        />
        <Project
          title="This Portfolio"
          subtitle="Stack: ReactJS, Tailwind, Typescript"
          description="This app was a fun activity to explore more about the ChatGPT power. In this project, I acted as a Product Owner and had the GPT as the programmer. It worked flawlessly; a great experience. This is an open-source project, and anyone can copy and modify it."
          sourceUrl="https://github.com/raphaelbp12/portfolio"
        />
        <Project
          title="Awedash"
          subtitle="Stack: VueJS, NodeJS, MongoDB"
          description="Awedash started to be developed in April 2019. This project heavily uses external APIs (Youtube, Twitter, Instagram, Facebook, etc.). Since it is not live anymore, I made a quick video so that you can check what it was about."
          videoUrl="https://www.youtube.com/embed/EmjznB9xuo4"
        />
        <Project
          title="Skinsmine"
          subtitle="Stack: Ruby on Rails, jQuery, PostgreSQL"
          description="Skinsmine is a project developed in 2015 with a friend. It was a Counter-Strike betting website, where you could bet items earned in-game. For that, it had a heavy usage of Steam API. You can watch the video where I show the project."
          videoUrl="https://www.youtube.com/embed/lxydKaaWu4o"
        />
        {/* Add as many Project components as you have projects, each with their own description and videoUrl props. */}
      </section>
    </main>
  </div>
);

export default App;
