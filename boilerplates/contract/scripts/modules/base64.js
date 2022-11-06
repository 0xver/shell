module.exports = async function base64(tokenURI) {
	let data = Buffer.from(tokenURI.substring(29), "base64").toString();
	return data;
};
