const { expect } = require("chai");

describe("MHT contract testing", function(){
  it("Should assign total supply of tokens to owner", async function(){
    const [owner] = await ethers.getSigners();

    // console.log("Signers object: ", owner);
    const Token = await ethers.getContractFactory("Token");

    const hardhatToken = await Token.deploy();

    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    // console.log("Owner Address: ",owner.address);
    // console.log("Variable `ownerBalance` = ",ownerBalance);

    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);  // passing test
    // expect(await hardhatToken.totalSupply()).to.equal(1000);          // failing test
    
  });
  it("Should transfer tokens between accounts", async function(){
    const [owner, addr1, addr2] = await ethers.getSigners();

    const Token = await ethers.getContractFactory("Token");
    const hardhatToken = await Token.deploy();
    
    // Transfer 10 token from owner to addr1
    await hardhatToken.transfer(addr1.address,10);
    expect(await hardhatToken.balanceOf(addr1.address)).to.equal(10);

    // Transfer 5 token from addr1 to addr2
    await hardhatToken.connect(addr1).transfer(addr2.address,5);
    expect(await hardhatToken.balanceOf(addr1.address)).to.equal(5);   // Will pass as 10 - 5 = 5 token with addr1
    // expect(await hardhatToken.balanceOf(addr2.address)).to.equal(50);  // should be 5 so will fail
  });
});