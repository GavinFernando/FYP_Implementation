require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
// module.exports = {
//   solidity: "0.8.4",
//   paths: {
//     artifacts: './src/artifacts',
//   },
//   networks: {
//     hardhat: {
//       chainId: 1337,
//     },
//   }
// };

const INFURA_API_KEY = "aa4fdc2a71d24262abff7e1cb2022363";

// Replace this private key with your Sepolia account private key
// To export your private key from Coinbase Wallet, go to
// Settings > Developer Settings > Show private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Beware: NEVER put real Ether into testing accounts
const SEPOLIA_PRIVATE_KEY = "a0648509ae6f6087d83557acb599a31005131465f3da377f8bed0df734a6afd6";

module.exports = {
  solidity: "0.8.23",
  networks: {
    sepolia: {
      url: `https://arbitrum-sepolia.infura.io/v3/aa4fdc2a71d24262abff7e1cb2022363`,
      accounts: ["113e1c3e8196a5f98ba7cde2eed63a426c88e22f478014437fe546e8f7703ca5"]
    }
  }
}; 
//this is the original working code....
