import React from "react";

interface ProjectProps {
  title: string;
  subtitle: string;
  description: string;
  videoUrl: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  subtitle,
  description,
  videoUrl,
}) => (
  <div className="my-8 flex flex-col md:flex-row bg-primary p-6 rounded-lg">
    <div className="mb-6 md:mb-0 md:mr-6 md:w-1/2 flex flex-col justify-center">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <h3 className="text-lg mb-4">{subtitle}</h3>
      <p className="text-base leading-relaxed">{description}</p>
    </div>
    <div className="w-full md:w-1/2 flex items-center">
      <div className="aspect-w-16 aspect-h-9 md:h-200 w-full">
        <iframe
          src={videoUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  </div>
);

export default Project;
