describe('Protractor Demo App', function() {

    it('should have a title', function() {

        browser.get('http://juliemr.github.io/protractor-demo/');

        console.log(expect(browser.getTitle()).toEqual('Super Calculator'));

        console.log("Test is successful....... ");
    });


    it('Open Angular js website',function() {
       // browser.get('http://juliemr.github.io/protractor-demo/');
        //repeater ,  chain locators, And css for identical tags
        element(by.model("first")).sendKeys("4");
        element(by.model("second")).sendKeys("5");
        element(by.id("gobutton")).click();element(by.repeater("result in memory")).element(by.css("td:nth-child(3)"))
            .getText().then(function(text)
          {
            console.log(text);
          })

    })




});