import React from 'react'
import Image from 'next/image'

    interface ProfileCardProps {
        username: string;
        userImg: string;
        amount: any;
    }
     
const ProfileCard: React.FC<ProfileCardProps> = (props) => {
    console.log(props);
  return (
    <div className="w-screen max-w-sm border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
        <div className='flex flex-row w-full'>
            <div className="flex flex-col items-center">
                <div className='grid place-items-center w-24 h-24 m-2 rounded-full bg-white' >
                    <Image 
                    src={props?.userImg}
                    height={24}
                    width={24}
                    alt="avatar"
                    />
                </div>
                <span className="text-sm text-white pt-4 dark:text-gray-400">{props.username}</span>
            </div>


                <div className="flex flex-col justify-space pb-10">
                    <div className='flex h-24 w-24 place-items-center gap-4 ml-2'>
                        <Image 
                    src="/images/money.svg"
                    height={32}
                    width={30}
                    alt="money icon"
                    />
                    <span className="text-lg text-white dark:text-gray-400">{props.amount}</span>
                </div>
                    
                

                <div className="mt-4 space-x-3 md:mt-6">
                        <a href="/create-project" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">create project</a>
                    </div>
                </div>
        </div>
    </div>
      )
}

export default ProfileCard