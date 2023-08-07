import { useMoralis, useWeb3Contract } from "react-moralis";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { abi, contractAddress } from "./constants";

export default function Home() {
  const { enableWeb3, isWeb3Enabled } = useMoralis();
  const [input, setInput] = useState();
  const [number, setNumber] = useState(0);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const { runContractFunction: store } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    functionName: "store",
    params: {
      _favoriteNumber: input,
    },
  });

  const { data, runContractFunction } = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    functionName: "retrieve",
    params: {},
  });

  async function retrieve() {
    runContractFunction();
    setNumber(String(data));
  }

  return (
    <div className={styles.container}>
      xue hua piao piao bei feng xiao xiao
      <br /> <br />
      {isWeb3Enabled ? (
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
        <button onClick={() => enableWeb3()}>Connect</button>
      )}
    </div>
  );
}
