import React from "react";
import { AiOutlineGithub } from "react-icons/ai";

interface ProjectProps {
  title: string;
  subtitle: string;
  description: string;
  sourceUrl?: string;
  liveUrl?: string;
  videoUrl?: string;
  imageUrl?: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  subtitle,
  description,
  sourceUrl,
  liveUrl,
  videoUrl,
  imageUrl,
}) => (
  <div className="my-8 flex flex-col md:flex-row bg-primary p-6 rounded-lg">
    <div className="md:mb-0 md:mr-6 md:w-1/2 flex flex-col justify-center">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <h3 className="text-lg">{subtitle}</h3>
      {sourceUrl || liveUrl ? (
        <p className="text-sm mt-1">
          {sourceUrl ? (
            <>
              Source:
              <a
                href={sourceUrl}
                rel="noreferrer"
                target="_blank"
                className="ml-1"
              >
                <AiOutlineGithub className="text-2xl inline-block" />
                Github
              </a>
            </>
          ) : null}
          {liveUrl ? (
            <>
              Link:
              <a
                href={liveUrl}
                rel="noreferrer"
                target="_blank"
                className="ml-1"
              >
                Live demo
              </a>
            </>
          ) : null}
        </p>
      ) : null}
      <p className="text-base leading-relaxed mt-2">{description}</p>
    </div>
    {videoUrl || imageUrl ? (
      <div className="w-full md:w-1/2 flex items-center mt-4 md:mt-0">
        <div className="md:h-200 w-full max-h-48">
          {videoUrl ? (
            <iframe
              src={videoUrl}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : null}

          {imageUrl ? (
            <div className="w-full max-h-48">
              <img
                src={imageUrl}
                alt="Sacerdos Idle Presentation"
                className="object-contain max-h-48"
              />
            </div>
          ) : null}
        </div>
      </div>
    ) : null}
  </div>
);

export default Project;
