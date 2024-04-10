import React, { useEffect } from 'react';

import { PublicKey } from '@solana/web3.js';

// import {
//   StreamflowSolana
// } from "@streamflow/stream";

// const solanaClient = new StreamflowSolana.SolanaStreamClient(
//   "https://api.mainnet-beta.solana.com"
// );

const CreateStream: React.FC = () => {

  useEffect(() => {
    // console.log(solanaClient)
  }, [])

  return (
    <div className="w-full h-auto flex justify-center bg-gray-800 px-4 py-4 ">
      <h1 className="text-white text-lg tracking-wider">Create Stream</h1>
    </div>
  )
}

export default CreateStream;
