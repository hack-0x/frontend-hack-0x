import React, {useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface SideNavBarProps {
    isConnected: boolean;
    isSidebarOpen: boolean;
    children: React.ReactNode;
}

const Sidebar = ({
  isConnected,
  isSidebarOpen
}: SideNavBarProps) => {

  return (
    <div className="flex relative w-0 h-0">
   
        <aside
        className={`bg-gray-800 text-white w-64 min-h-screen transition-transform duration-300 ${
          isSidebarOpen ? '' : '-translate-x-64'
        }`}
      >
        <nav className="py-4 px-6 text-center">
            <Image 
            // src={}
            alt="user name"
            objectFit="cover" // change to suit your needs
            className="mx-auto rounded-full bg-black h-20 w-20" // just an example
            />
          
          <ul className="space-y-2 mt-24 flex flex-col gap-10">
            <li className='w-full'>
              <Link href="/dashboard" className='box-border px-11 py-3 bg-white text-black rounded hover:bg-black hover:text-white'>
                  h-file
              </Link>
            </li>
            <li className='mb-10'>
              <Link href="/dashboard/projects" className='my-4 px-5 py-3 bg-white text-black rounded hover:bg-black hover:text-white'>
                  project room
              </Link>
            </li>
            <li className='mb-10'>
              <Link href="/dashboard/settings" className='my-4 px-10 py-3 bg-white text-black rounded hover:bg-black hover:text-white'>
                  market
              </Link>
            </li>
            <li className='mb-10'>
              <Link href="/dashboard/settings" className='my-4 px-12 py-3 bg-white text-black rounded hover:bg-black hover:text-white'>
                  feed
              </Link>
            </li>

          <hr className='divide-y-0 divide-slate-50' />

            {isConnected ? (
              <button
          onClick={ ()=>{}}
          className="block my-10 px-4 py-2 mt-4 mx-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          {isConnected && 'disconnect'}
        </button>
            ) : null}
          </ul>
        </nav>
        
      </aside>
    </div>
  );
};

export default Sidebar;