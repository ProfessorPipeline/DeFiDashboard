import React, { useState, useEffect } from 'react';
import Web3 from 'web3';

function App() {
    const [account, setAccount] = useState('');
    const [cryptoAssets, setCryptoAssets] = useState([]);

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

        const fetchCryptoAssets = async () => {
            const response = await fetch('http://localhost:5000/api/cryptoassets');
            const data = await response.json();
            setCryptoAssets(data);
        };

        loadWeb3();
        loadBlockchainData();
        fetchCryptoAssets();
    }, []);

    return (
        <div>
            <h1>Crypto Dashboard</h1>
            <p>Your account: {account}</p>
            <ul>
                {cryptoAssets.map(asset => (
                    <li key={asset.id}>{asset.name}: {asset.amount}</li>
                ))}
            </ul>
        </div>
    );
}

export default App;
