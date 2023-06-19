import React from "react";

interface ProjectProps {
  description: string;
  videoUrl: string;
}

const Project: React.FC<ProjectProps> = ({ description, videoUrl }) => (
  <div className="my-8 text-secondary bg-primary">
    <p className="text-lg leading-relaxed mb-4">{description}</p>
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        src={videoUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>
);

export default Project;
