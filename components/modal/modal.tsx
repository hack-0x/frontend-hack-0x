import React, {useEffect} from 'react'
import ReactPortal from '../reactPortal';
import "./modal.css";

interface ModalProps  {
    children:  React.ReactNode;
    isOpen: boolean;
    handleClose: () => void;
    handleAction: () => void;
    submitButtonText: string,
}

const Modal = ({
    children,
    isOpen,
    handleClose,
    handleAction,
    submitButtonText,
}: ModalProps) => {

    useEffect(() => {
        const closeOnEscapeKey = (e: any) => e.key === "Escape" ? handleClose() : null;
        document.body.addEventListener("keydown", closeOnEscapeKey);
        return () => {
          document.body.removeEventListener("keydown", closeOnEscapeKey);
        };
      }, [handleClose]);


    if (!isOpen) return null;

  return (
    <ReactPortal wrapperId='react-portal-modal-container'>
        <>
        <div className='fixed top-0 left-0 w-screen h-screen opacity-60 backdrop-blur-md bg-white/40' />
        <div className='modal-box h-screen fixed rounded-3xl flex flex-col overflow-hidden p-5 bg-zinc-800 inset-y-32 inset-x-32 '>
            <button 
                onClick={handleClose}
                className='py-2 px-8 self-end text-white'>
                    X
            </button>
            <div className=' '>
                {children}
            
            <div className=' text-stone-300 py-2 my-1'>
                <div className='flex flex-col items-center'>
                       <button 
                onClick={handleAction}
                className='bg-transparent font-mono hover:bg-white text-white font-extrathin hover:text-black py-2 px-4 border border-white hover:border-transparent rounded-full'>
                    {submitButtonText}
            </button>
                </div>
         
            </div>

            </div>
        </div>   
        </>
        </ReactPortal>
  );
}

export default Modal