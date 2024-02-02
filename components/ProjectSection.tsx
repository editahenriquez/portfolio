import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {BsGithub, BsArrowUpRightSquare} from 'react-icons/bs';

const projects = [
      {
        name: 'Full Stack E-Commerce + Dashboard & CMS',
        description: `It's built using Next.js, React, Prisma, MySQL, Shadcn and Tailwind CSS`,
        image: '/ecommerce.png',
        github1: 'https://github.com/editahenriquez/ecommerce-store',
        github2: 'https://github.com/editahenriquez/ecommerce-admin',
        link1: 'https://ecommerce-store-projectm.vercel.app/',
        link2: 'https://ecommerce-admin-projectm.vercel.app/',
      },
      {
        name: 'PERN CRUD Tasks',
        description: `It's built using PERN Stack (Postgres, Express, React y Node), Docker, Material UI and Tailwind CSS where you can create, read, update, and delete tasks`,
        image: '/TasksApp-pern.png',
        github1: 'https://github.com/editahenriquez/pern-frontend',
        github2: '',
        link1: 'https://pern-frontend-chi.vercel.app/',
        link2: ''
      },
      {
        name: 'Fruit Blog',
        description: `It's an HTML & CSS website where you can explore information about various fruits`,
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
                            <Link href={project.link1} target='_blank'>
                                <Image
                                    src={project.image}
                                    alt=''
                                    width={1000}
                                    height={1000}
                                    className='rounded-xl shadow-xl hover:opacity-70'
                                />
                            </Link>
                        </div>
                        <div className='mt-8 md:w-1/2'>
                            <h1 className='text-4xl font-bold mb-6'>{project.name}</h1>
                            <p className='text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400'>
                              {project.description}
                            </p>
                            <div className='flex flex-row align-bottom space-x-4'>
                              <Link href={project.github1} target='_blank' className='hover:-translate-y-1 transition-transform cursor-pointer'>
                                <BsGithub
                                  size={30}
                                />
                              </Link>
                              {project.github2 !== '' && (
                                <Link href={project.github2} target='_blank' className='hover:-translate-y-1 transition-transform cursor-pointer'>
                                <BsGithub
                                  size={30}
                                />
                               </Link>
                              )}
                              <Link href={project.link1} target='_blank'>
                                <BsArrowUpRightSquare
                                  size={30}
                                  className='hover:-translate-y-1 transition-transform cursor-pointer'
                                />
                              </Link>
                              {project.link2 !== '' && (
                                <Link href={project.link2} target='_blank'>
                                  <BsArrowUpRightSquare
                                    size={30}
                                    className='hover:-translate-y-1 transition-transform cursor-pointer'
                                  />
                                </Link>
                              )}
                            </div>
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