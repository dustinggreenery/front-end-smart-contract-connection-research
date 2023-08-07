import { useCall, useContractFunction, useEthers } from "@usedapp/core";
import styles from "../styles/Home.module.css";
import { abi, contractAddress } from "./constants";
import { useEffect, useState } from "react";
import { ethers } from "ethers/lib";

export default function Home() {
  const { activateBrowserWallet, account } = useEthers();
  const contract = new ethers.Contract(contractAddress, abi);
  const [input, setInput] = useState();
  const [number, setNumber] = useState(0);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  async function connect() {
    await activateBrowserWallet();
  }

  const { send: store } = useContractFunction(contract, "store", {
    transactionName: "store",
  });

  async function retrieve() {
    const { value, error } = useCall({
      contract: contract,
      method: "retrieve",
      args: [],
    });

    setNumber(value);
  }

  return (
    <div className={styles.container}>
      xue hua piao piao bei feng xiao xiao
      <br /> <br />
      {account ? (
        <>
          "Connected!"
          <br /> <br />
          <label>New number: </label>
          <input onChange={handleChange} /> <br />
          <button onClick={() => store(input)}>Store</button>
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
