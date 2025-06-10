"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Video from "@/components/Video";
import CustomCursor from "@/components/CustomCursor";
import ProjectInfo from "@/components/ProjectInfo";
import Nextproject from "@/components/Nextproject";
import Highlights from "@/components/Highlights";

const projects = {
  cyclingmanager: {
    nr: "01",
    title: "CYCLING MANAGER",
    info: "Cycling Manager is a full-stack application created to manage your own team and earn as much points as possible in the cycling world. The application allows users to create teams and compete against your friends, providing a comprehensive platform for cycling enthusiasts to engage with the sport.",
    credits: "Bram Geboers, Sander Debroyer, Niels Wellens, Harmanpreeet Singh",
    tech: "NextJS, Typescript, Java, Redux, Springboot, Jsoup, Tailwind CSS, Digital Ocean",
    url: "/videos/media6.mkv",
    highlight1: "Stage per stage results",
    highlight2: "Modern UI with a detailed overview",
    highlight3: "Clean and simple design",
    image3: "/images/cyclingmanager1.png",
    image1: "/images/cyclingmanager2.png",
    image2: "/images/cyclingmanager3.png",
    source: "https://github.com/SanderDebroyer-UCLL/cycling-manager-frontend",
  },
  h2grow: {
    nr: "02",
    title: "H2GROW",
    info: "During a three-week project, we developed H2GROW, an advanced application that automates plant watering, tracks growth statistics, and enhances user interaction with creative 3D elements and gamified features. The goal of H2GROW was to offer an intuitive and efficient plant care solution, while also engaging users through immersive visualizations and a fun, game-like experience.",
    credits:
      "Bram Geboers / Wout Paepen / Davy Bellens / Hugo Rohach / Kylian Van Arkkels / Joren Bex / Gleb Prokopchuk / Bart Arnalsteen",
    tech: "Springboot, ReactJS, ThreeJS, MinIO",
    url: "/videos/media4.mkv",
    highlight1: "Interactive Game",
    highlight2: "Pagination for Overview",
    highlight3: "Admin Console to Manage Users",
    image1: "/images/h2grow1.png",
    image2: "/images/h2grow2.png",
    image3: "/images/h2grow3.png",
    source: "https://github.com/BramGeboers/H2GROW",
  },
  molview: {
    nr: "03",
    title: "MOLVIEW",
    info: "MolView is an advanced web-based application in progress that allows users to visualize and interact with molecular structures in 3D. The application provides a range of tools like mobius transformations to explore and analyze molecules, making it a valuable resource for students, researchers, and professionals in the field of chemistry and biochemistry.",
    credits: "Bram Geboers",
    tech: "NextJS, Typescript, ThreeJS",
    url: "/videos/media5.mkv",
    highlight1: "3D Visualization of Molecules",
    highlight2: "Complex Mobius Transformations",
    highlight3: "Simple and Intuitive Design",
    image1: "/images/molview1.png",
    image2: "/images/molview2.png",
    image3: "/images/molview3.png",
    source: "https://github.com/BramGeboers/visualizationsofmolecules/",
    live: "https://visualizationsofmolecules.vercel.app/",
  },
  tychothoelen: {
    nr: "04",
    title: "TYCHO THOELEN",
    info: "A personal portfolio website was developed for a hobby photographer to showcase their work in a visually appealing and organized manner. The website features a streamlined photo gallery, a biography, and a contact section, balancing aesthetics with user-friendly navigation to facilitate easy viewing and communication.",
    credits: "Bram Geboers / Tycho Thoelen ",
    tech: "React, Node.js, GSAP",
    url: "/videos/media3.mkv",
    highlight1: "Modern Simple Design",
    highlight2: "GSAP Animations",
    highlight3: "Simple Contact Form",
    image1: "/images/tychothoelen1.png",
    image2: "/images/tychothoelen2.png",
    image3: "/images/tychothoelen3.png",
  },
  kevindhond: {
    nr: "05",
    title: "KEVIN DHOND",
    info: "To enhance the online presence of Tuinaanleg Kevin Dhond, a website was created to improve customer engagement. It provides service details, showcases past projects, and features an easy-to-use contact form. The design prioritizes clear navigation and accessibility, ensuring potential customers can quickly find information and connect with the business.",
    credits: "Bram Geboers",
    tech: "React, NextJS, Tailwind CSS",
    url: "/videos/media2.mkv",
    highlight1: "Services showcase",
    highlight2: "Extensive image galery",
    highlight3: "E-mail contact form",
    image1: "/images/kdhond1.png",
    image2: "/images/kdhond2.png",
    image3: "/images/kdhond3.png",
    live: "https://kdhondnext.vercel.app/",
    source: "https://github.com/BramGeboers/kdhondnext/",
  },
};

const ProjectPage = ({ params: { slug } }) => {
  const [isHovering, setIsHovering] = useState(false);
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (slug) {
      const projectData = projects[slug];
      if (projectData) {
        setProject(projectData);
      }
      setLoading(false);
    }
  }, [slug]);

  const handleHeroHoverEnter = () => {
    setIsHovering(true);
  };

  const handleHeroHoverLeave = () => {
    setIsHovering(false);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main className="bg-black">
      <CustomCursor isHovering={isHovering} />
      <Navbar
        pathname={`/cases/${slug}`}
        onHoverEnter={handleHeroHoverEnter}
        onHoverLeave={handleHeroHoverLeave}
      />
      <Video project={project} url={project.url} />
      <ProjectInfo project={project} />
      <Nextproject currentSlug={slug} />
      <Highlights project={project} />
      <Footer />
    </main>
  );
};

export default ProjectPage;
