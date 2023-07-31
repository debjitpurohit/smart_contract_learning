// require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-waffle");
///for definig the task
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    const adrress=await account.getAddress();
    const balance=await account.getBalance();///default is wei
    // console.log(account); ///this is the account object nd chain id
    console.log( adrress + ": " + ethers.utils.formatEther(balance));
  }
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  // defaultNetwork: "hardhat",
  defaultNetwork: "sepolia",
  networks:{
    hardhat:{},
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/0vSxXURYpBU-jarPHGbt_6q8At0ptmiO",//alchemy
      accounts: ["c15c2e91168a0875451aee461027c21b3c03e93dbb2009d737f94cc5342bb871"]
          

    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
};
/////
