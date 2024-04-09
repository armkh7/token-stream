import React from 'react';
import { PublicKey } from '@solana/web3.js';

import ConnectButton from '../components/ConnectButton';
import LogoutButton from '../components/LogoutButton';

interface HomeProps {
  loggedIn: boolean;
  publicKey: PublicKey | null;
  handleConnect: () => Promise<void>;
  handleLogout: () => void;
}

const Home: React.FC<HomeProps> = ({
  loggedIn,
  publicKey,
  handleConnect,
  handleLogout
}) => {
  return(
    <div className="w-full h-auto flex justify-center bg-gray-800">
      {
        loggedIn ? (
          <div className='flex w-full my-4'>
            <div className='flex w-full justify-end px-4'>
              <LogoutButton onLogout={handleLogout} />
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center max-w-5xl w-full p-8">
            <ConnectButton onConnect={handleConnect} />
          </div>
        )
      }
    </div>
  )
}

export default Home;
