import React from "react";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import Project from "./components/Project";

const App = () => (
  <div className="App bg-gray-800 text-white min-h-screen">
    <Header />
    <main>
      <Presentation />
      <section id="projects" className="container mx-auto px-6 py-3">
        <Project
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          videoUrl="https://www.youtube.com/embed/your-video-id"
        />
        {/* Add as many Project components as you have projects, each with their own description and videoUrl props. */}
      </section>
    </main>
  </div>
);

export default App;
