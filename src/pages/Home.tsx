import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PublicKey } from '@solana/web3.js';

import ConnectButton from '../components/ConnectButton';
import LogoutButton from '../components/DisconnectButton';

interface HomeProps {
  loggedIn: boolean;
  publicKeyObj: PublicKey | null;
  handleConnect: () => Promise<void>;
  handleLogout: () => void;
}

const Home: React.FC<HomeProps> = ({
  loggedIn,
  publicKeyObj,
  handleConnect,
  handleLogout
}) => {

  const [publicKey, setPublicKey] = useState<string | ''>('')

  useEffect(() => {
    const exactPublicKey = publicKeyObj?.toBase58()
    exactPublicKey ? setPublicKey(exactPublicKey) : setPublicKey('')
  }, [publicKeyObj])

  return(
    <div className="w-full h-auto flex justify-center bg-gray-800">
      {
        loggedIn ? (
          <div className='flex flex-col w-full my-4'>
            <div className='flex w-full justify-end px-4'>
              <LogoutButton onLogout={handleLogout} />
            </div>
            <div className='flex w-full justify-center mt-4 px-4'>
              <button className='w-auto text-white px-6 py-2 rounded-2xl border bg-gray-700 transition duration-300 ease-in-out hover:bg-blue-200 hover:text-black'>
                <Link className='tracking-wider cursor-pointer' to="/create-stream">
                  Create Stream
                </Link>
              </button>
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
