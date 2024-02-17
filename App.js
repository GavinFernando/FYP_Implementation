import { useState } from "react";
import { ethers } from "ethers";
// Import ABI Code to interact with smart contract
import Greeter from "./artifacts/contracts/Greeter.sol/Greeter.json";
import "./App.css";

// The contract address
const greeterAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

function App() {
  // Property Variables

  const [message, setMessage] = useState("");
  const [currentGreeting, setCurrentGreeting] = useState("");

  // Helper Functions

  // Requests access to the user's Meta Mask Account
  // https://metamask.io/
  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }

  // Fetches the current value store in greeting
  async function fetchGreeting() {
    // If MetaMask exists
    if (typeof window.ethereum !== "undefined") {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const contract = new ethers.Contract(
        greeterAddress,
        Greeter.abi,
        provider
      );
      try {
        // Call Greeter.greet() and display current greeting in `console`
        /* 
          function greet() public view returns (string memory) {
            return greeting;
          }
        */
        const data = await contract.greet();
        console.log("data: ", data);
        setCurrentGreeting(data);
      } catch (error) {
        console.log("Error: ", error);
      }
    }
  }

  // Sets the greeting from input text box
  async function setGreeting() {
    if (!message) return;

    // If MetaMask exists
    if (typeof window.ethereum !== "undefined") {
      await requestAccount();

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();

      // Create contract with signer
      /*
        function setGreeting(string memory _greeting) public {
          console.log("Changing greeting from '%s' to '%s'", greeting, _greeting);
          greeting = _greeting;
        } 
      */
      const contract = new ethers.Contract(greeterAddress, Greeter.abi, signer);
      const transaction = await contract.setGreeting(message);

      setMessage("");
      await transaction.wait();
      fetchGreeting();
    }
  }

  // Return
  return (
    <div className="App">
      <div className="heading">
        <h1>PlayersChain</h1>
      </div>
      <div className="App-header">
        <div className="description">
          <h1>Register your Instrument</h1>
          <h4>Enter the correct details of your musical instrument.</h4>
        </div>
        {/* BUTTONS - Fetch and Set */}
        <div className="custom-buttons">
          <button onClick={fetchGreeting} style={{ backgroundColor: "red" }}>
            Clear form
          </button>
          <button onClick={setGreeting} style={{ backgroundColor: "green" }}>
            Register!
          </button>
        </div>
        {/* INPUT TEXT - String  */}
        <label className="label">
          Enter Instrument Type: 
          <input
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="enter instrument type"
          />
        </label>
        <label className="label">
          Enter Instrument Brand: 
          <input
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="enter instrument brand"
          />
        </label>
        <label className="label">
          Enter Instrument Brand: 
          <input
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="enter instrument brand"
          />
        </label>
        <label className="label">
          Enter production serial no.: 
          <input
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="enter serial number"
          />
        </label>
        <label className="label">
          Enter Manufacturing date: 
          <input
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="enter date"
          />
        </label>
        <label className="label">
          Enter instrument status: 
          <input
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="new/used/modified"
          />
        </label>
        <label className="label">
          Current ownership: 
          <input
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="enter your name"
          />
        </label>
        <label className="label">
          Current location: 
          <input
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="enter your name"
          />
        </label>
        <label className="label">
          Estimated market value: 
          <input
            onChange={(e) => setMessage(e.target.value)}
            value={message}
            placeholder="enter your name"
          />
        </label>

        {/* Current Value stored on Blockchain */}
        <h2 className="greeting">Summary of instrument registration: {currentGreeting}</h2>
      </div>
    </div>
  );
}

export default App;