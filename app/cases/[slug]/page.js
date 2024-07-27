"use client";

import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Video from '@/components/Video';
import CustomCursor from '@/components/CustomCursor';
import ProjectInfo from '@/components/ProjectInfo';
import Nextproject from '@/components/Nextproject';

const projects = {
  car4rent: { nr: "01", title: "CAR4RENT", info: "During our semester-long group project, we developed Car4Rent, a full-stack application aimed at creating a seamless platform for users to rent and rent out cars. The goal of the application was to deliver a user-friendly service that balanced functionality with a clean, intuitive interface.", requirements: "Requirements for Car4Rent", challenges: "Challenges for Car4Rent", credits: "Rein Van Wanseele / Loveleen Sidhu / Bram Geboers", tech: "Next.js, Springboot, Azure, SocketIO" },
  tychothoelen: { nr: "02", title: "TYCHO THOELEN", info: "Tycho Thoelen info", requirements: "Requirements for Tycho Thoelen", challenges: "Challenges for Tycho Thoelen", credits: "Tycho Thoelen / Bram Geboers", tech: "React, Node.js" },
  kevindhond: { nr: "03", title: "KEVIN DHOND", info: "Kevin Dhond info", requirements: "Requirements for Kevin Dhond", challenges: "Challenges for Kevin Dhond", credits: "", tech: "Angular, Firebase" },
  mycareer: { nr: "04", title: "MYCAREER", info: "MyCareer info", requirements: "Requirements for MyCareer", challenges: "Challenges for MyCareer", credits: "Wout Bosteels / Mathias Clement / Niels Wellens / Bram Geboers", tech: "Springboot, ReactJS, MinIO" }
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
      <Video project={project} />
      <ProjectInfo project={project} />
      <Nextproject currentSlug={slug} />
      <Footer />
    </main>
  );
};

export default ProjectPage;
