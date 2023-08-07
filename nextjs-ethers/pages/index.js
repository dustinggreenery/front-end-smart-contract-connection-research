import styles from "../styles/Home.module.css";
import { useState } from "react";
import { ethers } from "ethers";
import { abi, contractAddress } from "./constants";

export default function Home() {
    const [isConnected, setIsConnected] = useState(false);
    const [signer, setSigner] = useState();
    const [input, setInput] = useState();
    const [number, setNumber] = useState(0);

    const handleChange = (event) => {
        setInput(event.target.value);
    };

    async function connect() {
        if (typeof window.ethereum !== "undefined") {
            try {
                await ethereum.request({
                    method: "eth_requestAccounts",
                });

                setIsConnected(true);
                let connectedProvider = new ethers.providers.Web3Provider(
                    window.ethereum,
                );

                setSigner(connectedProvider.getSigner());
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
