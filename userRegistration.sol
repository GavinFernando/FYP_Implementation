//SPDX-License-Identifier: Unlicense
pragma solidity >=0.7.0 <0.9.0;

contract userRegistration{

    struct Info{
        string userName;
        string country;
        string email;
        
    }

    Info[] public data;

    function registerInstrument(string calldata userName, string calldata country, 
    string calldata email) external payable {
        data.push(Info(userName,country,email));
    }

    function viewRegistration() public view returns (Info[] memory){
        return data; 
    }
} 