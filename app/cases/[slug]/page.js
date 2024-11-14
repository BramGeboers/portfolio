"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Video from '@/components/Video';
import CustomCursor from '@/components/CustomCursor';
import ProjectInfo from '@/components/ProjectInfo';
import Nextproject from '@/components/Nextproject';
import Highlights from '@/components/Highlights';
import { m } from 'framer-motion';

const projects = {
  car4rent: {
    nr: "01",
    title: "CAR4RENT",
    info: "During our semester-long group project, we developed Car4Rent, a full-stack application aimed at creating a seamless platform for users to rent and rent out cars. The goal of the application was to deliver a user-friendly service that balanced functionality with a clean, intuitive interface.",
    credits: "Bram Geboers / Loveleen Sidhu / Axel Jacobs / Torben Ombelets / Wout Paepen / Rein Van Wanseele",
    tech: "Next.js, Springboot, Azure, SocketIO",
    url: "/videos/Media1_2.mp4",
    highlight1: "Chatbot Integration",
    highlight2: "Interactive Car Selection",
    highlight3: "Automatic Invoice Generation",
    image1: "/images/car4rent1.png",
    image2: "/images/car4rent2.png",
    image3: "/images/car4rent3.png",
  },
  tychothoelen:{
    nr: "02",
    title: "TYCHO THOELEN",
    info: "A personal portfolio website was developed for a hobby photographer to showcase their work in a visually appealing and organized manner. The website features a streamlined photo gallery, a biography, and a contact section, balancing aesthetics with user-friendly navigation to facilitate easy viewing and communication.",
    credits: "Bram Geboers / Tycho Thoelen ",
    tech: "React, Node.js, GSAP",
    url: "/videos/media3.mkv", 
    image1: "/images/tychothoelen1.jpg",
    image2: "/images/tychothoelen2.jpg",
    image3: "/images/tychothoelen3.jpg"
  },
  kevindhond: {
    nr: "03",
    title: "KEVIN DHOND",
    info: "To enhance the online presence of Tuinaanleg Kevin Dhond, a website was created to improve customer engagement. It provides service details, showcases past projects, and features an easy-to-use contact form. The design prioritizes clear navigation and accessibility, ensuring potential customers can quickly find information and connect with the business.",
    credits: "Bram Geboers",
    tech: "React, NextJS, Tailwind CSS",
    url: "/videos/media2.mkv",
    image1: "/images/kevindhond1.jpg",
    image2: "/images/kevindhond2.jpg",
    image3: "/images/kevindhond3.jpg",
    live: "https://kdhondnext.vercel.app/"
  },
  h2grow: {
    nr: "04",
    title: "H2GROW",
    info: "During a three-week project, we developed H2GROW, an advanced application that automates plant watering, tracks growth statistics, and enhances user interaction with creative 3D elements and gamified features. The goal of H2GROW was to offer an intuitive and efficient plant care solution, while also engaging users through immersive visualizations and a fun, game-like experience.",
    credits: "Wout Bosteels / Mathias Clement / Niels Wellens / Bram Geboers",
    tech: "Springboot, ReactJS, ThreeJS, MinIO",
    url: "/videos/media4.mkv",
    image1: "/images/h2grow1.jpg", 
    image2: "/images/h2grow2.jpg",
    image3: "/images/h2grow3.jpg",
    source: "https://github.com/IT-Integratieproject/itip-groep19"
  }
};

const ProjectPage = ({params: {slug}}) => {

  const [isHovering, setIsHovering] = useState(false);
  const [loading, setLoading] = useState(true);
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (slug) {
      console.log('Slug:', slug);
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
    <main className='bg-black'>
      <CustomCursor isHovering={isHovering} />
      <Navbar pathname={`/cases/${slug}`} onHoverEnter={handleHeroHoverEnter} onHoverLeave={handleHeroHoverLeave} />
      <Video project={project} url={project.url} />
      <ProjectInfo project={project} />
      <Nextproject currentSlug={slug} />
      <Highlights project={project} />
      <Footer />
    </main>
  );
};

export default ProjectPage;