import Image from 'next/image';
import React from 'react';

interface ProjectCardProps {
    username: string;
    role: string;
    title: string;
    description: string;
    iconURL: string;
    voucherID: string;
}

type ProjectArray = ProjectCardProps[];


const ProjectCards: React.FC<{projects: ProjectArray }> = ({projects}) => {

  return (
    <div className="grid grid-rows-2 gap-2 p-6 ">
            <div className='gap-2 w-'>
              <div className="grid grid-cols-2 gap-4 font-mono">
              {projects.map((project)=> (
              <div className='border border-solid p-2 bg-white text-black border-white rounded-sm'>
                <div className='flex flex-row justify-between py-2'>
                <h1 className='text-lg font-bold'>{project.title}</h1>
                <p>date</p>
                </div>

                <div className='border-box '>
                  <p className='text-xs font-light'>
                  {project.description}
                  </p>
                </div>

                <div className='flex flex-row justify-between py-1'>
                <h1 className='text-md'>role</h1>
                <p>{project.role}</p>
                </div>

                <div className='border-box h-20 bg-slate-500 rounded-sm'>
                  <Image
                  src={project.iconURL}
                  height={70}
                  width={160}
                  alt="project image"
                  />
                </div>

                <div className='flex flex-row justify-center'>
                <Image
                  src={"/images/ticket.svg"}
                  height={10}
                  width={30}
                  alt={project.voucherID}
                  />
                  <p className='text-lg pl-4'>{project.voucherID}</p>
                </div>
              </div>

              ))
              }
              </div>
            </div>
            </div>
  );
};

export default ProjectCards;

