module.exports = {
	'Nightwatch.js Test': function (browser) {
		browser
		  .url(process.env.BAG_CUPID_URL)
		  .assert.title('Bag Cupid')
		  .end();
	}
};
