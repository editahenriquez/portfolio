'use client';

import Image from "next/image";
import { Link } from "react-scroll/modules";
import {HiArrowDown} from 'react-icons/hi';
import React from 'react'

const HeroSection = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
              src='/me.png'
              alt=""
              width={325}
              height={325}
              className="rounded-full shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m Edita! </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            <span className="font-semibold text-teal-600">
              Software Developer {' '}
            </span>
            working on a mission to build meaningful software that enhances people&#39;s lives.
          </p>
          <Link
            to = 'projects'
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 mr-4 cursor-pointer"
          >
            Projects
          </Link>
          <a
          href="https://drive.google.com/file/d/1S_JG5xBY_fyrFdIai5foiC4xePFw-q-U/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-200 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
          >
          Resume
          </a>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className='animate-bounce'/>   
        </Link>
      </div>
    </section>
  );
};

export default HeroSection