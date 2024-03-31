"use client";
import { gsap, ScrollTrigger } from "gsap/all";
import { useRef, useEffect } from "react";

const Intro = () => {
  gsap.registerPlugin(ScrollTrigger);
  const Spans = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const tl = useRef();
  const container = useRef();

  useEffect(() => {
    tl.current = gsap.timeline({
      paused: true,
    });

    gsap.to(Spans[0].current, {
      color: "red",
      scrollTrigger: {
        trigger: Spans[0].current,
        start: "center bottom",
        end: "top center",
        scrub: 1,
      },
    }),
      gsap.to(Spans[1].current, {
        color: "green",
        scrollTrigger: {
          trigger: Spans[1].current,
          start: "center bottom",
          end: "top center",
          scrub: 1,
        },
      }),
      gsap.to(Spans[2].current, {
        color: "blue",
        scrollTrigger: {
          trigger: Spans[2].current,
          start: "center bottom",
          end: "top center",
          scrub: 1,
        },
      }),
      gsap.to(Spans[3].current, {
        color: "yellow",
        scrollTrigger: {
          trigger: Spans[3].current,
          start: "center bottom",
          end: "top top",
          scrub: 1,
        },
      });
  }, []);

  return (
    <div className="pt-20 pb-60">
      <div
        className="max-w-[850px] mx-auto text-4xl text-center"
        ref={container}
      >
        <p>
          As a 20-year-old student from{" "}
          <span ref={Spans[0]} className="text-white">
            Belgium
          </span>{" "}
          studying computer science, my passion lies in the realms of UI/UX
          design and web development. Delving into the intricacies of creating{" "}
          <span ref={Spans[1]}>user-friendly</span> interfaces and crafting
          seamless digital experiences fascinates me. Whether it's designing
          intuitive layouts or mastering the latest{" "}
          <span ref={Spans[2]}>web development</span> technologies, I'm driven
          by the desire to merge creativity with functionality. With a keen eye
          for detail and a penchant for problem-solving, I strive to contribute
          meaningfully to the ever-evolving{" "}
          <span ref={Spans[3]}>digital landscape</span>.
        </p>
      </div>
    </div>
  );
};

export default Intro;
