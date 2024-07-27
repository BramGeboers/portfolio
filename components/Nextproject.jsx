"use client";
import React from "react";
import Link from "next/link";

const projectRoutes = [
  "/cases/car4rent",
  "/cases/tychothoelen",
  "/cases/kevindhond",
  "/cases/mycareer",
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
    <div className="flex justify-between gap-16 w-[100%] p-20">
      <div className="max-w-[500px] mr-40">
        <Link
          href={prevRoute}
          className="text-4xl mb-4 p-2 font-mori font-bold flex gap-4"
        >
          ← Previous
        </Link>
      </div>
      <div className="max-w-[300px]">
        <Link
          href={nextRoute}
          className="text-4xl mb-4 p-2 font-mori font-bold flex gap-4"
        >
          Next →
        </Link>
      </div>
    </div>
  );
};

export default Nextproject;
