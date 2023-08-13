import Badge from '@/components/badges/badge';
import ProfileCard from '@/components/profilecard';
import Image from 'next/image';
import ProjectCards from '@/components/projectCard';
import React from 'react';


const Page = () => {

  const profileData = { 
    username: "johny",  userImg:"/images/user-circle.svg", amount: "$234"
  };

  const badgeOptions = [
    {name: "asset 1",  iconURL:"/images/guarantee.svg"},
    {name: "asset 2",  iconURL:"/images/sticker.svg"},
    {name: "asset 3",  iconURL:"/images/guarantee.svg"},
    {name: "asset 4",  iconURL:"/images/sticker.svg"},
    {name: "asset 5",  iconURL:"/images/guarantee.svg"},
    {name: "asset 6",  iconURL:"/images/sticker.svg"},
    {name: "asset 7",  iconURL:"/images/guarantee.svg"},
    {name: "asset 8",  iconURL:"/images/sticker.svg"},
  ];

  const projectOptions = [
    {username: "john", role:"frontend", title: "project name", description: "The greatest Description you could think of. A story about passion, cooperation, conflict & chaos - unveiling, word by word, a deeper truth about…",  iconURL:"/images/profileImg.svg", voucherID: "214"},
    {username: "rita", role:"smart contract", title: "project name", description: "The greatest Description you could think of. A story about passion, cooperation, conflict & chaos - unveiling, word by word, a deeper truth about…",  iconURL:"/images/profileImg.svg", voucherID: "215"},
  ];


  return (
          <div className='px-6 py-24 sm:py-32 lg:px-8 lg:pl-72 '>
            <div className=' mb-24 mt-10'>
              {/* <h2 className='mt-2 text-4xl font-bold tracking-light text-gray-900 md:text-6xl'>Dashboard</h2> */}
              <ProfileCard 
              username={profileData.username}
              userImg={profileData.userImg}
              amount={profileData.amount}
              />
            </div>

            <div className='grid grid-cols-2 gap-16'>

              <div className='flex flex-col gap-2 w-'>
                <h1 className='border p-4 mt-4 text-white	w-1/2'>your badges</h1>
                <p className='p-4 mt-4 text-white	'>check the open tasks. do stuff. your badges will appear here.</p>

                <div className="grid grid-cols-4 gap-4">
                {badgeOptions.map((badge)=> (
                  <Badge key={badge.name} imageURL={badge.iconURL} altText={badge.name}/>
                ))
                }
                </div>
              </div>


              <div className="">
                <h1 className='border p-4 mt-4 text-white	w-1/2'>your projects</h1>
                <ProjectCards projects={projectOptions}/>
              </div>

            </div>

          </div>
  );
};

export default Page;

