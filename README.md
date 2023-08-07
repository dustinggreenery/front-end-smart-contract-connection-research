# Front End Smart Contract Connection Research

![Contributors](https://img.shields.io/github/contributors/dustinggreenery/MattChain)
![Forks](https://img.shields.io/github/forks/dustinggreenery/MattChain)
![Stars](https://img.shields.io/github/stars/dustinggreenery/MattChain)
![Issues](https://img.shields.io/github/issues/dustinggreenery/MattChain)

### Continuation of Patrick's Collins' video on connecting smart contracts to metamask.

#### Link: https://www.youtube.com/watch?v=pdsYCkUWrgQ&pp=ygUgcGF0cmljayBjb2xsaW5zIG1ldGhvZHMgZnJvbnRlbmQ%3D

## Description

This repository is a research project that contains many ways to connect and run functions from smart contracts to front-ends. It uses a simple contract of a singular variable with a setter and getter function. Using the many packages implemented, you can interact with the smart contract in many processes.

### Packages Researched and Implemented

- Ethers
- Web3-React
- Web3Modal
- UseDapp
- Moralis

## Usage

### Getting Started and Deploying the Smart Contract and Front-end

- Fork the repository
- Clone the forked repository
- Go to the file location of the smart contract code (./hardhat-simple-storage)
- Run scripts/deploy.js
- Receieve the contract address
- Go to the constants file of your chosen package to test (./chosen-package/pages/constants.js)
- Change the contract address variable to the deployed contract's address
- Run yarn dev on the project with your chosen package.

### Functionality on the front-end

The front-end is very bare-bones. There is a button to connect, store, and retrieve.

- Clicking the connect button prompts you to connect your metamask wallet to the frontend
- Input a number and use the store button to store that number within the smart contract
- Use the retrieve button to get the variable's value from the smart contract.
