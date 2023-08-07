const { ethers, hre } = require("hardhat");

const SMART_CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

async function main() {
    const simpleStorage = await ethers.getContractAt(
        "SimpleStorage",
        SMART_CONTRACT_ADDRESS
    );
    console.log(`Got contract at: ${simpleStorage.address}`);

    const test = await ethers.provider.getCode(SMART_CONTRACT_ADDRESS);
    console.log(`Test: ${test}`);

    //testing storage
    console.log("Storing value...");
    const transactionResponse = await simpleStorage.store(5);
    await transactionResponse.wait(1);

    console.log("Retrieving value...");
    // const currentValue = await simpleStorage.retrieve();
    // console.log(`Current value is ${currentValue}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
    });
