import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { PublicKey } from '@solana/web3.js';

import Home from './pages/Home';

function App() {

  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [publicKey, setPublicKey] = useState<PublicKey | null>(null);

  const handleConnect = async () => {
    if (window.solana &&  window.solana.isPhantom) {
      try {
        console.log('====== window.solana ', window.solana.isPhantom)
        await window.solana.connect();
        const publicKey = await window.solana.publicKey;

        setLoggedIn(true);
        setPublicKey(publicKey);

      } catch (error) {
        console.error('Failed to connect to Phantom Wallet:', error);
      }
    }else {
      console.error('Phantom Wallet not installed.');
    }
  }

  const handleLogout = () => {
    if (window.solana && window.solana.isPhantom) {
      window.solana.disconnect();
    }

    setLoggedIn(false);
    setPublicKey(null);
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home loggedIn={loggedIn} publicKey={publicKey} handleConnect={handleConnect} handleLogout={handleLogout} />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
