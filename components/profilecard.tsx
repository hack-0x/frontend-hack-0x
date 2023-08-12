import React from 'react'

const ProfileCard = () => {
  return (
    <div className="w-screen max-w-sm border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700">
        <div className='flex flex-row w-full'>
            <div className="flex flex-col items-center pb-10">
                <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
                <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
            </div>


                <div className="flex flex-col items-center pb-10">
                    <img className="w-10 h-10 mb-3 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image"/>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span>
                

                <div className="mt-4 space-x-3 md:mt-6">
                        <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">edit profile</a>
                    </div>
                </div>
        </div>
    </div>
      )
}

export default ProfileCard