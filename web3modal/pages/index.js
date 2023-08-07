import WalletConnectProvider from "@walletconnect/web3-provider";
import styles from "../styles/Home.module.css";
import Web3Modal from "web3modal";
import { useState } from "react";
import { ethers } from "ethers";
import { abi, contractAddress } from "./constants";

let web3Modal;

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: {
      rpc: { 11155111: process.env.NEXT_PUBLIC_RPC_URL },
    },
  },
};

if (typeof window !== "undefined") {
  web3Modal = new Web3Modal({
    cacheProvider: false,
    providerOptions,
  });
}

export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  const [signer, setSigner] = useState(undefined);
  const [input, setInput] = useState();
  const [number, setNumber] = useState(0);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  async function connect() {
    if (typeof window.ethereum !== "undefined") {
      try {
        const web3ModalProvider = await web3Modal.connect();
        setIsConnected(true);
        const provider = new ethers.providers.Web3Provider(web3ModalProvider);
        setSigner(provider.getSigner());
      } catch (e) {
        console.log(e);
      }
    } else {
      setIsConnected(false);
    }
  }

  async function store() {
    if (typeof window.ethereum !== "undefined") {
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        await contract.store(input);
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log("Please install MetaMask");
    }
  }

  async function retrieve() {
    if (typeof window.ethereum !== "undefined") {
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        const num = await contract.retrieve();
        setNumber(String(num));
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log("Please install MetaMask");
    }
  }

  return (
    <div className={styles.container}>
      xue hua piao piao bei feng xiao xiao
      <br /> <br />
      {isConnected ? (
        <>
          "Connected!"
          <br /> <br />
          <label>New number: </label>
          <input onChange={handleChange} /> <br />
          <button onClick={() => store()}>Store</button>
          <br /> <br />
          <button onClick={() => retrieve()}>Retrieve</button>
          <br />
          Last Retrieve Variable: {number}
        </>
      ) : (
        <button onClick={() => connect()}>Connect</button>
      )}
    </div>
  );
}
