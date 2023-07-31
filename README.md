####smart_contract_learning  ####

#DOCS--https://hardhat.org/

project creation = https://www.alchemy.com/
                    https://www.infura.io/
                    
etherscan = for sepolia --> https://sepolia.etherscan.io/
A) COMPILATION
   1) run npx hardhat compile 
   2) then go to artifacts 
   3) then  contracts ---> .json file
...........there is abi that connect with frontend using ether.js....................
/////////////and byte code deploy in the actual blockchain (ethereum virtual machine)

B)  TESTING
  *********************************************chcecking the solidity smart contract working or not***********************************


   a) open hardhat console by running******* npx hardhat console ***** 

   *********** ethers 

   ************await ethers.getSigners();  

   *************await ethers.getContractFactory("contract_name"); //////////example await ethers.getContractFactory("Lock");



  b) <<<-----Testing process that contract working or not------>>>

   1)  const Lock=await ethers.getContractFactory("<contract_name>"); ////////example const Lock=await ethers.getContractFactory("Lock");

   2)  const lock=await Lock.deploy(<have to pass argument for constractor>); //////example const lock=await Lock.deploy(1690806171);

   3)  lock /// ex- call the pervious const
   
   4)  await lock2.function_name(); // ex-- await lock2.withdraw();

c ) DEPLOY
****************local***********
   npx hardhat run scripts/deploy.js


****************sepolia network***********************
   npx hardhat run scripts/deploy.js --network sepolia
  ///and u can check it in sepolia etherscan
   
