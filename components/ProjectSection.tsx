import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {BsGithub, BsArrowUpRightSquare} from 'react-icons/bs';

const projects = [
    {
        name: 'Market Sales Management: Mobile App',
        description: `I developed a high-availability mobile solution designed to digitize micro-merchant businesses such as market stalls. The system enables seamless management of sales and client debts using an Offline-First architecture to ensure total operational continuity. I implemented an "intelligent onboarding" logic that allows users to register products in seconds, successfully removing technical barriers for traditional businesses. This project resulted in the full digitalization of manual sales and improved control over credit lines(debts) and daily sales analysis using Kotlin, SQLite, and Firebase (Auth & Firestore).`,
        image: '/MarketSales_App.png',
        github1: '', // Add link if available
        github2: '',
        link1: '',
        link2: '',
      },
      {
        name: 'Financial Management & KPI System',
        description: `I led the migration and modernization of a critical cash flow system from legacy Visual Basic to .NET Core and WPF. I transformed an obsolete tool into a robust multi-company platform capable of consolidating financial data, sales, and KPIs in real-time. The solution involved a data migration to SQL Server 2022, ensuring the integrity of historical information. This modernization significantly increased the speed of financial decision-making and provided total visibility of performance by company using ASP.NET Core, SQL Server 2022, .NET WPF, and IBM Cloud.`,
        image: '/Finance_LegacyModernization.png',
        github1: '',
        github2: '',
        link1: '',
        link2: '',
      },
      {
        name: 'Bus Fleet Maintenance Ecosystem',
        description: `I designed a two-way ecosystem to optimize transport fleet operations. I developed a mobile app for drivers that allows instant reporting of mechanical failures and a web platform for the workshop to manage maintenance orders. Real-time synchronization eliminated paper use and reduced vehicle downtime, resulting in a drastic reduction in reporting errors and optimized repair logistics using Next.js, TypeScript, Kotlin, MySQL, and Prisma.`,
        image: '/BusFleet_Management.png',
        github1: '',
        github2: '',
        link1: '',
        link2: '',
      },
      {
        name: 'Fruit Blog',
        description: `It's an HTML & CSS website where you can explore information about various healthy and delicious fruits`,
        image: '/fruitblog-html-css.png',
        github1: 'https://github.com/editahenriquez/fruitblog',
        github2: '',
        link1: 'https://editahenriquez.github.io/fruitblog/',
        link2: ''
      }
]

const ProjectSection = () => {
  return (
    <section id='projects'>
      <h1 className='my-10 text-center font-bold text-4xl'>
        Projects
        <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded' />
      </h1>
      <div className='flex flex-col space-y-28'>
        {
            projects.map((project, idx)=>{
                return(
                  <div key={idx}>
                    <div className='flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-10'>
                        <div className='md:w-1/2'>
                            {project.link1 !== "" ? (
                                <Link href={project.link1} target='_blank'>
                                    <Image
                                        src={project.image}
                                        alt=''
                                        width={1000}
                                        height={1000}
                                        className='rounded-xl shadow-xl hover:opacity-70 transition-opacity cursor-pointer'
                                    />
                                </Link>
                            ) : (
                                <Image
                                    src={project.image}
                                    alt=''
                                    width={1000}
                                    height={1000}
                                    className='rounded-xl shadow-xl'
                                />
                            )}
                        </div>
                        <div className='mt-8 md:w-1/2'>
                            <h1 className='text-4xl font-bold mb-6'>{project.name}</h1>
                            <p className='text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400'>
                              {project.description}
                            </p>
                        </div>
                    </div>
                </div>  
                )
            })
        }
      </div>
    </section>
  )
}

export default ProjectSection