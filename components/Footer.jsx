"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaArrowTurnDown } from "react-icons/fa6";
import { references } from "../constants";
import Image from "next/image";
import { gsap } from "gsap";
import DateTime from "@/components/DateTime";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row py-32 px-28 items-end justify-between">
        <p className="text-[175px] leading-none font-medium">
          Let's work <br /> together!
        </p>

        <button className="text-[75px] border-8 font-semibold border-white h-[200px] px-20 rounded-[100%]">
          Contact
        </button>
      </div>
      <ul className="flex flex-row justify-between p-10 items-center">
        <li>
          Bram Geboers - 20 <br /> ©Copyright 2024
        </li>
        <li>LinkedInn</li>
        <li>Facebook</li>
        <li>
          {" "}
          <DateTime />{" "}
        </li>
      </ul>
    </div>
  );
};

export default Footer;
