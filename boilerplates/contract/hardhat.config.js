require("@nomicfoundation/hardhat-toolbox");

module.exports = {
	defaultNetwork: "hardhat",
	networks: {
		hardhat: {},
		goerli: {
			url: "",
			accounts: []
		},
		mainnet: {
			url: "",
			accounts: []
		}
	},
	solidity: {
		version: "0.8.4",
		settings: {
			optimizer: {
				enabled: true,
				runs: 200
			}
		}
	},
	paths: {
		sources: "./src",
		scripts: "./scripts",
		tests: "./scripts/test",
		cache: "./build/cache",
		artifacts: "./build/artifacts"
	},
	gasReporter: {
		enabled: true,
		currency: "USD"
	}
};
