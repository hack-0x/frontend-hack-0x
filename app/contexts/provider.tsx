// import React, { createContext, useContext, useEffect, useState } from 'react';
// import { ethers } from 'ethers';

// interface Web3ProviderContextType {
//   provider: ethers.BrowserProvider | null;
//   signer: ethers.Signer | null;
//   connectedAddress: string | null;
// }

// const Web3ProviderContext = createContext<Web3ProviderContextType>({
//   provider: null,
//   signer: null,
//   connectedAddress: null,
// });

// export function useWeb3Provider() {
//   return useContext(Web3ProviderContext);
// }

// export const Web3ProviderWrapper: React.FC <({ children: React.ReactNode })> =({children}) => {
//   const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
//   const [signer, setSigner] = useState<ethers.Signer | null>(null);
//   const [connectedAddress, setConnectedAddress] = useState<string | null>(null);

//   useEffect(() => {
//     async function init() {
//       if (window.ethereum) {
//         const web3Provider = new ethers.BrowserProvider(window.ethereum);
//         const signer = web3Provider.getSigner();
//         const accounts = await signer.getAddress();
//         setProvider(web3Provider);
//         setSigner(signer);
//         setConnectedAddress(accounts);
//       }
//     }
//     init();
//   }, []);

//   return (
//     <Web3ProviderContext.Provider value={{ provider, signer, connectedAddress }}>
//       {children}
//     </Web3ProviderContext.Provider>
//   );
// };
