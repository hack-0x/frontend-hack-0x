'use client'

import Modal from '@/components/modal/modal';
import Image from 'next/image';
import "./style.css";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';


export default function NewUser() {
  const router = useRouter();
  const [modalState, setModalState] = useState(1); 
  const [loading, setLoading] = useState(false);


  // const closeModal = () => {
  //   // setModalState(0);
  //   router.push('/dashboard');
  // };

  const claimMembership = async () => {
    setLoading(true);

    // api call
    try {
      setLoading(false);
      setModalState(3);
    } catch (error) {
      setLoading(false);
      console.error('Failed to fetch data:', error);
    }
  };

  const redirectToDashboard = () => {
    router.push('/dashboard');
  };


  useEffect(() => {
    // const hasMembershipNFT = membershipNFTExists(); // Implement this function
    //implement above function
    const hasMembershipNFT = false;

    if (hasMembershipNFT) {
      router.replace('/dashboard'); // Redirect to dashboard if the user has a membership NFT
    }
  }, []);

  let modalContent;

  switch (modalState) {
    case 1:
      modalContent = (
        <Modal
        isOpen={modalState > 0}
        handleClose={redirectToDashboard}
        handleAction={ ()=>setModalState(2) }
        submitButtonText='take the black pill'
        >
            <div className='font-mono text-center text-stone-300 py-2'>
                <h1 className='font-medium text-4xl pt-4 pb-2'>hack0x</h1>
                <p className='font-medium pb-5 py-2'>membership</p>
                <p className='font-thin text-sm py-2'>
            hack0x is not a company, a vc-backed corp, an ape-collector of the size of a whale.</p>
            <p className='font-thin text-sm py-2'>
            we are a collective, we chose to make a difference, and to stay free.</p>
            <p className='font-thin text-sm pt-2 pb-8'>feel free to join us. </p>
            </div>
    
    </Modal>
      );
      break;

    case 2:
      modalContent = (
        <Modal 
        isOpen={modalState > 0}
        submitButtonText='sign, pay, hack' 
        handleClose={redirectToDashboard} 
        handleAction={claimMembership}
    >
        <div className='font-mono text-center text-stone-300 py-2 box-border border-solid border-2 rounded-3xl'>
            <h1 className='font-medium text-2xl pt-4 pb-2'>hack the status quo - a manifesto.</h1>
            <div className='px-6'>
              
                <p className='font-extrathin text-sm py-2'>the membership is 10 op. it’s for life.</p>
                <p className='font-thin text-sm py-2'>you get an on-chain attestation, and you have full access to the collective. 
                    meaning: see all projects, create new projects, find contributors/partners-in-crime, 
                    get funds, support public goods.</p>
                <p className='font-thin text-sm py-2'>break things, change things. give explanations to no one. </p>
                <p className='font-thin text-sm py-2'>this is a manifesto, not a “tos”. by signing, you share these collective values. 
                    you won’t be giving up your data, your privacy, your identity, or whatever.
                    this is your self-sovereign choice, and it has a date. today.</p>
            </div>
        </div>
    </Modal>
      );
      break;

    case 3:
      modalContent = (
        <Modal 
        isOpen={modalState > 0} 
        handleClose={redirectToDashboard}
        handleAction={redirectToDashboard}
        submitButtonText='claim' 
        >
                            <div className='h-fit font-mono text-center  text-stone-300 py-2 box-border border-solid border-2 rounded-3xl'>
                <h1 className='h-auto font-medium text-2xl pt-6 pb-4'>you made it 🏴‍☠️ claim your hacktivist card below</h1>
                <Image 
                className="mx-8 my-6 w-15 h-60 border" 
                src={''} 
                alt="project logo"
                />
            </div>
    
</Modal>
      );
      break;

    default:
      modalContent = null;
      break;
  }

  return (
    <div className="blurred-background">
        {modalContent}
    </div>
    );
}
