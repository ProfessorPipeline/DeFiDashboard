import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

function App() {
    const [account, setAccount] = useState('');

    useEffect(() => {
        const loadWeb3 = async () => {
            if (window.ethereum) {
                window.web3 = new Web3(window.ethereum);
                await window.ethereum.enable();
            } else if (window.web3) {
                window.web3 = new Web3(window.web3.currentProvider);
            } else {
                window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
            }
        };

        const loadBlockchainData = async () => {
            const web3 = window.web3;
            const accounts = await web3.eth.getAccounts();
            setAccount(accounts[0]);
        };

        loadWeb3();
        loadBlockchainData();
    }, []);

    return (
        <div>
            <h1>Crypto Dashboard</h1>
            <p>Your account: {account}</p>
        </div>
    );
}

export default App;
