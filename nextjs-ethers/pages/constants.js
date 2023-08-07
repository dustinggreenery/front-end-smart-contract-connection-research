export const contractAddress = "insert contract address here";
export const abi = [
    {
        inputs: [],
        name: "retrieve",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256",
            },
        ],
        stateMutability: "view",
        type: "function",
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "_favoriteNumber",
                type: "uint256",
            },
        ],
        name: "store",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
    },
];
