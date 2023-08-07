import styles from "../styles/Home.module.css";
import { useWeb3React } from "@web3-react/core";
import { InjectedConnector } from "@web3-react/injected-connector";
import { abi, contractAddress } from "./constants";
import { useState } from "react";
import { ethers } from "ethers";

const injected = new InjectedConnector();

export default function Home() {
  const { activate, active, library: provider } = useWeb3React();
  const [input, setInput] = useState();
  const [number, setNumber] = useState(0);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  async function connect() {
    try {
      await activate(injected);
    } catch (e) {
      console.log(e);
    }
  }

  async function store() {
    if (active) {
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        await contract.store(input);
      } catch (e) {
        console.log(e);
      }
    }
  }

  async function retrieve() {
    if (active) {
      const signer = provider.getSigner();
      const contract = new ethers.Contract(contractAddress, abi, signer);
      try {
        const num = await contract.retrieve();
        setNumber(String(num));
      } catch (e) {
        console.log(e);
      }
    }
  }

  return (
    <div className={styles.container}>
      xue hua piao piao bei feng xiao xiao
      <br /> <br />
      {active ? (
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
