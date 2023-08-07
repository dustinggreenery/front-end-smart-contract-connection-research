const { ethers } = require("hardhat");
const { SMART_CONTRACT_ADDRESS } = require("./constants");

async function main() {
    const simpleStorage = await ethers.getContractAt(
        "SimpleStorage",
        SMART_CONTRACT_ADDRESS
    );
    console.log(`Got contract at: ${simpleStorage.address}`);

    console.log("Storing value...");
    const transactionResponse = await simpleStorage.store(2);
    await transactionResponse.wait(1);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
    });
