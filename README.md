<a href="https://ibb.co/TTn02v7"><img src="https://i.ibb.co/j5xwf6Q/Screenshot-50.png" alt="Screenshot-50" border="0"></a>
# Learning Smart Contract Using Solidity and Hardhat

# DOCS--https://hardhat.org/

# project creation = https://www.alchemy.com/ &  https://www.infura.io/
                   
                    
# etherscan = for sepolia --> https://sepolia.etherscan.io/
<a href="https://ibb.co/RBgrqfh"><img src="https://i.ibb.co/CMwCfgJ/Screenshot-51.png" alt="Screenshot-51" border="0"></a>
# A) COMPILATION
       run npx hardhat compile 
   2) then go to artifacts 
   3) then  contracts ---> .json file.....
***there is abi that connect with frontend using ether.js***
# B)  TESTING
  *****chcecking the solidity smart contract working or not*****


   a) open hardhat console by running
    ***   <b>npx hardhat console</b>     ***
                
                ethers 

               await ethers.getSigners();  

               await ethers.getContractFactory("contract_name"); # example await ethers.getContractFactory("Lock");



  b) <<<-----Testing process that contract working or not------>>>

       const Lock=await ethers.getContractFactory("<contract_name>"); # example const Lock=await ethers.getContractFactory("Lock");

       const lock=await Lock.deploy(<have to pass argument for constractor>); # example const lock=await Lock.deploy(1690806171);

       lock # ex- call the pervious const
   
      await lock2.function_name(); // ex-- await lock2.withdraw();

# c ) DEPLOY
       # for local
             npx hardhat run scripts/deploy.js


       # for sepolia network
             npx hardhat run scripts/deploy.js --network sepolia
  ///and u can check it in sepolia etherscan
   
