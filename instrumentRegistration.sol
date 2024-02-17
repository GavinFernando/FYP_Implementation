//SPDX-License-Identifier: Unlicense
pragma solidity >=0.7.0 <0.9.0;

contract instrumentRegistration{

    struct Info{
        string ownerName;
        string instrumentType;
        string manufactureBrand;
        // string productSerialNumber;
        // string dateOfManufacture;
        // string status;
        // string currentLocation;
        // string estimatedMarketValue;
    }

    Info[] public information;

    function registerInstrument(string calldata ownerName, string calldata instrumentType, string calldata manufactureBrand
    ) external payable {
        information.push(Info(ownerName,instrumentType,manufactureBrand));
    }

    function viewRegistration() public view returns (Info[] memory){
        return information; 
    }
} 