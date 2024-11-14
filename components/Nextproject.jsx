"use client";
import React from "react";
import Link from "next/link";

const projectRoutes = [
  "/cases/car4rent",
  "/cases/tychothoelen",
  "/cases/kevindhond",
  "/cases/h2grow",
];

const Nextproject = ({ currentSlug }) => {
  // Construct the current route based on the slug
  const currentRoute = `/cases/${currentSlug}`;

  // Find the index of the current route in the projectRoutes array
  const currentIndex = projectRoutes.indexOf(currentRoute);

  // Calculate the previous and next project routes
  const prevIndex =
    (currentIndex - 1 + projectRoutes.length) % projectRoutes.length;
  const nextIndex = (currentIndex + 1) % projectRoutes.length;

  const prevRoute = projectRoutes[prevIndex];
  const nextRoute = projectRoutes[nextIndex];

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-8 w-full p-8 sm:p-12 lg:p-20">
      <div className="w-full text-center lg:text-left lg:w-auto">
        <Link
          href={prevRoute}
          className="text-2xl sm:text-3xl lg:text-4xl mb-4 p-2 font-mori font-bold flex gap-4 justify-center lg:justify-start"
        >
          ← Previous
        </Link>
      </div>
      <div className="w-full text-center lg:text-right lg:w-auto">
        <Link
          href={nextRoute}
          className="text-2xl sm:text-3xl lg:text-4xl mb-4 p-2 font-mori font-bold flex gap-4 justify-center lg:justify-end"
        >
          Next →
        </Link>
      </div>
    </div>
  );
};

export default Nextproject;
