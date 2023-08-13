import ProjectCards from '@/components/projectCard';
import React from 'react';

const projectOptions = [
  {username: "john", role:"frontend", title: "project name", description: "The greatest Description you could think of. A story about passion, cooperation, conflict & chaos - unveiling, word by word, a deeper truth about…",  iconURL:"/images/profileImg.svg", voucherID: "214"},
  {username: "rita", role:"smart contract", title: "project name", description: "The greatest Description you could think of. A story about passion, cooperation, conflict & chaos - unveiling, word by word, a deeper truth about…",  iconURL:"/images/profileImg.svg", voucherID: "215"},
]


const Page = () => {
  return (
          <div className='m-auto px-6 py-24 sm:py-32 lg:px-8 h-screen lg:pl-72'>
            <div className='mx-auto max-w-2xl text-center'>
            <div className="">
                <h1 className='border p-4 mt-4 text-white	w-auto'>project market</h1>
                <ProjectCards projects={projectOptions}/>
              </div>
              {/* <h2 className='mt-2 text-6xl font-bold tracking-light text-slate-100 md:text-6xl'>coming soon...</h2> */}
            </div>
          </div>

  );
};

export default Page;