"use client"

import React, {useState} from 'react';


interface FormProps {
  onSubmit: (data: FormData) => void;
}

interface FormData {
  name: string;
  description: string;
  area: string;
  skills: string;
  membersLimit: number;
  pvalue: number;
  fundTarget: string;
}



const CreateProject = () => {
  const [formData, setFormData] = React.useState<FormData>({ name: '', description: '', area: '', skills: '', membersLimit: 0, pvalue:0, fundTarget: '' });

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    //todo make api call
  }

  return (
          <div className='m-auto px-6 py-24 sm:py-32 lg:px-8  lg:pl-72'>
            <div className='mx-auto max-w-2xl text-center'>
              <form onSubmit={handleSubmit} className='text-4xl font-bold font-mono'>

              
                <div className='p-4 grid gap-2'>
                <h1 className='text-4xl text-white mb-6'>1. project cover</h1>
                  <label className='text-white text-2xl font-bold'>
                    title:
                <input className='ml-6 text-black text-lg' type="text" name="name" value={formData.name} onChange={handleInputChange} />
                  </label>
                  <br />

                  <label className='text-2xl font-bold text-white'>
                    description:
                    <textarea className='ml-6 text-black text-lg' id="desc" name="description" value={formData.description} rows={4} cols={30} onChange={(e)=>handleInputChange}/>

                  {/* <input className='ml-6' type="number" name="age" value={formData.age} onChange={handleInputChange} /> */}
                  </label>
                  <hr className='color-white my-10' />
                </div>


                <div className='p-4 grid gap-2'>
                <h1 className='text-4xl text-white mb-6'>2. project area</h1>
                 

                  <label className='text-2xl font-bold text-white'>
                    area of interest:
                  <input className='ml-6 text-black text-lg' placeholder='nft, defi, protocol, zk & aa, dapp, infra...' type="string" name="area" value={formData.area} onChange={handleInputChange} />
                  </label>
                  <hr className='color-white my-10' />
                </div>


                <div className='p-4 grid gap-2'>
                <h1 className='text-4xl text-white mb-6'>3. skills needed</h1>
                <label className='text-2xl font-bold text-white'>
                    skills:
                  <input className='ml-6 text-black text-lg' placeholder='devops, management, mobile, tokenomics, governance, smart contracts, game theory, etc..' type="string" name="skills" value={formData.skills} onChange={handleInputChange} />
                  </label>
                  <hr className='color-white my-10' />
                </div>


                <div className='p-4 grid gap-2'>
                <h1 className='text-4xl text-white mb-6'>4. contributors</h1>
                  <label className='text-white text-2xl font-bold'>
                    max. members:
                <input className='ml-6 text-black text-lg' type="number" name="membersLimit" value={formData.membersLimit} onChange={handleInputChange} />
                  </label>
                  <br />
                  <hr className='color-white my-10' />
                </div>


                <div className='p-4 grid gap-2'>
                <h1 className='text-4xl text-white mb-6'>5. project value</h1>
                  <label className='text-white text-2xl font-bold'>
                    predictive value:
                <input className='ml-6 text-black text-lg' type="number" name="pvalue" value={formData.pvalue} onChange={handleInputChange} />
                  </label>
                  <br />

                  <label className='text-2xl font-bold text-white'>
                    funding target:
                  <input className='ml-6 text-black text-lg' type="string" name="fundTarget" value={formData.fundTarget} onChange={handleInputChange} />
                  </label>
                  <hr className='color-white my-10' />
                </div>
                


                  <button className='border p-2 bg-slate-300' type="submit">Submit</button>
               </form>
              {/* <h2 className='mt-2 text-4xl font-bold tracking-light text-gray-900 md:text-6xl'>project room</h2> */}
            </div>
          </div>

  );
};

export default CreateProject;
