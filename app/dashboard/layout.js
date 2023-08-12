"use client"

import React, {useState} from 'react';
import Link from 'next/link';
import { ethers } from 'ethers';
import  Sidebar from '@/components/nav/sidebar';

export default function Layout ({ children })  {
const [isConnected, setIsConnected] = useState(false);
const [isSidebarOpen, setIsSidebarOpen] = useState(true);

async function connectWeb3() {
    try {
      // Connect to Ethereum
      const provider = new ethers.BrowserProvider(window?.ethereum);
      await provider.send("eth_requestAccounts", []);
      setIsConnected(true);

    } catch (error) {
        //todo: redirect user to home page
        setIsConnected(false);
      console.error("Web3 connection error:", error);
    }
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className='flex bg-black'>

      <Sidebar
        isConnected={isConnected}
        isSidebarOpen={isSidebarOpen}       
        > 
      </Sidebar>

      <button
        onClick={toggleSidebar}
        style={{
            position: 'absolute',
            top: '4rem',
            left: isSidebarOpen ? '17rem' : '0',
            transform: 'translateX(-50%)',
          }}
          className="p-3 bg-gray-700 text-black border shadow-md hover:bg-gray-600 opacity-75"
      >
        {'<'}
      </button>

          <main className="flex-1 p-4">{children}</main>
     
    </div>
  );
};

