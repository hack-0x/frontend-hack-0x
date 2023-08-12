import Modal from '@/components/modal/modal';
import React, {useEffect, useState} from 'react'
import Image from 'next/image';
import { useRouter } from 'next/navigation'

interface ManifestoProps  {
    isOpen: boolean;
    handleModalClose: () => void;
}

const Manifesto = ({
    isOpen,
    handleModalClose
}: ManifestoProps) => {
    const [modalType, setModalType] = useState<string>();
    const [signInStatus, setSignInStatus] = useState<string>("failed");

    const router = useRouter()

    const handleSignManifesto = () => { 
        setModalType('descriptionModal')
        if(modalType === "descriptionModal"){
            //todo: set based on the return data
            setSignInStatus("success");
        }
    }

//     useEffect(()=>{
// handleSignManifesto();
//     },[modalType]);

    const handleClaimNFT = () => {
        // todo: redirect to h-file page
        router.push('/dashboard');

    }

    if(modalType === 'descriptionModal'){
        return (
            <Modal 
                isOpen={isOpen}
                submitButtonText='sign, pay, hack' 
                handleClose={handleModalClose} 
                handleAction={handleSignManifesto}
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
        )
    } else if(modalType === 'descriptionModal' && signInStatus === 'success') {
    return (
        <Modal 
            isOpen={isOpen} 
            handleClose={handleModalClose}
            handleAction={handleClaimNFT}
            submitButtonText='claim' 
            >
                                <div className='font-mono text-center text-stone-300 py-2 box-border border-solid border-2 rounded-3xl'>
                    <h1>you made it 🏴‍☠️ claim your hacktivist card below</h1>
                    <Image 
                    className="w-15 h-15" 
                    // src={avatarSrc} 
                    alt="project logo"
                    />
                </div>
        This success NFT claim
    </Modal>
    )
}
  return (
    <Modal
        isOpen={isOpen}
        handleClose={handleModalClose}
        handleAction={handleSignManifesto}
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
  )
}

export default Manifesto