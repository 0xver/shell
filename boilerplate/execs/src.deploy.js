const deployer = require("./modules/deployer.js");

async function main() {
  await deployer("HelloWorld");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
