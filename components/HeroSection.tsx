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
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m Edita!</h1>
          
          <div className="text-lg mt-4 mb-6 md:text-xl">
            <p className="mb-4">
              With more than a <span className="font-semibold text-teal-600">decade of experience</span> in the tech industry, I help companies grow through:
            </p>
            
            <ul className="list-none space-y-2 mb-6">
              <li>
                <span className="font-bold">🚀 Full-Stack Development:</span> Building Web, APIs(Next.js, ASP.NET Core, SQL Server, AWS) and Mobile Apps (Kotlin).
              </li>
              <li>
                <span className="font-bold">🔄 Digital Modernization:</span> Migrating legacy systems (PowerBuilder / .NET WPF / Sybase) to modern architectures (ASP.NET Core, Next.js) while maintaining data integrity.
              </li>
            </ul>

            <p className="text-teal-600 font-medium italic">
              I help you reduce operating costs and boost profitability with custom software.
            </p>
          </div>

          <Link
            to="projects"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 mr-4 cursor-pointer inline-block"
          >
            Projects
          </Link>
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