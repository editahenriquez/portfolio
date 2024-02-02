import React from 'react'

const skills = [
    {skill: 'Node.JS'},
    {skill: 'Express.JS'},
    {skill: 'SQL Server'},
    {skill: 'PostgreSQL'},
    {skill: 'MySQL'},
    {skill: 'SQL Anywhere'},
    {skill: 'Prisma'},
    {skill: 'Visual Studio Code'},
    {skill: 'HTML'},
    {skill: 'CSS'},
    {skill: 'JavaScript'},
    {skill: 'TypeScript'},
    {skill: 'React.js'},
    {skill: 'Next.js'},
    {skill: 'Tailwind CSS'},
    {skill: 'Material-UI'},
    {skill: 'Git'},
    {skill: 'GitHub'},
    {skill: 'SOLID principles and Clean Code'},
    {skill: 'Docker'},
    {skill: 'Power Design'},
    {skill: 'Power Builder'}
]

const AboutSection = () => {
  return (
    <section id='about'>
        <div className='my-12 pb-12 md:pt-16 md:pb-48'>
            <h1 className='text-center font-bold text-4xl'>
                About Me
                <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'/>
            </h1>
            <div className='flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left'>
                <div className='md:w-1/2'>
                  <h1 className='text-center text-2xl front-bold mb-6 md:text-left'>
                    Get to know me!
                  </h1>
                  <p>
                    Hello! I&#39;m a passionate and creative person driven by making a positive impact
                    through building solutions that{' '}<span className="font-bold text-teal-500">improve lives.</span>{' '}
                  </p>
                  <br />
                  <p>
                  I believe in the {' '}<span className="font-bold text-teal-500">beauty of balance.</span>{' '}
                  When I&#39;m not coding or exploring new technologies,
                  You&#39;ll find me on walks, diving into books and audiobooks,
                  enjoying global music, or cooking and sharing a meal with loved ones.
                  </p>
                  <br />
                  <p>Let&#39;s connect and make your vision a reality, together!</p>
                </div>
                <div className='text-center md:w-1/2 md:text-left'>
                  <h1 className='text-2xl font-bold mb-6'>My Skills</h1>
                  <div className='flex flex-wrap flex-row justify-center z-10 md:justify-start'>
                    {
                        skills.map((item, idx)=>{
                            return(
                              <p key={idx} className='bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold'>
                                {item.skill}
                              </p>
                            )
                        })
                    }
                  </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection