const { ethers } = require("hardhat");
const { SMART_CONTRACT_ADDRESS } = require("./constants");

async function main() {
    const simpleStorage = await ethers.getContractAt(
        "SimpleStorage",
        SMART_CONTRACT_ADDRESS
    );
    console.log(`Got contract at: ${simpleStorage.address}`);

    console.log("Retrieving value...");
    const currentValue = await simpleStorage.retrieve();
    console.log(`Current value is ${currentValue}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
    });
