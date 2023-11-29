async function main() {
  const Token = await ethers.getContractFactory("Token");
  const token = await Token.deploy().catch((error) => {
    console.error("Error deploying Token contract:", error);
    process.exit(1);
  });
  console.log("Token address:", token.target);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });