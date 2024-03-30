"use client";
import React, {useRef, useEffect, useState} from 'react';
import lion from "../public/peppa.jpg";
import dog from "../public/peppa.jpg";
import cat from "../public/peppa.jpg";
import giraffe from "../public/peppa.jpg";
import { motion, useSpring } from "framer-motion";
import Image from 'next/image'

const [hover, SetHover] = useState(true);


const References = () => {

  const [img, setImg] = useState({
		src: "",
		alt: "",
		opacity: 0,
	})
	const list = [
		{
			img: lion,
			label: "Lion",
		},
		{
			img: dog,
			label: "Dog",
		},
		{
			img: cat,
			label: "Cat",
		},
		{
			img: giraffe,
			label: "Giraffe",
		},
	];
	const spring = {
		stiffness: 150,
		damping: 15,
		mass: 0.1,
	}
	const imagePos = {
		x: useSpring(0, spring),
		y: useSpring(0, spring),
	}

	const handleMove = (e) => {
		const { clientX, clientY } = e;
		imagePos.x.set(clientX);
		imagePos.y.set(clientY);
	}

  return (
		<>
			<section onMouseMove={handleMove} className="min-h-[100vh] flex items-center justify-center bg-black overflow-clip">
				<ul className="list-none border-1 border-white">
					{
						list.map(item => {
							return (
								<li className="w-[600px] px-8 text-center cursor-pointer bg-gray-500 p-4"
									key={item.label}
									onMouseEnter={() => {
										setImg({
											src: item.img,
											alt: item.label,
											opacity: 1,
										})
									}}
									onMouseLeave={() => {
										setImg({
											src: item.img,
											alt: item.label,
											opacity: 0,
										})
									}}
								>
									{item.label}
								</li>
							)
						})
					}
				</ul>
				<motion.Image
					src={img.src}
					alt={img.alt}
					className="w-[100px] h-[150px] rounded-md bg-white object-cover object-center absolute z-20 left-0 top-0 ease-in-out"
					style={{
						y: imagePos.y,
						x: imagePos.x,
						opacity: img.opacity,
					}}
				/>
			</section>
		</>
  );
};

export default References
