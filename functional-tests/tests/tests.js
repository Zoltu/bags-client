module.exports = {
    'Check for page title and Banner': function (browser) {
        browser
		  .url(process.env.BAG_CUPID_URL)
		  .assert.title('Bag Cupid')
          .pause(6000)
          .assert.visible(".banner")
		  .end();
    },
    'Check for Product popup': function (browser) {
        browser
          .url(process.env.BAG_CUPID_URL)
          .pause(7000)
        browser.click('.product-list .product-card:first-child .owl-wrapper > .owl-item:first-child > a')
        .pause(7000)
        browser.assert.visible("#product-popup")
          .end();
    },
    'Check for Show More button': function (browser) {
        browser
          .url(process.env.BAG_CUPID_URL)
           .pause(7000)
          .click('.btn-show-more')
          .pause(7000)
          .elements('css selector', '.product-list .product-card', function (result) {
              this.assert.equal(result.value.length, 48)
          })
          .end();
    },
    'Check Tag in search box for URL with tag filter': function (browser) {
        browser
          .url("http://bagcupid.com/app/tags/3")
          .pause(7000)
          .assert.visible(".select2-container--default .select2-selection--multiple .select2-selection__choice")
          .end();
    },
    'Check for "About US" screen': function (browser) {
        browser
          .url("https://bagcupid.com/app/aboutus")
          .pause(7000)
          .assert.visible(".about-section")
          .end();
    },
    'Banner should be hidden for URL with filter': function (browser) {
        browser
          .url("http://bagcupid.com/app/tags/3")
          .pause(6000);
        browser.expect.element('.banner').to.not.be.visible;
        browser.end();
    },
    'Check for Bag images slider': function (browser) {
        browser
          .url(process.env.BAG_CUPID_URL)
          .pause(7000)
          .click('.product-list .product-card:first-child .owl-next')
          .pause(2000)
          .assert.visible(".product-list .product-card:first-child .owl-wrapper > .owl-item:nth-child(2) img")
          .click('.product-list .product-card:first-child .owl-next')
          .pause(2000)
          .assert.visible(".product-list .product-card:first-child .owl-wrapper > .owl-item:nth-child(3) img")
          .end();
    },
    'Banner should be hidden for URL with filter': function (browser) {
        browser
          .url("http://bagcupid.com/app/tags/3")
          .pause(7000);
        browser.click("#side-filter-trigger")
          .pause(2000)
        browser.expect.element('#side-filter').to.have.css('right').which.equals("0px")
    },
    'Check for Help tour': function (browser) {
        browser
          .url(process.env.BAG_CUPID_URL)
          .pause(7000);

        browser.click('.btn-floating.help > .icon')

        .pause(4000)

        .assert.visible(".enjoyhint-step-1")
        .click('.enjoyhint_next_btn')

        .pause(2000)
        .assert.visible(".enjoyhint-step-2")
        .click('.enjoyhint_next_btn')

        .pause(2000)
        .assert.visible(".enjoyhint-step-3")
        .click('.enjoyhint_next_btn')

        .pause(2000)
        .assert.visible(".enjoyhint-step-4")
        .click('.enjoyhint_skip_btn')

        .end();
    },
    'Check for Min Max prices': function (browser) {
        browser.url("https://bagcupid.com/app/minprice/100/maxprice/800").pause(6000);

        browser.getText("#lbl_min_price", function (result) {
            this.assert.equal(result.value, "100");
        });
        browser.getText("#lbl_max_price", function (result) {
            this.assert.equal(result.value, "800");
        });
        browser.assert.visible("a.price-display");

        browser.click('a.price-display')
        .pause(1000);

        browser.getText("div#price-slider div.noUi-handle-lower div.noUi-tooltip", function (result) {
            this.assert.equal(result.value, "$100");
        });
        browser.getText("div#price-slider div.noUi-handle-upper div.noUi-tooltip", function (result) {
            this.assert.equal(result.value, "$800");
        });
    },
    'Popup should close': function (browser) {
        browser
        .url(process.env.BAG_CUPID_URL)
        .pause(7000)
        browser.click('.product-list .product-card:first-child .owl-wrapper > .owl-item:first-child > a')
        .pause(5000)
        .click("#product-popup > .mfp-close")
        .pause(2000)
        browser.expect.element('#product-popup').to.not.be.present;
        browser.end();
    },
};
