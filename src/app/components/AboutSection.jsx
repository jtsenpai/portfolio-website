/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Christ the Redeemer Secondary School, Gbagada, Lagos</li>
        <li>APTECH Computer Education, Victoria Island, Lagos</li>
        <li>Middlesex University, London, UK</li>
      </ul>
    ),
  },
  {
    title: "Certificates",
    id: "certificates",
    content: (
      <ul className="list-disc pl-2">
        <li>Microsoft Office Specialist</li>
        <li>Advanced Diploma in Software Engineering</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white ">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-2 xl-gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about_pic.jpg"
          alt="about picture"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-2xl text-center lg:text-4xl lg:text-left font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-sm lg:text-lg">
            I am a web developer with a focus on bringing engaging and
            user-centric frontend experiences to life. With two years of
            hands-on experience in the dynamic world of web development, I
            specialize in crafting visually stunning and seamlessly functional
            websites. My journey involves working extensively with JavaScript,
            HTML, CSS, and React, where I've had the pleasure of contributing to
            the creation of intuitive and responsive user interfaces. When I'm
            not immersed in the coding world, you'll find me exploring the
            immersive realms of gaming or getting hooked on the latest
            binge-worthy shows and anime.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certificates")}
              active={tab === "certificates"}
            >
              {" "}
              Certificates{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
