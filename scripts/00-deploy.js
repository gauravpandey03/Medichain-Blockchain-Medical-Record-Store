const { ethers } = require("hardhat");
async function main() {
  console.log("Deploying smart contract...");
  const Medical = await ethers.getContractFactory("MedicalRecords");
  const accounts = await ethers.getSigners();
  const medical = await Medical.connect(accounts[0]).deploy();
 
  //await medical.deploy();
  console.log(`Medical is deployed in address ${medical.address}`);
}
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });


