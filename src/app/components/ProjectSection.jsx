/* eslint-disable react/jsx-key */
"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Result Summary Component",
    description: "Frontend Mentor Project 1",
    image: "/images/projects/1.png",
    tag: ["All", "React"],
    gitUrl: "https://github.com/jtsenpai/Result-Summary-Component",
    previewUrl: "https://jts-result-summary-component.netlify.app/",
  },
  {
    id: 1,
    title: "Product Preview Card",
    description: "Frontend Mentor Project 2",
    image: "/images/projects/2.png",
    tag: ["All", "HTML"],
    gitUrl: "https://github.com/jtsenpai/product-preview-card",
    previewUrl: "https://product-card-toni.netlify.app/",
  },
  {
    id: 3,
    title: "NFT Preview Card",
    description: "Frontend Mentor Project 3",
    image: "/images/projects/3.png",
    tag: ["All", "HTML"],
    gitUrl: "https://github.com/jtsenpai/NFT-preview-card",
    previewUrl: "https://jtsenpai.github.io/NFT-preview-card/",
  },
  {
    id: 4,
    title: "Order Summary Component",
    description: "Frontend Mentor Project 4",
    image: "/images/projects/4.png",
    tag: ["All", "HTML"],
    gitUrl: "https://github.com/jtsenpai/order-summary",
    previewUrl: "https://jtsenpai-order-summary.netlify.app/",
  },
];

const ProjectSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initials: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" ref={ref}>
      <h2 className="text-2xl text-center lg:text-4xl lg:text-left font-bold text-white mb-4">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="HTML"
          isSelected={tag === "HTML"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="React"
          isSelected={tag === "React"}
        />
      </div>
      <div ref={ref} className="grid md:grid-cols-2 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="list-none"
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              tag={project.tag}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
