"use client"

import CustomCard from "@/components/card";
import Image from 'next/image'
import React, {useState} from "react";
import Manifesto from "./new-user/page";
import { ConnectButton } from '@rainbow-me/rainbowkit';

const labels = [
  { label: '#label1', value: '#skill-needed1' },
  { label: '#label2', value: '#skill-needed2' },
  { label: '#label3', value: '#skill-needed3' },
];


export default function Home() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <main className="p-24 bg-black min-h-screen ${}">
      <div className="flex justify-start gap-4 text-white text-center pb-8">
        <Image
          className="rounded-full bg-gray-100 w-10 h-10" 
          src={''} 
          alt="project logo"
        />
        <div>
            <p className={""}>
            hack -
          </p> 
          <p>
          the status quo.
          </p>
        </div>
    
      </div>
      <div className="flex justify-evenly items-center">


      <CustomCard
        avatarSrc={''}
        username="creator's name"
        projectName="project title"
        projectDescription="lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. at vero eos et accusam et justo duo."
        labels={labels}
        logoSrc="path-to-logo"
      />

      <div className="w-0.5 ml-20 mr-20 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"></div>


      <div className="mt-3 text-lg bg-black font-mono pl-10 pr-10">
        
        <div></div>

        <section className="text-white">
          <h2 className="font-semibold">hack - the status quo.</h2>
          <p className="mt-4">
          hack0x is a decentralized venture studio to create unsupervised, exponentially innovative projects in the web3 space.
          </p>
          <p className="mt-4 mb-10">
          we use profit-sharing to disrupt the founder proprietary paradigm - and create a sustainable model for open-source and public goods".
          </p>
          <ConnectButton label="hack" />
          {/* <button className="mt-6 px-4 py-2 bg-white text-black rounded hover:bg-blue-600"
              onClick={() => setModalOpen(!modalOpen)
              }  >
                hack
        </button> */}

        </section>
      </div>

      </div> 

      {/* todo: blur the main for the new user to show modal */}
      {modalOpen &&
      <Manifesto handleModalClose={closeModal} isOpen={modalOpen}/>}

    </main>
  )
}



//user
// - new
//   - homepage - wallet sign in (check if manifesto was signed or nft is there)
//     - direct to manifesto (if nft is there then redirect to h-file page)
// - existing user
//   -check for manifesto nft 
//   - dorect to hfile if nft there or manifesto page


