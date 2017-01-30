module.exports = {
	'Check for page title and Banner': function (browser) {
		browser.url(process.env.BAG_CUPID_URL);
		browser.assert.title('Bag Cupid');
		browser.waitForElementVisible('.banner', 7000);
		browser.end();
	},
	'Check for Product popup': function (browser) {
		browser.url(process.env.BAG_CUPID_URL);
		browser.waitForElementVisible('.product-list .product-card:first-child .owl-wrapper > .owl-item:first-child > a', 7000);
		browser.click('.product-list .product-card:first-child .owl-wrapper > .owl-item:first-child > a');
		browser.waitForElementVisible('#product-popup', 7000);
		browser.end();
	},
	'Check for Show More button': function (browser) {
		browser.url(process.env.BAG_CUPID_URL);
		browser.waitForElementVisible('.btn-show-more', 7000);
		browser.click('.btn-show-more');
		browser.pause(7000);
		browser.elements('css selector', '.product-list .product-card', function (result) {
			this.assert.equal(result.value.length, 48);
		});
		browser.end();
	},
	'Check Tag in search box for URL with tag filter': function (browser) {
	    browser.url("http://bagcupid.com/app/tags/3");
	    browser.waitForElementVisible(".select2-container--default .select2-selection--multiple .select2-selection__choice", 7000);
		browser.end();
	},
	'Check for "About US" screen': function (browser) {
		browser.url("https://bagcupid.com/app/aboutus");
		browser.waitForElementVisible(".about-section", 7000);
		browser.end();
	},
	'Banner should be hidden for URL with filter': function (browser) {
		browser.url("http://bagcupid.com/app/tags/3");
		browser.waitForElementNotVisible(".banner", 7000);
		browser.end();
	},
	'Check for Bag images slider': function (browser) {
		browser.url(process.env.BAG_CUPID_URL);
		browser.waitForElementVisible('.product-list .product-card:first-child', 7000);
		browser.click('.product-list .product-card:first-child .owl-next');
		browser.waitForElementVisible(".product-list .product-card:first-child .owl-wrapper > .owl-item:nth-child(2) img", 2000);
		browser.click('.product-list .product-card:first-child .owl-next');
		browser.waitForElementVisible(".product-list .product-card:first-child .owl-wrapper > .owl-item:nth-child(3) img", 2000);
		browser.end();
	},
	'Side filter should open': function (browser) {
	    browser.url(process.env.BAG_CUPID_URL);
		browser.waitForElementVisible("#side-filter-trigger",7000);
		browser.click("#side-filter-trigger");
		browser.pause(2000);
		browser.expect.element('#side-filter').to.have.css('right').which.equals("0px");
	},
	'Check for Help tour': function (browser) {
		browser.url(process.env.BAG_CUPID_URL);
		browser.waitForElementVisible('.btn-floating.help > .icon', 7000);

		browser.click('.btn-floating.help > .icon');

		browser.waitForElementVisible(".enjoyhint-step-1", 4000);
		browser.click('.enjoyhint_next_btn');

		browser.waitForElementVisible(".enjoyhint-step-2", 2000);
		browser.click('.enjoyhint_next_btn');

		browser.waitForElementVisible(".enjoyhint-step-3", 2000);
		browser.click('.enjoyhint_next_btn');

		browser.waitForElementVisible(".enjoyhint-step-4", 2000);
		browser.click('.enjoyhint_skip_btn');

		browser.end();
	},
	'Check for Min Max prices': function (browser) {
	    browser.url("https://bagcupid.com/app/minprice/100/maxprice/800");

	    browser.waitForElementVisible('.btn-show-more', 7000);

		browser.getText("#lbl_min_price", function (result) {
			this.assert.equal(result.value, "100");
		});
		browser.getText("#lbl_max_price", function (result) {
			this.assert.equal(result.value, "800");
		});
		browser.assert.visible("a.price-display");

		browser.click('a.price-display');

		browser.getText("div#price-slider div.noUi-handle-lower div.noUi-tooltip", function (result) {
			this.assert.equal(result.value, "$100");
		});
		browser.getText("div#price-slider div.noUi-handle-upper div.noUi-tooltip", function (result) {
			this.assert.equal(result.value, "$800");
		});
	},
	'Popup should close': function (browser) {
		browser.url(process.env.BAG_CUPID_URL);
		browser.waitForElementVisible('.product-list .product-card:first-child .owl-wrapper > .owl-item:first-child > a', 7000);
		browser.click('.product-list .product-card:first-child .owl-wrapper > .owl-item:first-child > a');
		browser.waitForElementVisible("#product-popup > .mfp-close", 5000);
		browser.click("#product-popup > .mfp-close");
		browser.waitForElementNotPresent("#product-popup", 2000);
		browser.end();
	},
};
