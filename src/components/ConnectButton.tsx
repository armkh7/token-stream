import React from 'react';

interface ConnectButtonProps {
  onConnect: () => void;
}

const ConnectButton: React.FC<ConnectButtonProps> = ({ onConnect }) => {
  return <button className='flex w-auto px-6 py-2 text-white cursor-pointer rounded-2xl border bg-gray-700 transition duration-300 ease-in-out hover:bg-blue-200 hover:text-black' onClick={onConnect}>Connect to Phantom Wallet</button>;
};

export default ConnectButton;
