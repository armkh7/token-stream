import React from 'react';

interface DisconnectButtonProps {
  onLogout: () => void;
}

const DisconnectButton: React.FC<DisconnectButtonProps> = ({ onLogout }) => {
  return <button className='flex w-auto px-6 py-2 text-white tracking-wide cursor-pointer rounded-2xl border bg-gray-700 transition duration-300 ease-in-out hover:bg-blue-200 hover:text-black' onClick={onLogout}>Disconnect</button>;
};

export default DisconnectButton;
